# Draft conformance and release gates

The repository targets [Kalm 1.0 draft](../Kalm-Language-Specification-v1.0-draft.md). Its component version remains **0.1.0-SNAPSHOT**. The checks below are executable acceptance gates; a passing test suite is evidence for its fixtures, rather than a claim about every possible program.

## Language and Java interoperability

| Draft requirement | Acceptance coverage |
| --- | --- |
| Lexing, grammar, malformed statements, source ranges | `ParserTest`, accepted/rejected parser fixtures |
| Nullable flow, invariant generic arguments, safe access/indexing, `??`/`??=` | `NullableFlowTest`, `SemanticChecksTest`, `LanguageTypesTest`, `LanguageRuntimeTest` |
| Local inference, immutable writes, definite constructor assignment, return paths | `SemanticChecksTest`, `LanguageExpressionsTest`; documented javac analysis of final generated bodies |
| Contracts, overrides, inheritance, sealed hierarchies, choices, records, singletons | `LanguageTypesTest`, `PatternCompilerTest`, `JointSignaturesTest` |
| Properties, lazy/late guards, augment/bridge, forwarding, externals, annotations, legacy | `LanguageRuntimeTest`, `LanguageTypesTest`, `InteropCompilerTest`, `CompilerIntegrationTest` |
| Resources, defer, checks, tasks, await, completion stages, guards, tests/hooks | `LanguageRuntimeTest`, `NullableFlowTest`, runtime tests |
| Arrays, primitive Java signatures, varargs, overloads, Java SAMs and streams | `CompilerTest`, `LanguageExpressionsTest`, `LanguageRuntimeTest` |
| Same-source Java↔Kalm calls and inherited generic Java interfaces | `JointSignaturesTest`; Maven Invoker fixtures and Gradle TestKit |
| Third-party dependencies | `InteropCompilerTest` and the mixed sample's Commons Lang dependency |
| Named JPMS application and ordinary classpath applications | `ModuleCompilerTest`, mixed sample |
| Separate compilations preserve nullability and module visibility | `CompilerIntegrationTest` |
| Expression diagnostic maps and UTF-16 unsaved snapshots | `SourceMapTest`, LSP fixtures and packaged editor verification |
| Retained source maps for runtime exceptions | `CompilerIntegrationTest`; CLI and test-runner remapping |

Some type/name errors are discovered by the final javac analysis rather than a separate Kalm-only checker. `check` still performs this analysis without emitting class files. The signature pass uses only documented compiler APIs; stubs remain in memory and never become application class files.

## Builds and editors

| Delivery requirement | Gate |
| --- | --- |
| Maven main/test source sets, both call directions, positive/negative diagnostics | Root `mvn clean install`, including Maven Invoker fixtures |
| Gradle source sets, cacheable generation, deletion, test XML/HTML | `./gradlew -p kalm-gradle-plugin test validatePlugins` |
| Independently built mixed-language sample | Maven `clean verify`; Gradle `test --configuration-cache`, repeated for cache reuse |
| Shared LSP diagnostics, formatting, navigation, rename, Java source references | `KalmLanguageServerTest`, `LspWorkspaceTest` |
| Actual VS Code TextMate grammar and packaged extension | `npm run check`, `npm test`, `npm run package` |
| Native IntelliJ lexer and Community-compatible package | IntelliJ `test buildPlugin verifyPluginStructure` |
| Both editor archives ship the current compiler/server | `python3 scripts/verify_editor_packages.py` checks JAR hashes and exercises stdio initialization, formatting, diagnostics and unsaved UTF-16 spans |
| Deterministic archives, launcher permissions, binary compile/run | `python3 scripts/verify_distribution.py` |
| Identical artifacts from clean builds in different directories | `python3 scripts/verify_clean_builds.py --offline` |
| Installed distribution builds, packages and runs its own example | `python3 scripts/verify_distribution.py --build-example` |
| Windows build/launcher compatibility | Windows CI job; requires a Windows runner |

CI uploads the staged distribution and test reports. Gradle `publish` stages a local repository; it does not upload to the Plugin Portal. Maven, VS Code and IntelliJ registry publication requires the owner's configured accounts and release credentials.

## Remaining 1.0 decisions and release checks

- **Generic choices:** §12 admits type parameters while §6 requires a Java enum. Java enums cannot be generic. The compiler diagnoses generic choices; ordinary choices have finite variants and exhaustiveness checks. The draft needs a consistent rule before a 1.0 claim.
- **Late-field initialization:** runtime guards support assignment after construction and Java access. The draft's compile-time guarantee needs an initialization protocol for values passed between methods and Java callers. That guarantee is not currently provided for arbitrary late-field reads.
- **Interactive editor acceptance:** automated lexer/server/package checks pass independently of a running IDE. A release owner should still exercise installation, project import, editing, refactoring and formatting in supported VS Code and IntelliJ versions.
- **Publication:** staged archives are available; no public registry upload or marketplace publication is claimed.

See [implementation boundaries](known-limitations.md) for operational details and [development workflow](development-brief.md) for the commands to reproduce these gates.
