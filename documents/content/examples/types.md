---
{
  "title": "Types",
  "order": 5,
  "group": "Values"
}
---

Give parameters and public results explicit types.

::::compare
```kalm Example.kalm
pub fun doubled(value: Int) -> Int = value * 2
pub fun ready() -> Bool = true
pub fun title() -> Text = "Kalm"
```
```kalms Example.kalms
fun doubled(value: Int) -> Int = value * 2
fun ready() -> Bool = true
fun title() -> Text = "Kalm"
```
```java Example.java
public final class Example {
    public static int doubled(int value) { return value * 2; }
    public static boolean ready() { return true; }
    public static String title() { return "Kalm"; }
}
```
::::

[Learn more](/docs/language/values/).
