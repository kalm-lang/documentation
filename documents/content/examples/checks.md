---
{
  "title": "expect / require / ensure",
  "order": 59,
  "group": "Resources"
}
---

Checks stay active without JVM assertion flags.

::::compare
```kalm Example.kalm
pub fun square(value: Int) -> Int:
    require value >= 0, "nonnegative input"
    fix result = value * value
    ensure result >= 0, "nonnegative result"
    expect result == value * value
    return result
```
```kalms Example.kalms
fun square(value: Int) -> Int:
    require value >= 0, "nonnegative input"
    fix result = value * value
    ensure result >= 0, "nonnegative result"
    expect result == value * value
    return result
```
```java Example.java
public final class Example {
    public static int square(int value) {
        if (value < 0) throw new IllegalArgumentException("nonnegative input");
        final int result = value * value;
        if (result < 0) throw new IllegalStateException("nonnegative result");
        if (result != value * value) throw new AssertionError();
        return result;
    }
}
```
::::

[Learn more](/docs/language/properties/).
