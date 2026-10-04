---
{
  "title": "Arrays",
  "order": 19,
  "group": "Collections"
}
---

Reference arrays box primitive elements; primitive array helpers retain JVM primitives.

```kalm Example.kalm
pub fun main() -> Unit:
    fix names: Array<Text> = arrayOf("Mira", "Ari")
    fix scores: IntArray = intArrayOf(3, 5)
    sayLine(names[0])
    sayLine(scores[1])
```

[Learn more](/docs/language/values/).
