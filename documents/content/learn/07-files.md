---
{
  "title": "7. Read a file safely",
  "order": 7,
  "lesson": 7
}
---

::::::dialect kalm

Keep Counting.kalm, Statistics.kalm, and Summary.kalm. Add
`src/main/kalm/stats/Input.kalm`:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm Input.kalm {"style":"indentation"}
space stats

use java.nio.file.Files
use java.nio.file.Path

pub fun readLines(path: Path) -> List<Text>:
    fix lines: List<Text> = []
    try:
        with reader = Files.newBufferedReader(path):
            while true:
                fix line: Text? = reader.readLine()
                if line != null:
                    lines.add(line)
                else:
                    stop
    handle (error: java.io.IOException):
        sayLine("Could not read file")
        exit(1)

    return lines
```
```kalm Input.kalm {"style":"braces"}
space stats

use java.nio.file.Files
use java.nio.file.Path

pub fun readLines(path: Path) -> List<Text> {
    fix lines: List<Text> = []
    try {
        with reader = Files.newBufferedReader(path) {
            while true {
                fix line: Text? = reader.readLine()
                if line != null {
                    lines.add(line)
                }
                else {
                    stop
                }
            }
        }
    }
    handle (error: java.io.IOException) {
        sayLine("Could not read file")
        exit(1)
    }
    return lines
}
```
```java Input.java
package stats;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public final class Input {
    public static List<String> readLines(Path path) {
        final var lines = new ArrayList<String>();
        try (var reader = Files.newBufferedReader(path)) {
            String line;
            while ((line = reader.readLine()) != null) lines.add(line);
        } catch (IOException error) {
            System.out.println("Could not read file");
            System.exit(1);
        }
        return lines;
    }
}
```
::::

`with` closes the reader, including on failure. Java I/O exceptions must be
handled. A null line means the end of the file; a blank line is still a line.

Replace App.kalm:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm App.kalm {"style":"indentation"}
space stats

use java.nio.file.Path

pub fun main(args: Array<Text>) -> Unit:
    if len(args) != 1:
        sayLine("Usage: kalm run -- <file>")
        exit(2)
        return

    fix result = summarize(readLines(Path.of(args[0])))
    sayLine(@"${result.lines()} lines / ${result.words()} words")
```
```kalm App.kalm {"style":"braces"}
space stats

use java.nio.file.Path

pub fun main(args: Array<Text>) -> Unit {
    if len(args) != 1 {
        sayLine("Usage: kalm run -- <file>")
        exit(2)
        return
    }
    fix result = summarize(readLines(Path.of(args[0])))
    sayLine(@"${result.lines()} lines / ${result.words()} words")
}
```
```java App.java
package stats;

import java.nio.file.Path;

public final class App {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println("Usage: kalm run -- <file>");
            System.exit(2);
            return;
        }
        final Statistics result = Summary.summarize(
            Input.readLines(Path.of(args[0]))
        );
        System.out.println(
            result.lines() + " lines / " + result.words() + " words"
        );
    }
}
```
::::

Create notes.txt with two lines:

```text
a quiet
morning
```

:::compare
```powershell Terminal {"os":"windows","shell":"powershell"}
kalm.bat run -- notes.txt
```
```batch Terminal {"os":"windows","shell":"cmd"}
kalm.bat run -- notes.txt
```
```bash Terminal {"os":"macos","shell":"bash"}
kalm run -- notes.txt
```
```zsh Terminal {"os":"macos","shell":"zsh"}
kalm run -- notes.txt
```
```powershell Terminal {"os":"macos","shell":"powershell"}
kalm run -- notes.txt
```
```bash Terminal {"os":"linux","shell":"bash"}
kalm run -- notes.txt
```
```zsh Terminal {"os":"linux","shell":"zsh"}
kalm run -- notes.txt
```
```powershell Terminal {"os":"linux","shell":"powershell"}
kalm run -- notes.txt
```
:::

```text
2 lines / 3 words
```

A missing or unreadable file prints an error and exits with status 1.
An incorrect argument count prints usage and exits with status 2.
The input file is read without changing it.

::::::

::::::dialect kalms
Save the complete program below as App.kalms in a folder of your choice. Each lesson replaces this file; the shell does not load neighboring project files. The script host does not forward command-line arguments. Edit the args array to try a different path or an empty input. Create notes.txt in the directory where you launch the command, containing a quiet on the first line and morning on the second.

