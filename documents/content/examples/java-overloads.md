---
{
  "title": "Overloads and varargs",
  "order": 72,
  "group": "Java & modules"
}
---

Java resolves overloads and varargs using the argument types.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    fix text = java.lang.String.valueOf(42)
    fix words: List<Text> = java.util.Arrays.asList("quiet", "morning")
    sayLine(text)
    sayLine(len(words))
```
```kalms Example.kalms
fix text = java.lang.String.valueOf(42)
fix words: List<Text> = java.util.Arrays.asList("quiet", "morning")
sayLine(text)
sayLine(len(words))
```
```java Example.java
import java.util.Arrays;
import java.util.List;

public final class Example {
    public static void main(String[] args) {
        final String text = String.valueOf(42);
        final List<String> words = Arrays.asList("quiet", "morning");
        System.out.println(text);
        System.out.println(words.size());
    }
}
```
::::

[Learn more](/docs/java/).
