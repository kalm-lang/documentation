---
{
  "title": "6. Keep results together",
  "order": 6,
  "lesson": 6
}
---

::::::dialect kalm

Keep Counting.kalm from the previous lesson. Add a result record in
`src/main/kalm/stats/Statistics.kalm`:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm Statistics.kalm
space stats

pub data Statistics(lines: Int, words: Int)
```
```java Statistics.java
package stats;

public record Statistics(int lines, int words) {}
```
::::

Add `src/main/kalm/stats/Summary.kalm`:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm Summary.kalm
space stats

pub fun summarize(lines: List<Text>) -> Statistics:
    var words = 0
    for line in lines:
        words += countWords(line)
    return Statistics(len(lines), words)
```
```java Summary.java
package stats;

import java.util.List;

public final class Summary {
    public static Statistics summarize(List<String> lines) {
        int words = 0;
        for (final String line : lines) words += Counting.countWords(line);
        return new Statistics(lines.size(), words);
    }
}
```
::::

Replace App.kalm:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm App.kalm
space stats

pub fun main() -> Unit:
    fix lines: List<Text> = ["a quiet", "morning"]
    fix result = summarize(lines)
    sayLine(@"${result.lines()} lines / ${result.words()} words")
```
```java App.java
package stats;

import java.util.ArrayList;
import java.util.List;

public final class App {
    public static void main(String[] args) {
        final var lines = new ArrayList<>(List.of("a quiet", "morning"));
        final Statistics result = Summary.summarize(lines);
        System.out.println(result.lines() + " lines / " + result.words() + " words");
    }
}
```
::::

A `data` declaration becomes an immutable Java record. Components are available
through accessor methods. An empty list yields zero lines and zero words.

```bash
kalm run
```

```text
2 lines / 3 words
```

Read [types and contracts](/docs/language/types/) for other ways to model data.

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


data Statistics(lines: Int, words: Int)


fun summarize(lines: List<Text>) -> Statistics:
    var words = 0
    for line in lines:
        words += countWords(line)
    return Statistics(len(lines), words)


pub fun main() -> Unit:
    fix lines: List<Text> = ["a quiet", "morning"]
    fix result = summarize(lines)
    sayLine(@"${result.lines()} lines / ${result.words()} words")
```
```kalms App.kalms
fun countWords(text: Text) -> Int:
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1
    return words


data Statistics(lines: Int, words: Int)


fun summarize(lines: List<Text>) -> Statistics:
    var words = 0
    for line in lines:
        words += countWords(line)
    return Statistics(len(lines), words)


fix lines: List<Text> = ["a quiet", "morning"]
fix result = summarize(lines)
sayLine(@"${result.lines()} lines / ${result.words()} words")
```
```java App.java
import java.util.ArrayList;
import java.util.List;

final class Counting {
    public static int countWords(String text) {
        int words = 0;
        for (final String word : text.split("\\s+")) if (!word.isBlank()) words += 1;
        return words;
    }
}

record Statistics(int lines, int words) {}

final class Summary {
    public static Statistics summarize(List<String> lines) {
        int words = 0;
        for (final String line : lines) words += Counting.countWords(line);
        return new Statistics(lines.size(), words);
    }
}

public final class App {
    public static void main(String[] args) {
        final var lines = new ArrayList<>(List.of("a quiet", "morning"));
        final Statistics result = Summary.summarize(lines);
        System.out.println(result.lines() + " lines / " + result.words() + " words");
    }
}
```
::::

```bash
kalm shell -f App.kalms
```

```text
2 lines / 3 words
```

::::::
