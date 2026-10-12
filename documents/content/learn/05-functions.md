---
{
  "title": "5. Extract a function",
  "order": 5,
  "lesson": 5
}
---

::::::dialect kalm

Move the counting logic into `src/main/kalm/stats/Counting.kalm`:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm Counting.kalm
space stats

pub fun countWords(text: Text) -> Int:
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1
    return words
```
```java Counting.java
package stats;

public final class Counting {
    public static int countWords(String text) {
        int words = 0;
        for (final String word : text.split("\\s+")) if (!word.isBlank()) words += 1;
        return words;
    }
}
```
::::

Replace App.kalm with its caller:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm App.kalm
space stats

pub fun main() -> Unit:
    sayLine(@"${countWords("a quiet morning")} words")
```
```java App.java
package stats;

public final class App {
    public static void main(String[] args) { System.out.println(Counting.countWords("a quiet morning") + " words"); }
}
```
::::

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

::::::

::::::dialect kalms
Save the complete program below as App.kalms in a folder of your choice. Each lesson replaces this file; the shell does not load neighboring project files.

::::compare
```kalm App.kalm
fun countWords(text: Text) -> Int:
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1
    return words


pub fun main() -> Unit:
    sayLine(@"${countWords("a quiet morning")} words")
```
```kalms App.kalms
fun countWords(text: Text) -> Int:
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1
    return words


sayLine(@"${countWords("a quiet morning")} words")
```
```java App.java
final class Counting {
    public static int countWords(String text) {
        int words = 0;
        for (final String word : text.split("\\s+")) if (!word.isBlank()) words += 1;
        return words;
    }
}

public final class App {
    public static void main(String[] args) { System.out.println(Counting.countWords("a quiet morning") + " words"); }
}
```
::::

```bash
kalm shell -f App.kalms
```

```text
3 words
```

::::::
