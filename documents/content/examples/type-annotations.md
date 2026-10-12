---
{
  "title": "Type annotations",
  "order": 75,
  "group": "Java & modules"
}
---

Apply an annotation to parameter types, including generic arguments.

::::compare
```kalm Mark.kalm
pub annotation Mark:
    target typeUse
    value: Text = "checked"

pub fun echo(value: @Mark Text) -> @Mark Text:
    return value
```
```kalms Mark.kalms
annotation Mark:
    target typeUse
    value: Text = "checked"

fun echo(value: @Mark Text) -> @Mark Text:
    return value
```
```java Mark.java
import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target(ElementType.TYPE_USE)
@interface Mark { String value() default "checked"; }
final class Example {
    public static @Mark String echo(@Mark String value) { return value; }
}
```
::::

[Learn more](/docs/java/).
