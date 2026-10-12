---
{
  "title": "4. Count with a loop",
  "order": 4,
  "lesson": 4
}
---

::::::dialect kalm

Replace App.kalm to practice counting words before adding file I/O:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
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
```java App.java
package stats;

public final class App {
    public static void main(String[] args) {
        final String text = "a quiet morning";
        int words = 0;
        for (final String word : text.split("\\s+")) if (!word.isBlank()) words += 1;
        System.out.println(words + " words");
    }
}
```
::::

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

::::::

::::::dialect kalms
Save the complete program below as App.kalms in a folder of your choice. Each lesson replaces this file; the shell does not load neighboring project files.

::::compare
```kalm App.kalm
pub fun main() -> Unit:
    fix text = "a   quiet morning"
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1
    sayLine(@"$words words")
```
```kalms App.kalms
fix text = "a   quiet morning"
var words = 0
for word in text.split("\\s+"):
    if not word.isBlank():
        words += 1
sayLine(@"$words words")
```
```java App.java
public final class App {
    public static void main(String[] args) {
        final String text = "a quiet morning";
        int words = 0;
        for (final String word : text.split("\\s+")) if (!word.isBlank()) words += 1;
        System.out.println(words + " words");
    }
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
