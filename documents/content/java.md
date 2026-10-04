# Java interoperability

Kalm emits readable Java and ordinary JVM class files. Java sees records,
enums, interfaces, methods, and constructors rather than a separate object model.

## Calls in both directions

The [mixed project](../../examples/demo-mixed-project/README.md) includes Commons
Lang and a handwritten Java helper that calls a Kalm facade. Both source sets are
analyzed together, then compiled together; neither must be built first.

Top-level functions in `App.kalm` live in `AppKalm`. A public type belongs in its
matching file. Explicit imports retain ordinary Java visibility and invocation
rules. Java overloads, varargs, boxing, primitive widening, and SAM targets use
javac resolution. Kalm overload declarations remain deferred.

## Absence at the boundary

Unannotated Java references are platform types. Give a potentially absent value
an explicit nullable binding before using null coalescing. Assignments to a
non-null Kalm target warn when the Java contract is unknown.

```kalm
pub fun projectName() -> Text:
    fix configured: Text? = System.getProperty("project.name")
    return configured ?? "untitled"
```

Generated reference signatures carry class-retained nullability metadata,
including generic arguments and array dimensions. Later Kalm compilations use
that metadata. The Java caller still needs to honor the declared contract.

## Checked I/O and resources

Use `try`/`handle` for checked Java exceptions and `with` for closeable resources.
The task-report reader demonstrates the pattern with `BufferedReader` and
`StringReader`, including errors declared by Java's `close()` method.

An `external fun` binds a named Kalm function to a Java static method. Forwarded
contract methods preserve generic substitutions and checked exceptions.

## JVM mapping

| Kalm | Java |
| --- | --- |
| `Text`, `Int`, `Bool`, `Unit` | `String`, `int`, `boolean`, `void` |
| `data` | Java record |
| `choice` | Non-generic Java enum |
| `contract` | Java interface |
| `read` / `write` | Conventional getter / setter |
| `Array<Int>` / `IntArray` | `Integer[]` / `int[]` |
| `Task<T>` | Runtime interface extending `CompletionStage<T>` |

See the [language guide](../../docs/language-guide.md),
[advanced example](../../examples/task-report/README.md), and
[implementation boundaries](../../docs/known-limitations.md).
