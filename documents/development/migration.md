# Migration notes for the v1 draft implementation

The previous development compiler accepted nullable Kalm references in non-null return types and inferred locals without checking later dereferences. These programs now produce `KALM-2001` diagnostics. Use a nullable result, safe access, `??`, or a stable `fixed` value refined by a null check. Mutable `var` values retain their declared nullable type after an assignment, including `??=`. The value of `??=` itself has the fallback's nullability.

`Array<Int>` and other primitive type arguments now denote boxed reference arrays (`Integer[]`). Use `IntArray` for `int[]`. This corrects the mapping required by the specification and changes affected generated Java signatures.

Methods implementing a Java interface now require `override fun`. Generated overrides and forwarded methods preserve compatible checked exceptions from the Java signature, including interfaces defined in the same source set.

The CLI discovers `src/main/java` or `src/test/java` alongside its default Kalm roots. When supplying custom Kalm roots, add handwritten Java roots explicitly with repeatable `--java-source-root` options. Signature analysis uses in-memory Java files and never emits or packages stub classes.

## Joint compiler and shared editor implementation

- Maven `testCompile` now binds to `process-test-sources`, allowing it to see compiled main classes.
- VS Code uses the bundled shared Java language server by default. Remove settings that depended on the earlier JavaScript analyzer; set `kalm.java.command` to JDK 25 when needed.
- IntelliJ packages the server and adds native highlighting/source roots. `KALM_JAVA_COMMAND` selects its server JDK; `KALM_LSP_COMMAND` still supports an external server.
- Java reference signatures now retain nullability and Kalm module visibility metadata. Nullable values no longer pass silently to non-null Kalm declarations across compiled boundaries.
- Arithmetic rejects mixed numeric types. Nullable mutable bindings retain their declared type after `??=`; use a fixed refined value or coalesce explicitly.
- Unannotated Java references and legacy function/method uses produce warnings. Existing code remains valid when only warnings are present.
- Generated Java has expression mapping sidecars. The CLI cleans stale owned class files after a successful rebuild; host builds retain their normal Java incremental compilation.
- Gradle compilation runs in the selected JDK, emits HTML reports, and has explicit source filters/analysis arguments.

## Diagnostic and null-assignment corrections

Mapped javac type/name errors now use the Kalm type/name family: `KALM-2010` unresolved symbol, `KALM-2011` incompatible type/arguments, `KALM-2012` missing return, `KALM-2013` ambiguous reference and `KALM-2014` definite assignment. Interop/build errors remain `KALM-3000`. Update tools that matched all javac failures as `KALM-3000`.

`??=` follows the draft's mutable-local-or-field rule; use ordinary assignment for a `write` property. Nullable and primitive `guard` locks are diagnosed. Task blocks infer nullable result types, and `await` resolves inherited Java completion-stage type arguments.

Unknown record generators are diagnosed; the supported spelling is `generate Display`. Precompiled test execution uses the explicitly supplied runtime classpath so Maven and Gradle outputs cannot shadow one another.

## Generic calls and casts

Constructor arguments, generic function parameters and Java members now preserve instantiated nullable type arguments. Code that placed `Text?` into `Box<Text>` must use `Box<Text?>` or supply a non-null value. Nullable elements remain nullable when accessed through inherited Java generic methods.

Casting null to a non-null target raises `ClassCastException`; use a nullable cast target when null is allowed. Cast operands are evaluated once. CLI application and test execution now use their application class loader as the thread context loader, restoring the previous loader afterward.
