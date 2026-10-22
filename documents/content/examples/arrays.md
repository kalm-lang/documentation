---
{
  "title": "Arrays",
  "order": 19,
  "group": "Collections"
}
---

Reference arrays box primitive elements; primitive array helpers retain JVM primitives.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun main() -> void:
    fix names: Array<Text> = arrayOf("Mira", "Ari")
    fix scores: IntArray = intArrayOf(3, 5)
    sayLine(names[0])
    sayLine(scores[1])
```
```kalm Example.kalm {"style":"braces"}
pub fun main() -> void {
    fix names: Array<Text> = arrayOf("Mira", "Ari")
    fix scores: IntArray = intArrayOf(3, 5)
    sayLine(names[0])
    sayLine(scores[1])
}
```
```kalms Example.kalms {"style":"indentation"}
fix names: Array<Text> = arrayOf("Mira", "Ari")
fix scores: IntArray = intArrayOf(3, 5)
sayLine(names[0])
sayLine(scores[1])
```
```kalms Example.kalms {"style":"braces"}
fix names: Array<Text> = arrayOf("Mira", "Ari")
fix scores: IntArray = intArrayOf(3, 5)
sayLine(names[0])
sayLine(scores[1])
```
```java Example.java
void main() {
    final String[] names = { "Mira", "Ari" };
    final int[] scores = { 3, 5 };
    System.out.println(names[0]);
    System.out.println(scores[1]);
}
```
::::

[Learn more](/docs/language/values/).
