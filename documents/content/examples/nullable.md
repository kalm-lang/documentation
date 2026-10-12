---
{
  "title": "Nullable types",
  "order": 11,
  "group": "Values"
}
---

Add ? when a value can be absent.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun nickname(known: Bool) -> Text?:
    if known:
        return "Mira"

    return null
```
```kalm Example.kalm {"style":"braces"}
pub fun nickname(known: Bool) -> Text? {
    if known {
        return "Mira"
    }
    return null
}
```
```kalms Example.kalms {"style":"indentation"}
fun nickname(known: Bool) -> Text?:
    if known:
        return "Mira"

    return null
```
```kalms Example.kalms {"style":"braces"}
fun nickname(known: Bool) -> Text? {
    if known {
        return "Mira"
    }
    return null
}
```
```java Example.java
public final class Example {
    public static String nickname(boolean known) {
        return known ? "Mira" : null;
    }
}
```
::::

[Learn more](/docs/language/values/).
