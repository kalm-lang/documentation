---
{
  "title": "alias",
  "order": 40,
  "group": "Types"
}
---

A type alias introduces another name without creating a JVM type.

::::compare
```kalm Example.kalm {"style":"indentation"}
alias Name = Text
alias Names<T> = List<T>

pub fun greeting(name: Name) -> Text = @"Hello, $name!"
```
```kalm Example.kalm {"style":"braces"}
alias Name = Text
alias Names<T> = List<T>

pub fun greeting(name: Name) -> Text = @"Hello, $name!"
```
```kalms Example.kalms {"style":"indentation"}
alias Name = Text
alias Names<T> = List<T>

fun greeting(name: Name) -> Text = @"Hello, $name!"
```
```kalms Example.kalms {"style":"braces"}
alias Name = Text
alias Names<T> = List<T>

fun greeting(name: Name) -> Text = @"Hello, $name!"
```
```java Example.java
public final class Example {
    // Java has no type aliases; use the underlying type.
    public static String greeting(String name) {
        return "Hello, " + name + "!";
    }
}
```
::::

[Learn more](/docs/language/types/).
