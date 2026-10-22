---
{"title":"A word counter","order":0,"verify":"test"}
---

:::::tabs
::::compare {"presentation":"showcase","locks":{"dialect":true}}
```kalm Counting.kalm {"style":"indentation"}
pub fun countWords(text: Text) -> int:
    var total = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            total += 1

    return total
```
```kalm Counting.kalm {"style":"braces"}
pub fun countWords(text: Text) -> int {
    var total = 0
    for word in text.split("\\s+") {
        if not word.isBlank() {
            total += 1
        }
    }
    return total
}
```
::::
::::compare {"presentation":"showcase","locks":{"dialect":true}}
```kalm CountingTests.kalm {"style":"indentation"}
test "count words, not spaces":
    expect countWords("a quiet morning") == 3
    expect countWords("  a\tquiet  morning ") == 3
    expect countWords("") == 0
```
```kalm CountingTests.kalm {"style":"braces"}
test "count words, not spaces" {
    expect countWords("a quiet morning") == 3
    expect countWords("  a\tquiet  morning ") == 3
    expect countWords("") == 0
}
```
::::
:::::
