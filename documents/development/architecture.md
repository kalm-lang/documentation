# Compiler architecture

All production semantic consumers use `kalm-compiler`. The backend uses documented JDK APIs, without preview features or javac internals.

## Pipeline

1. `frontend`: lexer, declaration/type/expression/statement parsers and immutable AST nodes.
2. `analysis`: project declarations, aliases, typed expression flow, stable-value refinements, nullability and Java signatures.
3. `JavaSignatureAnalysis`: in-memory Kalm signature Java plus handwritten Java, analyzed by `JavacTask`. `JavaSymbols` retains `Elements`, `Types` and `Trees` for source/dependency signatures, inherited generics and editor locations. Signature bodies are placeholders; intermediate body diagnostics are deferred to implementation analysis. Stub classes never enter class outputs.
4. `codegen`: separate type/member/call/null/choose/expression/statement emitters create ordinary Java implementations.
5. `JavaCompilation`: checks implementations with handwritten Java, or compiles both together using `JavaCompiler --release N`.

`KalmCompiler.Request` carries source/Java roots, classpaths, module paths, release, encoding and analysis arguments. `Generation` returns generated files, entry points and warnings. `Analysis` is an explicit closeable symbol-model lifetime for editor queries. Dependency classloaders and file managers close after use.

## Ownership and diagnostics

`GeneratedSources` tracks only owned Java files in `.kalm-generated`; source-map sidecars follow the same ownership. Content-stable files keep their timestamps. CLI compilation tracks owned class outputs in `.kalm-classes` and removes stale classes without deleting unrelated files.

`SourceMaps` strips nested expression markers from emitted Java and stores generated-offset-to-Kalm-span mappings in `.java.kalm-map`. Javac errors choose the smallest containing expression; declaration/statement comments provide a fallback. Diagnostics have stable codes, UTF-16 positions and human/JSON renderings. Reference signatures retain nullable/non-null annotations; `KalmInternal` enforces compiled Kalm module boundaries while Java callers can use normal JVM visibility.

Null operators lower to Java switch expressions with a single receiver evaluation. Branches preserve lazy fallback/index/argument evaluation and do not capture mutable local fallbacks in Java lambdas. Typed checking and lowering share expression types and stable-value refinements.

## Build adapters and editors

Maven and Gradle generate Java before their normal Java compilation. Both analyze main/test sources against real project dependencies and avoid a task cycle. Gradle forks the selected Java toolchain; Maven uses a selected JDK toolchain when present. `KalmTestRunner` and `TestReports` supply common test execution and XML/HTML reporting.

`ProjectConfiguration` exports resolved workspace roots/classpaths/modulepaths/release to a properties file under the project build directory. The LSP reads that metadata and overlays unsaved documents on closed workspace files. It checks snapshots without replacing user source files, disposes temporary analysis files, and indexes declaration identities for scoped references/rename, including Java callers through javac trees.

VS Code is a language-client adapter with native TextMate highlighting and host build commands. IntelliJ provides native lexical highlighting and source-root registration, then uses LSP4IJ for shared semantics. Both packages bundle the same server artifacts; the server runs on JDK 25 independently of the editor's runtime.

## Shell sessions

`frontend/SnippetParser` reuses the language parsers for mixed top-level snippets
and structured completeness. `cli/shell` owns arguments, terminal commands and
rendering. `compiler/shell/ShellSession` owns session metadata and JShell's standard
child JVM, independently of terminal input. Session values remain in that JVM.

`ShellCompilation` validates each proposed session without execution. Existing
bindings become typed placeholder fields, while earlier statements and binding
initializers are excluded. The compiler checks affected definitions before
`SnippetEmitter` sends only the new snippet to JShell. Expression types use
javac inference, with Kalm nullability and mutability checks. Emitted source
markers preserve original diagnostic and runtime locations. Runtime exceptions
retain completed effects; closing or resetting a session closes its child JVM.

`.kalms` scripts use the same sequential compile-only validation in editors.
The language server keeps their diagnostics and symbols separate from application
projects and offers `kalm.runScript`. Project roots and dependencies are never
added to script analysis or execution.
