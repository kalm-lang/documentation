---
{
  "title": "Literals",
  "order": 6,
  "group": "Values"
}
---

Write Boolean, numeric, character, and text values directly.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    fix enabled: Bool = true
    fix letter: Char = 'K'
    fix count: Long = 12L
    fix ratio: Double = 0.5
    sayLine(@"$letter: $count / $ratio / $enabled")
```
```kalms Example.kalms
fix enabled: Bool = true
fix letter: Char = 'K'
fix count: Long = 12L
fix ratio: Double = 0.5
sayLine(@"$letter: $count / $ratio / $enabled")
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        final boolean enabled = true;
        final char letter = 'K';
        final long count = 12L;
        final double ratio = 0.5;
        System.out.println(letter + ": " + count + " / " + ratio + " / " + enabled);
    }
}
```
::::

[Learn more](/docs/language/values/).
