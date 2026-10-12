---
{
  "title": "Streams",
  "order": 71,
  "group": "Functions"
}
---

Context-typed lambdas work with ordinary Java streams.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun loudNames(names: List<Text>) -> List<Text>:
    return names.stream().map(fun name => name.toUpperCase()).toList()
```
```kalm Example.kalm {"style":"braces"}
pub fun loudNames(names: List<Text>) -> List<Text> {
    return names.stream().map(fun name => name.toUpperCase()).toList()
}
```
```kalms Example.kalms {"style":"indentation"}
fun loudNames(names: List<Text>) -> List<Text>:
    return names.stream().map(fun name => name.toUpperCase()).toList()
```
```kalms Example.kalms {"style":"braces"}
fun loudNames(names: List<Text>) -> List<Text> {
    return names.stream().map(fun name => name.toUpperCase()).toList()
}
```
```java Example.java
import java.util.List;

public final class Example {
    public static List<String> loudNames(List<String> names) {
        return names
            .stream()
            .map(name -> name.toUpperCase())
            .toList();
    }
}
```
::::

[Learn more](/docs/java/).
