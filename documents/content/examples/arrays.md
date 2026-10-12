---
{
  "title": "Arrays",
  "order": 19,
  "group": "Collections"
}
---

Reference arrays box primitive elements; primitive array helpers retain JVM primitives.

::::compare
```kalm Example.kalm
pub fun main() -> Unit:
    fix names: Array<Text> = arrayOf("Mira", "Ari")
    fix scores: IntArray = intArrayOf(3, 5)
    sayLine(names[0])
    sayLine(scores[1])
```
```kalms Example.kalms
fix names: Array<Text> = arrayOf("Mira", "Ari")
fix scores: IntArray = intArrayOf(3, 5)
sayLine(names[0])
sayLine(scores[1])
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        final String[] names = {"Mira", "Ari"};
        final int[] scores = {3, 5};
        System.out.println(names[0]);
        System.out.println(scores[1]);
    }
}
```
::::

[Learn more](/docs/language/values/).
