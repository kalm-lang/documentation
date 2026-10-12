---
{
  "title": "Generics / given",
  "order": 24,
  "group": "Functions"
}
---

Use given to require a bound on a type parameter.

::::compare
```kalm Example.kalm
pub fun stringify<T>(item: T) -> Text given T: java.lang.Comparable<T>:
    return item.toString()
```
```kalms Example.kalms
fun stringify<T>(item: T) -> Text given T: java.lang.Comparable<T>:
    return item.toString()
```
```java Example.java
public final class Example {
    public static <T extends Comparable<T>> String stringify(T item) { return item.toString(); }
}
```
::::

[Learn more](/docs/language/types/).
