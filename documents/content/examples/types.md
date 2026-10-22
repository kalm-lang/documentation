---
{
  "title": "Types",
  "order": 5,
  "group": "Values"
}
---

Give parameters and public results explicit types.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun doubled(value: int) -> int = value * 2
pub fun ready() -> boolean = true
pub fun title() -> Text = "Kalm"
```
```kalm Example.kalm {"style":"braces"}
pub fun doubled(value: int) -> int = value * 2
pub fun ready() -> boolean = true
pub fun title() -> Text = "Kalm"
```
```kalms Example.kalms {"style":"indentation"}
fun doubled(value: int) -> int = value * 2
fun ready() -> boolean = true
fun title() -> Text = "Kalm"
```
```kalms Example.kalms {"style":"braces"}
fun doubled(value: int) -> int = value * 2
fun ready() -> boolean = true
fun title() -> Text = "Kalm"
```
```java Example.java
public final class Example {
    public static int doubled(int value) {
        return value * 2;
    }

    public static boolean ready() {
        return true;
    }

    public static String title() {
        return "Kalm";
    }
}
```
::::

[Learn more](/docs/language/values/).
