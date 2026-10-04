---
{
  "title": "7. Read a file safely",
  "order": 7,
  "lesson": 7
}
---

Keep Counting.kalm, Statistics.kalm, and Summary.kalm. Add
`src/main/kalm/stats/Input.kalm`:

```kalm Input.kalm
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

`with` closes the reader, including on failure. Java I/O exceptions must be
handled. A null line means the end of the file; a blank line is still a line.

Replace App.kalm:

```kalm App.kalm
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

Create notes.txt with two lines:

```text
a quiet
morning
```

```bash
kalm run -- notes.txt
```

```text
2 lines / 3 words
```

A missing or unreadable file prints an error and exits with status 1.
An incorrect argument count prints usage and exits with status 2.
The input file is read without changing it.
