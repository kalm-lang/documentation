# Language usage

The [draft specification](../specifications/Kalm-Language-Specification-v1.1-draft.md) defines the complete syntax. The runnable examples below are covered by compiler tests or the mixed project.

## Layout and block styles

Kalm has two ways to write a block. Braces make boundaries explicit; a colon introduces an indented suite that keeps the body uncluttered. Both styles support function and type bodies, control-flow branches, and other compound statements. Colon suites can be multiline or, for a simple statement, inline. Empty bodies are written `{}`.

```kalm
pub fun greet(name: Text?) -> Unit:
    fix display = name ?? "Guest"
    if display == "Guest":
        sayLine("Welcome!")
    else:
        sayLine(display)
```

Keep related blocks at the same level in one style. In particular, use matching delimiters for all branches of an `if`/`else`, and keep neighboring declarations or statements consistent. The formatter applies the style of the first block in each same-level group, including at the top level. For example, if the first top-level function uses `:`, a following function written with `{}` is formatted with `:` too. The empty-block form `{}` remains available because a colon suite requires a body.

Style is chosen independently at each nesting level. A function written with a colon suite may contain an `if`/`else` written with braces, as long as both branches use braces:

```kalm
pub fun greet(name: Text?) -> Unit:
    if name == null {
        sayLine("Welcome!")
    } else {
        sayLine(name)
    }
```

Simple statements end at a logical newline or semicolon. Use semicolons when placing multiple simple statements on one line. `bin/kalm format <source-root>` checks formatting without changing files and reports any that differ; pass `--fix` to apply the formatter's changes. Editor formatting applies changes when you invoke the editor's format command.

Use `fix` instead of the former `fixed` keyword. `Unit` still means Java `void`; Java's boxed `Void` remains a separate type. Console, text, collection and numeric helpers come from the `kalm-stdlib` dependency and its automatic prelude.

## Values and nullable flow

`fix` makes a binding immutable; `var` allows writes. Public results, parameters and fields have explicit types. `Text` maps to Java `String`, `Int` to `int`, `Array<Int>` to `Integer[]`, and `IntArray` to `int[]`.

```kalm
pub fun firstName(names: List<Text>?) -> Text = names?[0] ?? "Guest";

pub fun normalizedName(name: Text?) -> Text {
    fix candidate = name;
    if (candidate != null) { return candidate.upper(); }
    return "GUEST";
}
```

Safe access evaluates the receiver once and skips indexes/arguments on null. Coalescing evaluates the fallback only on null. `??=` yields the existing value or assigned fallback. Mutable bindings keep their declared nullable type after writes; refine a `fix` value or coalesce explicitly. A null receiver is distinct from an empty list: safe indexing retains Java bounds behavior.

Arithmetic operands must have matching numeric types, with Java promotion of `Byte`, `Short` and `Char` to `Int`. Checked explicit conversions include `toByte()`, `toInt()` and `toLong()`. `upper()` and `lower()` use `Locale.ROOT`.

## Records, contracts and forwarding

```kalm
pub data Box<T>(value: T) generate Display;

pub contract Greeter { fun greet(name: Text) -> Text; }

pub class DelegatedGreeting impl Greeter {
    private fix delegate: Greeter;
    init(delegate: Greeter) { self.delegate = delegate; }
    forward Greeter to delegate;
}
```

Public types live in a matching `.kalm` file; facade functions live in `<FileName>Kalm`. Java sees ordinary public methods, constructors, records and interfaces. `override fun` is required for interface implementations and inherited overrides. Forwarding preserves substituted Java generic signatures and checked exceptions.

Other type forms include `base class` with `needs fun`, `closed class` with nested permitted subclasses, `choice` enums, `singleton`, and generic `alias`. Classes and methods are final by default; use `extendable` where extension is intended.

## Java interoperability

```kalm
use java.time.LocalDate;
use java.nio.file.Path;

external fun loadText(path: Path) -> Text = java.nio.file.Files.readString;
pub fun year() -> Int = LocalDate.now().getYear();
```

Both source sets are analyzed together before emission, so Java and Kalm can call each other without compiling either side first. Ordinary dependencies, Java overloads, varargs and SAM lambdas retain Java invocation rules. Handle checked exceptions with `try`/`handle`, or forward them through supported declarations.

Generated reference signatures carry CLASS-retained nullability annotations, including generic arguments and array dimensions. Java nullable annotations are read during analysis. Unannotated references remain platform values and produce a warning when assigned to a declared non-null result/binding.

## Resources, checks and concurrency

```kalm
with input = java.util.Scanner(System.in) {
    if (input.hasNextLine()) { sayLine(input.nextLine()); }
}

async fun count() -> Int { return await task { return 7; }; }
```

`with` closes resources in reverse order. `defer` runs cleanup on scope exit. `expect`, `require` and `ensure` remain active without JVM assertion flags. `guard lock { ... }` synchronizes on a non-null receiver and prohibits `await` inside the guard.

Tasks run on virtual threads. `Task<T>` extends `CompletionStage<T>` for Java callers. `await` accepts either type, handles cancellation/failure/interruption, and is valid only inside async functions or task bodies.

## Properties and tests

`read`/`write` expose conventional Java getters/setters. `lazy fix` evaluates its initializer once and safely publishes success or the original failure. `late var` has a runtime guard for both Kalm and Java reads before assignment. It throws `IllegalStateException` until initialized; setters reject null and allow reassignment. Use ordinary initialized fields when construction should establish the invariant.

```kalm
before { require true; }
test "a record preserves its value" {
    fix box: Box<Text> = Box<Text>("Mira");
    expect box.value() == "Mira";
}
after { ensure true; }
```

Tests and hooks belong under test roots. Every test runs with its hooks; cleanup still runs after a failed check. The CLI and both build plugins share the test runner and XML/HTML reports.

## Casts and generic nullability

`value as Text` checks the JVM type and rejects null with `ClassCastException`. Cast to `Text?` when null is an accepted result. The operand is evaluated once. Generic constructor arguments are checked against their instantiated types; `Box<Text>(nullableName)` is rejected, while `Box<Text?>(nullableName)` is allowed. Inferred Kalm constructor type arguments and inherited Java members preserve nullable element types.
