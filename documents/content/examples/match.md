---
{
  "title": "match / case",
  "order": 29,
  "group": "Flow"
}
---

Return a result from a matching branch; _ catches remaining values.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun label(value: int) -> Text = match value:
    case 0 => "zero";
    case 1 => "one";
    case _ => "many";
;
```
```kalm Example.kalm {"style":"braces"}
pub fun label(value: int) -> Text = match value {
    case 0 => "zero";
    case 1 => "one";
    case _ => "many";
}
;
```
```kalms Example.kalms {"style":"indentation"}
fun label(value: int) -> Text = match value:
    case 0 => "zero";
    case 1 => "one";
    case _ => "many";
;
```
```kalms Example.kalms {"style":"braces"}
fun label(value: int) -> Text = match value {
    case 0 => "zero";
    case 1 => "one";
    case _ => "many";
}
;
```
```java Example.java
public final class Example {
    public static String label(int value) {
        return switch (value) {
            case 0 -> "zero";
            case 1 -> "one";
            default -> "many";
        };
    }
}
```
::::

[Learn more](/docs/language/functions/).
