---
{
  "title": "8. Test your CLI",
  "order": 8,
  "lesson": 8
}
---

::::::dialect kalm

Keep the main sources from lesson 7. Add
`src/test/kalm/stats/StatisticsTests.kalm`:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm StatisticsTests.kalm
space stats

test "whitespace separates words":
    expect countWords("  a\tquiet   morning ") == 3

test "empty text contains no words":
    expect countWords("") == 0
    expect countWords("   ") == 0

test "an empty file has no lines":
    fix lines: List<Text> = []
    fix result = summarize(lines)
    expect result.lines() == 0
    expect result.words() == 0

test "blank lines still count":
    fix lines: List<Text> = ["", "a quiet", "morning"]
    fix result = summarize(lines)
    expect result.lines() == 3
    expect result.words() == 3
```
```java StatisticsTests.java
package stats;

import java.util.List;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class StatisticsTests {
    @Test void whitespaceSeparatesWords() { assertEquals(3, Counting.countWords("  a\tquiet   morning ")); }
    @Test void emptyTextContainsNoWords() {
        assertEquals(0, Counting.countWords(""));
        assertEquals(0, Counting.countWords("   "));
    }
    @Test void emptyFileHasNoLines() {
        final var result = Summary.summarize(List.of());
        assertEquals(0, result.lines());
        assertEquals(0, result.words());
    }
    @Test void blankLinesStillCount() {
        final var result = Summary.summarize(List.of("", "a quiet", "morning"));
        assertEquals(3, result.lines());
        assertEquals(3, result.words());
    }
}
```
::::

```bash
kalm test
```

The runner reports four passed tests and zero failures. `expect` is always
active; JVM assertion flags are unnecessary.

## Check the program boundary

Run the finished CLI against an empty file, a whitespace-only file, and a missing
path. It should report the right counts or a clear error. Try running without
arguments, too.

```bash
kalm check
kalm run -- notes.txt
kalm run -- missing.txt
kalm run
```

## Keep the project tidy

```bash
kalm format src/main/kalm
kalm format src/test/kalm
```

Formatting checks report differences. Add `--fix` to apply them.
You now have a reusable counting function, a record, safe Java I/O, and native tests.

::::::

::::::dialect kalms
Kalm Script does not support native tests or hooks. The project examples below show how to test reusable APIs; the Java counterpart uses JUnit Jupiter. Switch to Kalm to follow the project setup and test commands.


Keep the main sources from lesson 7. Add
`src/test/kalm/stats/StatisticsTests.kalm`:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm StatisticsTests.kalm
space stats

test "whitespace separates words":
    expect countWords("  a\tquiet   morning ") == 3

test "empty text contains no words":
    expect countWords("") == 0
    expect countWords("   ") == 0

test "an empty file has no lines":
    fix lines: List<Text> = []
    fix result = summarize(lines)
    expect result.lines() == 0
    expect result.words() == 0

test "blank lines still count":
    fix lines: List<Text> = ["", "a quiet", "morning"]
    fix result = summarize(lines)
    expect result.lines() == 3
    expect result.words() == 3
```
```java StatisticsTests.java
package stats;

import java.util.List;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class StatisticsTests {
    @Test void whitespaceSeparatesWords() { assertEquals(3, Counting.countWords("  a\tquiet   morning ")); }
    @Test void emptyTextContainsNoWords() {
        assertEquals(0, Counting.countWords(""));
        assertEquals(0, Counting.countWords("   "));
    }
    @Test void emptyFileHasNoLines() {
        final var result = Summary.summarize(List.of());
        assertEquals(0, result.lines());
        assertEquals(0, result.words());
    }
    @Test void blankLinesStillCount() {
        final var result = Summary.summarize(List.of("", "a quiet", "morning"));
        assertEquals(3, result.lines());
        assertEquals(3, result.words());
    }
}
```
::::

```bash
kalm test
```

The runner reports four passed tests and zero failures. `expect` is always
active; JVM assertion flags are unnecessary.

## Check the program boundary

Run the finished CLI against an empty file, a whitespace-only file, and a missing
path. It should report the right counts or a clear error. Try running without
arguments, too.

```bash
kalm check
kalm run -- notes.txt
kalm run -- missing.txt
kalm run
```

## Keep the project tidy

```bash
kalm format src/main/kalm
kalm format src/test/kalm
```

Formatting checks report differences. Add `--fix` to apply them.
You now have a reusable counting function, a record, safe Java I/O, and native tests.

::::::
