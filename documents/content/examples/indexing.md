---
{
  "title": "Indexing",
  "order": 20,
  "group": "Collections"
}
---

Read or assign list, map, and array elements by index or key.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    var values: List<Int> = [2, 4]
    values[0] += 3
    sayLine(values[0])
```
```kalms Example.kalms
var values: List<Int> = [2, 4]
values[0] += 3
sayLine(values[0])
```
```java Example.java
import java.util.ArrayList;
import java.util.List;

public final class Example {
    public static void main(String[] args) {
        var values = new ArrayList<>(List.of(2, 4));
        values.set(0, values.get(0) + 3);
        System.out.println(values.get(0));
    }
}
```
::::

[Learn more](/docs/language/values/).
