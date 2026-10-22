---
{
  "title": "guard",
  "order": 63,
  "group": "Concurrency"
}
---

Synchronize on a non-null receiver; await is prohibited inside a guard.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun update(values: List<Text>) -> void:
    guard values:
        values.add("ready")
```
```kalm Example.kalm {"style":"braces"}
pub fun update(values: List<Text>) -> void {
    guard values {
        values.add("ready")
    }
}
```
```kalms Example.kalms {"style":"indentation"}
fun update(values: List<Text>) -> void:
    guard values:
        values.add("ready")
```
```kalms Example.kalms {"style":"braces"}
fun update(values: List<Text>) -> void {
    guard values {
        values.add("ready")
    }
}
```
```java Example.java
import java.util.List;

public final class Example {
    public static void update(List<String> values) {
        synchronized (values) {
            values.add("ready");
        }
    }
}
```
::::

[Learn more](/docs/language/resources/).
