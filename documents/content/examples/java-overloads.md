---
{
  "title": "Overloads and varargs",
  "order": 72,
  "group": "Java & modules"
}
---

Java resolves overloads and varargs using the argument types.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> void:
    fix text = java.lang.String.valueOf(42)
    fix words: List<Text> = java.util.Arrays.asList("quiet", "morning")
    sayLine(text)
    sayLine(len(words))
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> void {
    fix text = java.lang.String.valueOf(42)
    fix words: List<Text> = java.util.Arrays.asList("quiet", "morning")
    sayLine(text)
    sayLine(len(words))
}
```
```kalms Example.kalms {"style":"indentation"}
fix text = java.lang.String.valueOf(42)
fix words: List<Text> = java.util.Arrays.asList("quiet", "morning")
sayLine(text)
sayLine(len(words))
```
```kalms Example.kalms {"style":"braces"}
fix text = java.lang.String.valueOf(42)
fix words: List<Text> = java.util.Arrays.asList("quiet", "morning")
sayLine(text)
sayLine(len(words))
```
```java Example.java
import java.util.Arrays;
import java.util.List;

void main() {
    final String text = String.valueOf(42);
    final List<String> words = Arrays.asList("quiet", "morning");
    System.out.println(text);
    System.out.println(words.size());
}
```
::::

[Learn more](/docs/java/).
