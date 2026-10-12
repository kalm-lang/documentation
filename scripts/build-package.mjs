import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const grammar = createRequire(import.meta.url)('@kalm-lang/syntax-highlighting/grammar');

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'generated');
const version = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8')).version;
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
export function parseDocument(markdown, file) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  const metadata = match ? JSON.parse(match[1]) : {};
  if (file.startsWith('content/') && (!match || typeof metadata.title !== 'string' || !metadata.title.trim() || !Number.isFinite(metadata.order))) {
    throw new Error(`Document needs JSON front matter with title and numeric order: ${file}`);
  }
  return { file, metadata, markdown, content: match ? markdown.slice(match[0].length) : markdown };
}
async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.sort((a, b) => a.name.localeCompare(b.name)).map(async entry => {
    const file = resolve(directory, entry.name);
    return entry.isDirectory() ? collect(file) : [file];
  }))).flat();
}
const documents = {};
// Compatibility export; only the shared package maintains this grammar.
const assets = { 'assets/kalm.tmLanguage.json': grammar };
for (const file of await collect(resolve(root, 'documents'))) {
  const key = relative(resolve(root, 'documents'), file).replaceAll('\\', '/');
  if (key.endsWith('.md')) {
    const document = parseDocument(await readFile(file, 'utf8'), key);
    documents[key] = document;
    const module = resolve(output, key.replace(/\.md$/, '.mjs'));
    await mkdir(dirname(module), { recursive: true });
    await writeFile(module, `export const metadata = ${JSON.stringify(document.metadata)};\nexport default ${JSON.stringify(document.markdown)};\n`);
    await writeFile(module.replace(/\.mjs$/, '.d.mts'), 'export declare const metadata: Readonly<Record<string, unknown>>;\ndeclare const markdown: string;\nexport default markdown;\n');
  } else if (key.endsWith('.json')) {
    assets[key] = JSON.parse(await readFile(file, 'utf8'));
  }
}
if (!Object.keys(documents).length) throw new Error('No documentation found');
const data = { version, documents, assets };
await writeFile(resolve(output, 'index.cjs'), `'use strict';\nmodule.exports = ${JSON.stringify(data, null, 2)};\n`);
await writeFile(resolve(output, 'index.mjs'), "import data from './index.cjs';\nexport const { version, documents, assets } = data;\n");
await writeFile(resolve(output, 'index.d.ts'), `export interface DocumentationRecord {
  file: string;
  metadata: Readonly<Record<string, unknown>>;
  markdown: string;
  content: string;
}
export declare const version: string;
export declare const documents: Readonly<Record<string, DocumentationRecord>>;
export declare const assets: Readonly<Record<string, unknown>>;
`);
console.log(`Built ${Object.keys(documents).length} documents for ${version}`);
