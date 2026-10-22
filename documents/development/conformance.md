# Kalm 1.2.0 conformance

The [final specification](https://github.com/kalm-lang/specification/blob/v1.2.0/documents/v1.2.0.md)
defines the contract. The [shared acceptance checklist](https://github.com/kalm-lang/tools/blob/feat/kalm-1.2.0/docs/conformance-1.2.0.md)
tracks its scenarios. Component versions are aligned to `1.2.0`; version metadata alone does not establish conformance.

| Requirement group | Executable evidence |
|---|---|
| Primitive/wrapper signatures, contextual names, defaults, bindings, inheritance, completion | Compiler `Version120Test` and existing type/interop suites |
| Conditional values/execution, cleanup, evaluation order, null boundaries | Compiler `Version120FlowTest` |
| KalmDoc conversion, warnings, escaping, standard JDK doclet | Compiler `Documentation120Test` |
| Parsing, snapshots, UTF-8, bounded concurrency, timeouts | Standard library `LibraryContractsTest` |
| Script state, replacement, lifecycle, diagnostics | Compiler shell suites |
| Shared highlighting and historical editions | Syntax-highlighting Node, type, and browser checks |
| Build integrations, editor bundles, runnable documentation, distribution | Tools workspace and distribution checks |

Run producers before consumers through the optional sibling workspace. Registry authentication is unnecessary for
local Kalm dependencies; third-party downloads still require network access. Shell checks require loopback sockets
for JShell's separate JVM. Platform/editor checks unavailable on a host must be reported separately from passing checks.
