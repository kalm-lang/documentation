---
{
  "title": "external fun",
  "order": 51,
  "group": "Java & modules"
}
---

Wrap a Java static method with a Kalm name.

::::compare
```kalm Example.kalm
external fun parseCount(value: Text) -> Int = java.lang.Integer.parseInt

pub fun count() -> Int = parseCount("12")
```
```kalms Example.kalms
external fun parseCount(value: Text) -> Int = java.lang.Integer.parseInt

fun count() -> Int = parseCount("12")
```
```java Example.java
public final class Example {
    public static int parseCount(String value) { return Integer.parseInt(value); }
    public static int count() { return parseCount("12"); }
}
```
::::

[Learn more](/docs/java/).
