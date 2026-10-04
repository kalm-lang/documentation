# Usability delivery

Implemented on 2026-10-04. The cumulative checkout is
`feat/website-tutorial`; `main` remains at `13bbe49`. Branches are stacked
locally so each feature has its own reviewable changes. Nothing was merged,
pushed, deployed, or published to a registry.

## Delivered behavior

- Aligned the draft's choices, layout, and late-field guarantees with the
  implementation; recorded missing features and explicit boundaries.
- Corrected constructor initialization across lexical scopes and normally
  completing paths; added actionable diagnostic remedies.
- Added offline `kalm init` with CLI/Maven/Gradle builds, hello/empty templates,
  configurable names/packages, and rollback of files created during failure.
  Running native tests preserves compiled main classes.
- Moved the mixed project into `examples/`, added the exact README greeting,
  and added a task-report application with eight native tests and Java interop.
  All three projects ship in the standalone distribution.
- Added a Lit website with 22 static pages, canonical reference documents,
  example source browsers, and a six-lesson source-backed tutorial. It supports
  light/dark/system themes, mobile and keyboard navigation, copy buttons,
  reduced motion, enlarged text, and reading without JavaScript.

## Feature branches

| Branch | Main change |
| --- | --- |
| `feat/language-audit` | Draft alignment and usability audit |
| `fix/field-initialization` | Constructor-flow analysis |
| `feat/actionable-diagnostics` | Diagnostic remedies |
| `feat/cli-init` | Configurable offline scaffolding |
| `refactor/examples-layout` | Mixed project relocation |
| `feat/example-hello` | README greeting project |
| `feat/example-task-report` | Advanced project and source-only packaging |
| `feat/website-foundation` | Lit components and responsive visual design |
| `fix/scaffold-builds` | Modern standalone Maven lifecycle plugins |
| `feat/website-docs` | Canonical docs and source browsers |
| `fix/init-rollback` | Partial-file ownership during scaffolding |
| `feat/website-tutorial` | Tutorial and browser acceptance gates |

Conventional commits separate the feature work and follow-up corrections.
Review each branch against its preceding branch in this table; the final
branch contains the complete implementation.

## Run and verify

See [examples](../examples/README.md), [website commands](../website/README.md),
and [conformance](conformance.md) for the detailed acceptance record.

```sh
mvn -B -ntp clean install
python3 scripts/verify_clean_builds.py --offline
python3 scripts/verify_editor_packages.py
python3 scripts/package_distribution.py
python3 scripts/verify_distribution.py --build-example
cd website
npm ci
npm run check
npm run build
npx playwright install chromium
npm test
npm run dev
```

The compiler and examples require JDK 25+. The website requires Node 22.12+.
Website dependencies are pinned to registry-verified latest stable versions at
implementation time. Generated artifacts and caches are ignored.

## Remaining boundaries

The [audit](feature-audit.md) and [implementation limits](known-limitations.md)
record deferred language expansion and the typed-local workaround for direct
singleton property inference. Automated editor packaging passed; interactive
IDE installation and Windows execution remain separate acceptance checks.
