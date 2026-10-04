---
{
  "title": "Values stay put.",
  "order": 1,
  "description": "Bind once. Keep a little record of what matters.",
  "preview": "fix / data",
  "doc": "/docs/language/types/"
}
---

```kalm
data Note(title: Text, words: Int)

pub fun main() -> Unit:
    fix note = Note("A quiet morning", 3)
    sayLine(note.title())
```
