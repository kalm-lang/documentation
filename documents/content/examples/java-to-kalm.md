---
{
  "title": "Java calling Kalm",
  "order": 50,
  "group": "Java & modules",
  "verify": "joint"
}
---

Public functions in Greeting.kalm become static methods of GreetingKalm.

:::::tabs
::::compare {"scriptUnavailable":"Java callers require a compiled Kalm project API."}
```kalm Greeting.kalm
pub fun greeting(name: Text) -> Text = @"Hello, $name!"
```
```java Greeting.java
public final class Greeting {
    public static String greeting(String name) { return "Hello, " + name + "!"; }
}
```
::::
::::compare {"scriptUnavailable":"Java callers require a compiled Kalm project API.","primary":"java"}
```java Caller.java
public class Caller {
    public static void main(String[] args) {
        System.out.println(GreetingKalm.greeting("Mira"));
    }
}
```
```kalm Caller.kalm
pub fun main() -> Unit:
    sayLine(GreetingKalm.greeting("Mira"))
```
::::
:::::

[Learn more](/docs/java/).
