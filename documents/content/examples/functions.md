---
{
  "title": "fun / return",
  "order": 22,
  "group": "Functions"
}
---

Use an expression body for one result, or return from a block.

::::compare
```kalm Example.kalm
pub fun square(value: Int) -> Int = value * value

pub fun greeting(name: Text) -> Text:
    return @"Hello, $name!"
```
```kalms Example.kalms
fun square(value: Int) -> Int = value * value

fun greeting(name: Text) -> Text:
    return @"Hello, $name!"
```
```java Example.java
public final class Example {
    public static int square(int value) { return value * value; }
    public static String greeting(String name) { return "Hello, " + name + "!"; }
}
```
::::

[Learn more](/docs/language/functions/).
