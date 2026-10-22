---
{
  "title": "and / or / not",
  "order": 9,
  "group": "Values"
}
---

Combine Boolean expressions with short-circuit operators.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun allowed(age: int, paused: boolean) -> boolean:
    return age >= 18 and not paused
```
```kalm Example.kalm {"style":"braces"}
pub fun allowed(age: int, paused: boolean) -> boolean {
    return age >= 18 and not paused
}
```
```kalms Example.kalms {"style":"indentation"}
fun allowed(age: int, paused: boolean) -> boolean:
    return age >= 18 and not paused
```
```kalms Example.kalms {"style":"braces"}
fun allowed(age: int, paused: boolean) -> boolean {
    return age >= 18 and not paused
}
```
```java Example.java
public final class Example {
    public static boolean allowed(int age, boolean paused) {
        return age >= 18 && !paused;
    }
}
```
::::

[Learn more](/docs/language/values/).
