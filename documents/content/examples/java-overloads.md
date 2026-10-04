---
{
  "title": "Overloads and varargs",
  "order": 72,
  "group": "Java & modules"
}
---

Java resolves overloads and varargs using the argument types.

```kalm Example.kalm
pub fun main() -> Unit:
    fix text = java.lang.String.valueOf(42)
    fix words: List<Text> = java.util.Arrays.asList("quiet", "morning")
    sayLine(text)
    sayLine(len(words))
```

[Learn more](/docs/java/).
