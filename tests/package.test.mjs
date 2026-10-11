import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import '../scripts/build-package.mjs';
const api = await import('../generated/index.mjs');
test('ESM and CommonJS export every document with unchanged Markdown', async () => {
  const common = createRequire(import.meta.url)('../generated/index.cjs');
  assert.deepEqual(common.documents, api.documents);
  assert.equal(api.version, JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8')).version);
  assert.ok(api.documents['development/architecture.md']);
  assert.equal(Object.values(api.documents).filter(doc => doc.metadata.lesson).length, 8);
  for (const [file, document] of Object.entries(api.documents)) {
    assert.equal(document.markdown, await readFile(new URL(`../documents/${file}`, import.meta.url), 'utf8'));
  }
  const quickStart = await import('../generated/content/docs/quick-start.mjs');
  assert.equal(quickStart.default, api.documents['content/docs/quick-start.md'].markdown);
  assert.ok(Array.isArray(api.assets['content/examples/topics.json']) || typeof api.assets['content/examples/topics.json'] === 'object');
});
