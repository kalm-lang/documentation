---
{
  "title": "Indentation or braces. Same language.",
  "order": 0,
  "icon": "braces",
  "verify": "alternatives",
  "description": "Choose indentation-based blocks or explicit braces. Both styles express the same Kalm code and work with the same tools.",
  "doc": "/docs/language/layout/"
}
---

:::::tabs
::::compare
```kalm Indentation
pub fun main() -> Unit:
    sayLine("Room to think.")
```
```kalms Example.kalms
sayLine("Room to think.")
```
```java Example.java
public final class Example {
    public static void main(String[] args) { System.out.println("Room to think."); }
}
```
::::
::::compare
```kalm Braces
pub fun main() -> Unit {
    sayLine("Room to think.");
}
```
```kalms Example.kalms
sayLine("Room to think.");
```
```java Example.java
public final class Example {
    public static void main(String[] args) { System.out.println("Room to think."); }
}
```
::::
:::::
