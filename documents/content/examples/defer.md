---
{
  "title": "defer",
  "order": 58,
  "group": "Resources"
}
---

Run deferred cleanup when the scope exits.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun work() -> void:
    defer:
        sayLine("finished")

    sayLine("working")
```
```kalm Example.kalm {"style":"braces"}
pub fun work() -> void {
    defer {
        sayLine("finished")
    }
    sayLine("working")
}
```
```kalms Example.kalms {"style":"indentation"}
fun work() -> void:
    defer:
        sayLine("finished")

    sayLine("working")
```
```kalms Example.kalms {"style":"braces"}
fun work() -> void {
    defer {
        sayLine("finished")
    }
    sayLine("working")
}
```
```java Example.java
public final class Example {
    public static void work() {
        try {
            System.out.println("working");
        } finally {
            System.out.println("finished");
        }
    }
}
```
::::

[Learn more](/docs/language/resources/).
