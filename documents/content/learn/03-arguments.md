---
{
  "title": "3. Arguments and absence",
  "order": 3,
  "lesson": 3
}
---

::::::dialect kalm

The program needs a file path. Accept an array of command-line arguments and use
a nullable result when exactly one argument is not available.

Replace App.kalm:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
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
```java App.java
package stats;

public final class App {
    static String requestedPath(String[] args) { return args.length == 1 ? args[0] : null; }
    public static void main(String[] args) {
        final String requested = requestedPath(args);
        System.out.println(requested != null ? "Will read " + requested : "Usage: kalm run -- <file>");
    }
}
```
::::

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

::::::

::::::dialect kalms
Save the complete program below as App.kalms in a folder of your choice. Each lesson replaces this file; the shell does not load neighboring project files. The script host does not forward command-line arguments. Edit the args array to try a different path or an empty input.

::::compare
```kalm App.kalm
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
```kalms App.kalms
fun requestedPath(args: Array<Text>) -> Text?:
    if len(args) == 1:
        return args[0]
    return null

fix args: Array<Text> = arrayOf("notes.txt")
fix requested = requestedPath(args)
if requested != null:
    sayLine(@"Will read $requested")
else:
    sayLine("Usage: kalm run -- <file>")
```
```java App.java
public final class App {
    static String requestedPath(String[] args) { return args.length == 1 ? args[0] : null; }
    public static void main(String[] args) {
        final String requested = requestedPath(args);
        System.out.println(requested != null ? "Will read " + requested : "Usage: kalm run -- <file>");
    }
}
```
::::

```bash
kalm shell -f App.kalms
```

```text
Will read notes.txt
```

::::::
