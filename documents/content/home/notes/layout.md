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

::::compare {"presentation":"showcase","locks":{"style":true}}
```kalm Indentation {"style":"indentation","pane":"Indentation"}
pub fun main() -> Unit:
    sayLine("Room to think.")
```
```kalms Indentation {"style":"indentation","pane":"Indentation"}
sayLine("Room to think.")
```
```kalm Braces {"style":"braces","pane":"Braces"}
pub fun main() -> Unit {
    sayLine("Room to think.");
}
```
```kalms Braces {"style":"braces","pane":"Braces"}
sayLine("Room to think.");
```
::::