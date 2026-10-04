---
{
  "title": "3. Arguments and absence",
  "order": 3,
  "lesson": 3
}
---

The program needs a file path. Accept an array of command-line arguments and use
a nullable result when exactly one argument is not available.

Replace App.kalm:

```kalm App.kalm
space stats

fun requestedPath(args: Array<Text>) -> Text?:
    if len(args) == 1:
        return args[0]
    return null

pub fun main(args: Array<Text>) -> Unit:
    fix requested = requestedPath(args)
    if requested != null:
        sayLine(@"Will read $requested")
    else:
        sayLine("Usage: kalm run -- <file>")
```

`Text?` can contain text or null. Checking a stable `fix` binding refines it
inside the non-null branch. Checking the argument count first also avoids an
out-of-bounds access.

```bash
kalm run -- notes.txt
```

```text
Will read notes.txt
```

Run without an argument to see the usage message. Nothing reads the file yet.
The `--` separates CLI options from your program's arguments.
