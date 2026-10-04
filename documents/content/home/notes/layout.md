---
{
  "title": "Indentation or braces. Same language.",
  "order": 0,
  "icon": "braces",
  "verify": "alternatives",
  "description": "Choose indentation-based blocks or explicit braces. Both styles express the same Kalm code and work with the same tools.",
  "doc": "/docs/language/layout/"
}
---

:::tabs
```kalm Indentation
pub fun main() -> Unit:
    sayLine("Room to think.")
```
```kalm Braces
pub fun main() -> Unit {
    sayLine("Room to think.");
}
```
:::
