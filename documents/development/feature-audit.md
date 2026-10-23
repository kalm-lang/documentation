# Kalm 1.2.0 implementation coverage

The target is the final specification. The [acceptance checklist](https://github.com/kalm-lang/tools/blob/feat/kalm-1.2.0/docs/conformance-1.2.0.md)
connects its requirements to verification work; [conformance](conformance.md) identifies executable suites.

| Area | Implementation and evidence |
|---|---|
| Types and Java API | Lowercase primitives, capitalized wrappers, non-null boundaries, escaped names and separately compiled metadata |
| Declarations | Contextual names, open defaults, explicit finality, sealed children, ordered defaults and Java omission overloads |
| Values and effects | Conditional/match values, yield, safe casts/assertions, bracket bindings and indexed assignment staging |
| Completion and capture | Value-return checks, functional targets, local functions, refinements and parent calls |
| Libraries | Ordered collection helpers, strict parsing, UTF-8 files/console, UTC and monotonic time, bounded tasks |
| Documentation | Final specification, separate migration companion, KalmDoc and directly compiled handbook examples |
| Tooling | Shared language server, Maven/Gradle integration, native/TextMate highlighting and matching editor bundles |
| Distribution | Deterministic archives, bundled artifact installation and runnable Maven/Gradle/CLI examples |

Constructor initialization, cleanup, source ownership and diagnostic ranges retain their regression suites.
Historical specification editions use the legacy grammar; current documentation uses the 1.2 grammar.

## Boundaries

Named arguments, payload variants, operator overloading, capturing inner classes, a standalone debugger and
a package manager are outside this edition. Default parameters and their Java overloads are supported.
Some generated-body diagnostics retain Java names because javac resolves the final body types.

Direct `Singleton.INSTANCE.property` inference can require a typed local; Java getters/setters remain callable.
Open unrelated modules with conflicting fully qualified declarations as separate editor workspaces.
See [implementation boundaries](known-limitations.md) for operational details.

Interactive IDE acceptance and Windows execution require their respective environments.
Public publication requires the release owner's configured publisher accounts.
