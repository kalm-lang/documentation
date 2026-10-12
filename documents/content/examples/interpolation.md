---
{
  "title": "Text interpolation",
  "order": 7,
  "group": "Values"
}
---

Prefix a string with @ to insert values or expressions.

::::compare
```kalm Example.kalm
pub fun greeting(name: Text) -> Text:
    return @"Hello, $name! ${2 + 3} notes today."
```
```kalms Example.kalms
fun greeting(name: Text) -> Text:
    return @"Hello, $name! ${2 + 3} notes today."
```
```java Example.java
public final class Example {
    public static String greeting(String name) { return "Hello, " + name + "! " + (2 + 3) + " notes today."; }
}
```
::::

[Learn more](/docs/language/values/).
