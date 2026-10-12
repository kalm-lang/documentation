# Kalm documentation

Markdown sources for the handbook, syntax examples, learning path, homepage content, and developer documentation. Source files live under `documents/content/` and `documents/development/`; the syntax grammar is maintained in `@kalm-lang/syntax-highlighting`.

```sh
npm install --no-package-lock
npm test
npm pack
```

Requires Node 22.12+. Package generation uses the pinned shared grammar package as a development dependency. `generated/` contains the ignored package API and individual document modules. Markdown remains the source of truth; builds retain it unchanged.

The package is `@kalm-lang/documentation`, initially `0.1.0`, published to GitHub Packages. Configure `@kalm-lang:registry=https://npm.pkg.github.com` and package-read authentication before installing it.

```js
import { documents, assets, version } from '@kalm-lang/documentation';
console.log(version, documents['content/docs/quick-start.md'].markdown);
import quickStart, { metadata } from '@kalm-lang/documentation/content/docs/quick-start';
```

The root supports ESM, CommonJS, and TypeScript. Records expose `file`, `metadata`, complete `markdown`, and front-matter-free `content`. `assets` contains supporting JSON keyed by its document-relative path. The legacy `assets["assets/kalm.tmLanguage.json"]` export is generated from the shared grammar for compatibility; applications should consume the highlighting package directly. Raw files are exported through `@kalm-lang/documentation/documents/*`.

Website content uses JSON front matter with a title and numeric order. Developer Markdown need not have front matter. The package version applies to the complete collection; documents have no separate release versions.

Release with `vX.Y.Z[-status]` or the manual Release documentation workflow. Empty version uses package.json; empty/final status produces a final package. The workflow checks duplicates, tests the package, publishes it, and creates a GitHub release **without assets**. Use npm or browse the Git tree at the tag. No PDFs or historical-package variant are generated.

See [bootstrap and credentials](https://github.com/kalm-lang/tools/blob/main/docs/bootstrap.md) and [the optional local workspace](https://github.com/kalm-lang/tools/blob/main/docs/workspace.md).
