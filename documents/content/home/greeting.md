---
{"title":"App.kalm","order":0}
---

::::compare
```kalm App.kalm
pub fun greeting(name: Text) -> Text:
    return @"Hello, $name!"

pub fun main() -> Unit:
    sayLine(greeting("Mira"))
```
```kalms App.kalms
fun greeting(name: Text) -> Text:
    return @"Hello, $name!"

sayLine(greeting("Mira"))
```
```java App.java
public final class App {
    public static String greeting(String name) { return "Hello, " + name + "!"; }
    public static void main(String[] args) { System.out.println(greeting("Mira")); }
}
```
::::
