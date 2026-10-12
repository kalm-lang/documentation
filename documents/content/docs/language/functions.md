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

::::compare
```kalm {"style":"indentation"}
pub fun square(value: Int) -> Int = value * value

pub fun label(value: Int) -> Text:
    if value > 0:
        return "positive"

    elif value == 0:
        return "zero"
    else:
        return "negative"
```
```kalm {"style":"braces"}
pub fun square(value: Int) -> Int = value * value

pub fun label(value: Int) -> Text {
    if value > 0 {
        return "positive"
    }
    elif value == 0 {
        return "zero"
    }
    else {
        return "negative"
    }
}
```
```kalms Example.kalms {"style":"indentation"}
fun square(value: Int) -> Int = value * value

fun label(value: Int) -> Text:
    if value > 0:
        return "positive"

    elif value == 0:
        return "zero"
    else:
        return "negative"
```
```kalms Example.kalms {"style":"braces"}
fun square(value: Int) -> Int = value * value

fun label(value: Int) -> Text {
    if value > 0 {
        return "positive"
    }
    elif value == 0 {
        return "zero"
    }
    else {
        return "negative"
    }
}
```
```java Example.java
public final class Example {
    public static int square(int value) {
        return value * value;
    }

    public static String label(int value) {
        if (value > 0) return "positive";
        else if (value == 0) return "zero";
        else return "negative";
    }
}
```
::::

A block without a result arrow returns `Unit`. Parameters are immutable.
Default arguments, named arguments, and Kalm overload declarations are deferred.

## Loops

`for` accepts an array or `Iterable`. Its loop binding is immutable.
`while` repeats while a Boolean condition holds. `stop` exits a loop;
`next` skips to the next iteration.

::::compare
```kalm {"style":"indentation"}
pub fun printNumbers() -> Unit:
    for value in range(3):
        sayLine(value)
```
```kalm {"style":"braces"}
pub fun printNumbers() -> Unit {
    for value in range(3) {
        sayLine(value)
    }
}
```
```kalms Example.kalms {"style":"indentation"}
fun printNumbers() -> Unit:
    for value in range(3):
        sayLine(value)
```
```kalms Example.kalms {"style":"braces"}
fun printNumbers() -> Unit {
    for value in range(3) {
        sayLine(value)
    }
}
```
```java Example.java
public final class Example {
    public static void printNumbers() {
        for (int value = 0; value < 3; value++) System.out.println(value);
    }
}
```
::::

## Matching

`choose` returns the result of a matching `when` branch. Match every variant of
a `choice` or every permitted type of a closed hierarchy; `_` is a catch-all.

See [matching examples](/examples/choose/) and [types and contracts](/docs/language/types/).

## Lambdas

Lambdas receive their parameter types from a Kalm or Java single-method contract.
Use `fun value => expression`, or a braced body with `return`.

::::compare
```kalm {"style":"indentation"}
pub fun loud() -> java.util.function.Function<Text, Text>:
    return fun name => name.toUpperCase()
```
```kalm {"style":"braces"}
pub fun loud() -> java.util.function.Function<Text, Text> {
    return fun name => name.toUpperCase()
}
```
```kalms Example.kalms {"style":"indentation"}
fun loud() -> java.util.function.Function<Text, Text>:
    return fun name => name.toUpperCase()
```
```kalms Example.kalms {"style":"braces"}
fun loud() -> java.util.function.Function<Text, Text> {
    return fun name => name.toUpperCase()
}
```
```java Example.java
import java.util.function.Function;

public final class Example {
    public static Function<String, String> loud() {
        return name -> name.toUpperCase();
    }
}
```
::::

For exceptions and cleanup, continue with [resources](/docs/language/resources/).
