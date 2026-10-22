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
```kalm App.kalm {"style":"indentation"}
space stats

pub fun main() -> void:
    sayLine("Text stats")
```
```kalm App.kalm {"style":"braces"}
space stats

pub fun main() -> void {
    sayLine("Text stats")
}
```
```java App.java
package stats;

public final class App {
    public static void main(String[] args) {
        System.out.println("Text stats");
    }
}
```
::::

`space` names the package; `main` is the entry point. `sayLine` is available
without an import. The block contains the statements run by the entry point.

## Run it

:::compare
```powershell Terminal {"os":"windows","shell":"powershell"}
kalm.bat run
```
```batch Terminal {"os":"windows","shell":"cmd"}
kalm.bat run
```
```bash Terminal {"os":"macos","shell":"bash"}
kalm run
```
```zsh Terminal {"os":"macos","shell":"zsh"}
kalm run
```
```powershell Terminal {"os":"macos","shell":"powershell"}
kalm run
```
```bash Terminal {"os":"linux","shell":"bash"}
kalm run
```
```zsh Terminal {"os":"linux","shell":"zsh"}
kalm run
```
```powershell Terminal {"os":"linux","shell":"powershell"}
kalm run
```
:::

```text
Text stats
```

Try changing the message and run it again. Your project will eventually read a
text file and report its line and word counts.

::::::

::::::dialect kalms
Save the complete program below as App.kalms in a folder of your choice. Each lesson replaces this file; the shell does not load neighboring project files.

::::compare
```kalm App.kalm {"style":"indentation"}
pub fun main() -> void:
    sayLine("Text stats")
```
```kalm App.kalm {"style":"braces"}
pub fun main() -> void {
    sayLine("Text stats")
}
```
```kalms App.kalms {"style":"indentation"}
sayLine("Text stats")
```
```kalms App.kalms {"style":"braces"}
sayLine("Text stats")
```
```java App.java
void main() {
    System.out.println("Text stats");
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
Text stats
```

::::::
