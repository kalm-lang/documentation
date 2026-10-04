---
{
  "title": "6. Keep results together",
  "order": 6,
  "lesson": 6
}
---

Keep Counting.kalm from the previous lesson. Add a result record in
`src/main/kalm/stats/Statistics.kalm`:

```kalm Statistics.kalm
space stats

pub data Statistics(lines: Int, words: Int)
```

Add `src/main/kalm/stats/Summary.kalm`:

```kalm Summary.kalm
space stats

pub fun summarize(lines: List<Text>) -> Statistics:
    var words = 0
    for line in lines:
        words += countWords(line)
    return Statistics(len(lines), words)
```

Replace App.kalm:

```kalm App.kalm
space stats

pub fun main() -> Unit:
    fix lines: List<Text> = ["a quiet", "morning"]
    fix result = summarize(lines)
    sayLine(@"${result.lines()} lines / ${result.words()} words")
```

A `data` declaration becomes an immutable Java record. Components are available
through accessor methods. An empty list yields zero lines and zero words.

```bash
kalm run
```

```text
2 lines / 3 words
```

Read [types and contracts](/docs/language/types/) for other ways to model data.
