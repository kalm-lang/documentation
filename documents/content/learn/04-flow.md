---
{
  "title": "4. Count with a loop",
  "order": 4,
  "lesson": 4
}
---

Replace App.kalm to practice counting words before adding file I/O:

```kalm App.kalm
space stats

pub fun main() -> Unit:
    fix text = "a   quiet morning"
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1
    sayLine(@"$words words")
```

Java's `split` accepts a regular expression. `\\s+` matches consecutive whitespace;
the doubled slash is the string escape. The blank check makes empty input count
as zero words. `for` traverses the array with an immutable loop binding.

```bash
kalm run
```

```text
3 words
```

Try empty text, leading spaces, and tabs. They should not add words.

[Functions and flow](/docs/language/functions/) covers branches and loop control.
