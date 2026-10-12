---
{
  "title": "?. / ?[]",
  "order": 12,
  "group": "Values"
}
---

A null receiver skips access; an existing receiver still follows normal bounds rules.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun first(names: List<Text>?) -> Text?:
    return names?[0]?.upper()
```
```kalm Example.kalm {"style":"braces"}
pub fun first(names: List<Text>?) -> Text? {
    return names?[0]?.upper()
}
```
```kalms Example.kalms {"style":"indentation"}
fun first(names: List<Text>?) -> Text?:
    return names?[0]?.upper()
```
```kalms Example.kalms {"style":"braces"}
fun first(names: List<Text>?) -> Text? {
    return names?[0]?.upper()
}
```
```java Example.java
import java.util.List;
import java.util.Locale;

public final class Example {
    public static String first(List<String> names) {
        final String first = names != null ? names.get(0) : null;
        return first != null ? first.toUpperCase(Locale.ROOT) : null;
    }
}
```
::::

[Learn more](/docs/language/values/).
