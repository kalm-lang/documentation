---
{
  "title": "and / or / not",
  "order": 9,
  "group": "Values"
}
---

Combine Boolean expressions with short-circuit operators.

::::compare
```kalm Example.kalm
pub fun allowed(age: Int, paused: Bool) -> Bool:
    return age >= 18 and not paused
```
```kalms Example.kalms
fun allowed(age: Int, paused: Bool) -> Bool:
    return age >= 18 and not paused
```
```java Example.java
public final class Example {
    public static boolean allowed(int age, boolean paused) { return age >= 18 && !paused; }
}
```
::::

[Learn more](/docs/language/values/).
