---
{"title":"A word counter","order":0,"verify":"test"}
---

:::tabs
```kalm Counting.kalm
pub fun countWords(text: Text) -> Int:
    var total = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            total += 1
    return total
```
```kalm CountingTests.kalm
test "count words, not spaces":
    expect countWords("a quiet morning") == 3
    expect countWords("  a\tquiet  morning ") == 3
    expect countWords("") == 0
```
:::