::::compare
```kalm App.kalm {"style":"indentation"}
use java.nio.file.Files
use java.nio.file.Path
use java.nio.file.Path

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

fun readLines(path: Path) -> List<Text>:
    fix lines: List<Text> = []
    try:
        with reader = Files.newBufferedReader(path):
            while true:
                fix line: Text? = reader.readLine()
                if line != null:
                    lines.add(line)
                else:
                    stop
    handle (error: java.io.IOException):
        sayLine("Could not read file")
        exit(1)

    return lines

pub fun main(args: Array<Text>) -> Unit:
    if len(args) != 1:
        sayLine("Usage: kalm run -- <file>")
        exit(2)
        return

    fix result = summarize(readLines(Path.of(args[0])))
    sayLine(@"${result.lines()} lines / ${result.words()} words")
```
```kalm App.kalm {"style":"braces"}
use java.nio.file.Files
use java.nio.file.Path
use java.nio.file.Path

fun countWords(text: Text) -> Int {
    var words = 0
    for word in text.split("\\s+") {
        if not word.isBlank() {
            words += 1
        }
    }
    return words
}

data Statistics(lines: Int, words: Int)

fun summarize(lines: List<Text>) -> Statistics {
    var words = 0
    for line in lines {
        words += countWords(line)
    }
    return Statistics(len(lines), words)
}

fun readLines(path: Path) -> List<Text> {
    fix lines: List<Text> = []
    try {
        with reader = Files.newBufferedReader(path) {
            while true {
                fix line: Text? = reader.readLine()
                if line != null {
                    lines.add(line)
                }
                else {
                    stop
                }
            }
        }
    }
    handle (error: java.io.IOException) {
        sayLine("Could not read file")
        exit(1)
    }
    return lines
}

pub fun main(args: Array<Text>) -> Unit {
    if len(args) != 1 {
        sayLine("Usage: kalm run -- <file>")
        exit(2)
        return
    }
    fix result = summarize(readLines(Path.of(args[0])))
    sayLine(@"${result.lines()} lines / ${result.words()} words")
}
```
```kalms App.kalms {"style":"indentation"}
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

use java.nio.file.Files
use java.nio.file.Path

fun readLines(path: Path) -> List<Text>:
    fix lines: List<Text> = []
    try:
        with reader = Files.newBufferedReader(path):
            while true:
                fix line: Text? = reader.readLine()
                if line != null:
                    lines.add(line)
                else:
                    stop
    handle (error: java.io.IOException):
        sayLine("Could not read file")
        exit(1)

    return lines

use java.nio.file.Path

fix args: Array<Text> = arrayOf("notes.txt")
if len(args) != 1:
    sayLine("Usage: kalm run -- <file>")
    exit(2)
fix result = summarize(readLines(Path.of(args[0])))
sayLine(@"${result.lines()} lines / ${result.words()} words")
```
```kalms App.kalms {"style":"braces"}
fun countWords(text: Text) -> Int {
    var words = 0
    for word in text.split("\\s+") {
        if not word.isBlank() {
            words += 1
        }
    }
    return words
}

data Statistics(lines: Int, words: Int)

fun summarize(lines: List<Text>) -> Statistics {
    var words = 0
    for line in lines {
        words += countWords(line)
    }
    return Statistics(len(lines), words)
}

use java.nio.file.Files
use java.nio.file.Path

fun readLines(path: Path) -> List<Text> {
    fix lines: List<Text> = []
    try {
        with reader = Files.newBufferedReader(path) {
            while true {
                fix line: Text? = reader.readLine()
                if line != null {
                    lines.add(line)
                }
                else {
                    stop
                }
            }
        }
    }
    handle (error: java.io.IOException) {
        sayLine("Could not read file")
        exit(1)
    }
    return lines
}

use java.nio.file.Path

fix args: Array<Text> = arrayOf("notes.txt")
if len(args) != 1 {
    sayLine("Usage: kalm run -- <file>")
    exit(2)
}
fix result = summarize(readLines(Path.of(args[0])))
sayLine(@"${result.lines()} lines / ${result.words()} words")
```
```java App.java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

final class Counting {
    public static int countWords(String text) {
        int words = 0;
        for (final String word : text.split("\\s+"))
            if (!word.isBlank()) words += 1;
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

final class Input {
    public static List<String> readLines(Path path) {
        final var lines = new ArrayList<String>();
        try (var reader = Files.newBufferedReader(path)) {
            String line;
            while ((line = reader.readLine()) != null) lines.add(line);
        } catch (IOException error) {
            System.out.println("Could not read file");
            System.exit(1);
        }
        return lines;
    }
}

public final class App {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println("Usage: kalm run -- <file>");
            System.exit(2);
            return;
        }
        final Statistics result = Summary.summarize(
            Input.readLines(Path.of(args[0]))
        );
        System.out.println(
            result.lines() + " lines / " + result.words() + " words"
        );
    }
}
```
::::

:::compare
```powershell Terminal {"os":"windows","shell":"powershell"}
kalm.bat shell -f App.kalms
```
```batch Terminal {"os":"windows","shell":"cmd"}
kalm.bat shell -f App.kalms
```
```bash Terminal {"os":"macos","shell":"bash"}
kalm shell -f App.kalms
```
```zsh Terminal {"os":"macos","shell":"zsh"}
kalm shell -f App.kalms
```
```powershell Terminal {"os":"macos","shell":"powershell"}
kalm shell -f App.kalms
```
```bash Terminal {"os":"linux","shell":"bash"}
kalm shell -f App.kalms
```
```zsh Terminal {"os":"linux","shell":"zsh"}
kalm shell -f App.kalms
```
```powershell Terminal {"os":"linux","shell":"powershell"}
kalm shell -f App.kalms
```
:::

```text
2 lines / 3 words
```

::::::
