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
```kalm App.kalm {"style":"indentation"}
space stats

pub fun main() -> Unit:
    fix text = "a   quiet morning"
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1

    sayLine(@"$words words")
```
```kalm App.kalm {"style":"braces"}
space stats

pub fun main() -> Unit {
    fix text = "a   quiet morning"
    var words = 0
    for word in text.split("\\s+") {
        if not word.isBlank() {
            words += 1
        }
    }
    sayLine(@"$words words")
}
```
```java App.java
package stats;

public final class App {
    public static void main(String[] args) {
        final String text = "a quiet morning";
        int words = 0;
        for (final String word : text.split("\\s+"))
            if (!word.isBlank()) words += 1;
        System.out.println(words + " words");
    }
}
```
::::

Java's `split` accepts a regular expression. `\\s+` matches consecutive whitespace;
the doubled slash is the string escape. The blank check makes empty input count
as zero words. `for` traverses the array with an immutable loop binding.

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
3 words
```

Try empty text, leading spaces, and tabs. They should not add words.

[Functions and flow](/docs/language/functions/) covers branches and loop control.

::::::

::::::dialect kalms
Save the complete program below as App.kalms in a folder of your choice. Each lesson replaces this file; the shell does not load neighboring project files.

::::compare
```kalm App.kalm {"style":"indentation"}
pub fun main() -> Unit:
    fix text = "a   quiet morning"
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1

    sayLine(@"$words words")
```
```kalm App.kalm {"style":"braces"}
pub fun main() -> Unit {
    fix text = "a   quiet morning"
    var words = 0
    for word in text.split("\\s+") {
        if not word.isBlank() {
            words += 1
        }
    }
    sayLine(@"$words words")
}
```
```kalms App.kalms {"style":"indentation"}
fix text = "a   quiet morning"
var words = 0
for word in text.split("\\s+"):
    if not word.isBlank():
        words += 1

sayLine(@"$words words")
```
```kalms App.kalms {"style":"braces"}
fix text = "a   quiet morning"
var words = 0
for word in text.split("\\s+") {
    if not word.isBlank() {
        words += 1
    }
}
sayLine(@"$words words")
```
```java App.java
void main() {
    final String text = "a quiet morning";
    int words = 0;
    for (final String word : text.split("\\s+"))
        if (!word.isBlank()) words += 1;
    System.out.println(words + " words");
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
3 words
```

::::::
