---
{
  "title": "Java calling Kalm",
  "order": 50,
  "group": "Java & modules",
  "verify": "joint"
}
---

Public functions in Greeting.kalm become static methods of GreetingKalm.

::::compare {"presentation":"showcase","locks":{"dialect":true}}
```kalm Greeting.kalm {"style":"indentation","pane":"Greeting.kalm"}
pub fun greeting(name: Text) -> Text = @"Hello, $name!"
```
```kalm Greeting.kalm {"style":"braces","pane":"Greeting.kalm"}
pub fun greeting(name: Text) -> Text = @"Hello, $name!"
```
```java Caller.java {"pane":"Caller.java"}
public class Caller {
    public static void main(String[] args) {
        System.out.println(GreetingKalm.greeting("Mira"));
    }
}
```
::::
[Learn more](/docs/java/).
