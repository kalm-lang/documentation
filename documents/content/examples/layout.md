---
{
  "title": "Blocks and comments",
  "order": 1,
  "group": "Basics",
  "verify": "alternatives"
}
---

Use indentation or braces for blocks; # starts a comment.

:::::tabs
::::compare
```kalm Indentation
pub fun greeting() -> Unit:
    # A quiet hello.
    sayLine("Hello")
```
```kalms Example.kalms
fun greeting() -> Unit:
    # A quiet hello.
    sayLine("Hello")
```
```java Example.java
public final class Example {
    public static void greeting() {
        // A quiet hello.
        System.out.println("Hello");
    }
}
```
::::
::::compare
```kalm Braces
pub fun greeting() -> Unit {
    # The same hello.
    sayLine("Hello");
}
```
```kalms Example.kalms
fun greeting() -> Unit {
    # The same hello.
    sayLine("Hello");
}
```
```java Example.java
public final class Example {
    public static void greeting() {
        // A quiet hello.
        System.out.println("Hello");
    }
}
```
::::
:::::

[Learn more](/docs/language/layout/).
