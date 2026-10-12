---
{
  "title": "Lambdas",
  "order": 23,
  "group": "Functions"
}
---

A Java or Kalm single-method contract supplies the parameter types.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun loud() -> java.util.function.Function<Text, Text>:
    return fun name => name.toUpperCase()
```
```kalm Example.kalm {"style":"braces"}
pub fun loud() -> java.util.function.Function<Text, Text> {
    return fun name => name.toUpperCase()
}
```
```kalms Example.kalms {"style":"indentation"}
fun loud() -> java.util.function.Function<Text, Text>:
    return fun name => name.toUpperCase()
```
```kalms Example.kalms {"style":"braces"}
fun loud() -> java.util.function.Function<Text, Text> {
    return fun name => name.toUpperCase()
}
```
```java Example.java
import java.util.function.Function;

public final class Example {
    public static Function<String, String> loud() {
        return name -> name.toUpperCase();
    }
}
```
::::

[Learn more](/docs/language/functions/).
