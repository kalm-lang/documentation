---
{
  "title": "Literals",
  "order": 6,
  "group": "Values"
}
---

Write Boolean, numeric, character, and text values directly.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> Unit:
    fix enabled: Bool = true
    fix letter: Char = 'K'
    fix count: Long = 12L
    fix ratio: Double = 0.5
    sayLine(@"$letter: $count / $ratio / $enabled")
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> Unit {
    fix enabled: Bool = true
    fix letter: Char = 'K'
    fix count: Long = 12L
    fix ratio: Double = 0.5
    sayLine(@"$letter: $count / $ratio / $enabled")
}
```
```kalms Example.kalms {"style":"indentation"}
fix enabled: Bool = true
fix letter: Char = 'K'
fix count: Long = 12L
fix ratio: Double = 0.5
sayLine(@"$letter: $count / $ratio / $enabled")
```
```kalms Example.kalms {"style":"braces"}
fix enabled: Bool = true
fix letter: Char = 'K'
fix count: Long = 12L
fix ratio: Double = 0.5
sayLine(@"$letter: $count / $ratio / $enabled")
```
```java Example.java
void main() {
    final boolean enabled = true;
    final char letter = 'K';
    final long count = 12L;
    final double ratio = 0.5;
    System.out.println(
        letter + ": " + count + " / " + ratio + " / " + enabled
    );
}
```
::::

[Learn more](/docs/language/values/).
