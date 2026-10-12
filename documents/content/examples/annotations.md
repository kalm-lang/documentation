---
{
  "title": "annotation / target",
  "order": 54,
  "group": "Java & modules"
}
---

Declare an annotation and restrict its allowed targets.

::::compare
```kalm Mark.kalm {"style":"indentation"}
pub annotation Mark:
    target type, parameter
    value: Text = "noted"
```
```kalm Mark.kalm {"style":"braces"}
pub annotation Mark {
    target type, parameter
    value: Text = "noted"
}
```
```kalms Mark.kalms {"style":"indentation"}
annotation Mark:
    target type, parameter
    value: Text = "noted"
```
```kalms Mark.kalms {"style":"braces"}
annotation Mark {
    target type, parameter
    value: Text = "noted"
}
```
```java Mark.java
import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target({ ElementType.TYPE, ElementType.PARAMETER })
public @interface Mark {
    String value() default "noted";
}
```
::::

[Learn more](/docs/java/).
