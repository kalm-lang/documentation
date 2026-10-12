---
{
  "title": "1. Your first program",
  "order": 1,
  "lesson": 1
}
---

::::::dialect kalm

Start with [Getting started](/docs/quick-start/) to build Kalm and make the
`kalm` command available in your shell.

## Create a workspace

Create a folder named `text-stats` outside the Kalm checkout. Inside it, create
`src/main/kalm/stats` and `src/test/kalm/stats`. All commands in this path run
from `text-stats`.

Save this as `src/main/kalm/stats/App.kalm`:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm App.kalm
space stats

pub fun main() -> Unit:
    sayLine("Text stats")
```
```java App.java
package stats;

public final class App {
    public static void main(String[] args) { System.out.println("Text stats"); }
}
```
::::

`space` names the package; `main` is the entry point. `sayLine` is available
without an import. The colon starts an indented body.

## Run it

```bash
kalm run
```

```text
Text stats
```

Try changing the message and run it again. Your project will eventually read a
text file and report its line and word counts.

::::::

::::::dialect kalms
Save the complete program below as App.kalms in a folder of your choice. Each lesson replaces this file; the shell does not load neighboring project files.

::::compare
```kalm App.kalm
pub fun main() -> Unit:
    sayLine("Text stats")
```
```kalms App.kalms
sayLine("Text stats")
```
```java App.java
public final class App {
    public static void main(String[] args) { System.out.println("Text stats"); }
}
```
::::

```bash
kalm shell -f App.kalms
```

```text
Text stats
```

::::::
