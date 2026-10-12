---
{
  "title": "choose / when",
  "order": 29,
  "group": "Flow"
}
---

Return a result from a matching branch; _ catches remaining values.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun label(value: Int) -> Text = choose value:
    when 0 => "zero";
    when 1 => "one";
    when _ => "many";
;
```
```kalm Example.kalm {"style":"braces"}
pub fun label(value: Int) -> Text = choose value {
    when 0 => "zero";
    when 1 => "one";
    when _ => "many";
}
;
```
```kalms Example.kalms {"style":"indentation"}
fun label(value: Int) -> Text = choose value:
    when 0 => "zero";
    when 1 => "one";
    when _ => "many";
;
```
```kalms Example.kalms {"style":"braces"}
fun label(value: Int) -> Text = choose value {
    when 0 => "zero";
    when 1 => "one";
    when _ => "many";
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
