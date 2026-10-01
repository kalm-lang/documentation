# Migration notes for the v1 draft implementation

The previous development compiler accepted nullable Kalm references in non-null return types and inferred locals without checking later dereferences. These programs now produce `KALM-2001` diagnostics. Use a nullable result, safe access, `??`, or a stable `fixed` value refined by a null check. Mutable `var` values retain their declared nullable type after an assignment, including `??=`. The value of `??=` itself has the fallback's nullability.

`Array<Int>` and other primitive type arguments now denote boxed reference arrays (`Integer[]`). Use `IntArray` for `int[]`. This corrects the mapping required by the specification and changes affected generated Java signatures.

Methods implementing a Java interface now require `override fun`. Generated overrides and forwarded methods preserve compatible checked exceptions from the Java signature, including interfaces defined in the same source set.

The CLI discovers `src/main/java` or `src/test/java` alongside its default Kalm roots. When supplying custom Kalm roots, add handwritten Java roots explicitly with repeatable `--java-source-root` options. Signature analysis uses in-memory Java files and never emits or packages stub classes.
