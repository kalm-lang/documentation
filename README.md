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

## Website language variants

Handbook articles, examples, and lessons author equivalent Kalm, Kalm Script, and Java source in `compare` Markdown containers. Native tests and Java-callable APIs explain their script restrictions. `dialect` containers hold mode-specific instructions. Java test counterparts use JUnit Jupiter. The website README documents the container format and source verification; package exports still preserve the authored Markdown unchanged.

Source fences support authored `style`, `os`, `shell`, and fixed `pane` metadata after their filename. Groups declare `presentation: "adaptive" | "showcase"` and independent `locks` for dialect, style, OS, and shell. Intentional syntax demonstrations retain labeled panes while unlocked properties follow reader preferences. Historical specifications retain their original presentation.

Keep four-space indentation and multiline bodies. Format Kalm with its existing formatter and Java with Prettier's Java plugin. Standalone Java 25 examples use compact `void main()` programs; packaged sources and reusable classes keep explicit declarations. Each displayed variant must compile directly; verification never supplies hidden wrapper classes. Package declarations and filenames must match their Kalm counterparts.
