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
pub fun main() -> void:
    fix enabled: boolean = true
    fix letter: char = 'K'
    fix count: long = 12L
    fix ratio: double = 0.5
    sayLine(@"$letter: $count / $ratio / $enabled")
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> void {
    fix enabled: boolean = true
    fix letter: char = 'K'
    fix count: long = 12L
    fix ratio: double = 0.5
    sayLine(@"$letter: $count / $ratio / $enabled")
}
```
```kalms Example.kalms {"style":"indentation"}
fix enabled: boolean = true
fix letter: char = 'K'
fix count: long = 12L
fix ratio: double = 0.5
sayLine(@"$letter: $count / $ratio / $enabled")
```
```kalms Example.kalms {"style":"braces"}
fix enabled: boolean = true
fix letter: char = 'K'
fix count: long = 12L
fix ratio: double = 0.5
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
