---
{
  "title": "5. Extract a function",
  "order": 5,
  "lesson": 5
}
---

Move the counting logic into `src/main/kalm/stats/Counting.kalm`:

```kalm Counting.kalm
space stats

pub fun countWords(text: Text) -> Int:
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1
    return words
```

Replace App.kalm with its caller:

```kalm App.kalm
space stats

pub fun main() -> Unit:
    sayLine(@"${countWords("a quiet morning")} words")
```

The function has an explicit parameter and result type. Both files share the
same package, so the function is available without an import. `${...}` embeds
an expression in interpolated text.

```bash
kalm run
```

```text
3 words
```

Try calling countWords with two different strings. It has no mutable shared
state, which makes it easy to test.
