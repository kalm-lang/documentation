---
{
  "title": "??",
  "order": 13,
  "group": "Values"
}
---

Evaluate the fallback only when the left value is null.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun greeting(name: Text?) -> Text:
    fix display = name ?? "Guest"
    return @"Hello, $display!"
```
```kalm Example.kalm {"style":"braces"}
pub fun greeting(name: Text?) -> Text {
    fix display = name ?? "Guest"
    return @"Hello, $display!"
}
```
```kalms Example.kalms {"style":"indentation"}
fun greeting(name: Text?) -> Text:
    fix display = name ?? "Guest"
    return @"Hello, $display!"
```
```kalms Example.kalms {"style":"braces"}
fun greeting(name: Text?) -> Text {
    fix display = name ?? "Guest"
    return @"Hello, $display!"
}
```
```java Example.java
public final class Example {
    public static String greeting(String name) {
        final String display = name != null ? name : "Guest";
        return "Hello, " + display + "!";
    }
}
```
::::

[Learn more](/docs/language/values/).
