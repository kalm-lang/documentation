---
{
  "title": "Functions and flow",
  "order": 13,
  "navSection": "Language guide"
}
---

## Functions

Parameters and public results have explicit types. Use an expression body for a
single result, or a block with `return` for several steps.

```kalm
pub fun square(value: Int) -> Int = value * value

pub fun label(value: Int) -> Text:
    if value > 0:
        return "positive"
    elif value == 0:
        return "zero"
    else:
        return "negative"
```

A block without a result arrow returns `Unit`. Parameters are immutable.
Default arguments, named arguments, and Kalm overload declarations are deferred.

## Loops

`for` accepts an array or `Iterable`. Its loop binding is immutable.
`while` repeats while a Boolean condition holds. `stop` exits a loop;
`next` skips to the next iteration.

```kalm
pub fun printNumbers() -> Unit:
    for value in range(3):
        sayLine(value)
```

## Matching

`choose` returns the result of a matching `when` branch. Match every variant of
a `choice` or every permitted type of a closed hierarchy; `_` is a catch-all.

See [matching examples](/examples/choose/) and [types and contracts](/docs/language/types/).

## Lambdas

Lambdas receive their parameter types from a Kalm or Java single-method contract.
Use `fun value => expression`, or a braced body with `return`.

```kalm
pub fun loud() -> java.util.function.Function<Text, Text>:
    return fun name => name.toUpperCase()
```

For exceptions and cleanup, continue with [resources](/docs/language/resources/).
