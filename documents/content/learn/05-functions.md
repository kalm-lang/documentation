---
{
  "title": "5. Extract a function",
  "order": 5,
  "lesson": 5
}
---

::::::dialect kalm

Move the counting logic into `src/main/kalm/stats/Counting.kalm`:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm Counting.kalm {"style":"indentation"}
space stats

pub fun countWords(text: Text) -> int:
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1

    return words
```
```kalm Counting.kalm {"style":"braces"}
space stats

pub fun countWords(text: Text) -> int {
    var words = 0
    for word in text.split("\\s+") {
        if not word.isBlank() {
            words += 1
        }
    }
    return words
}
```
```java Counting.java
package stats;

public final class Counting {
    public static int countWords(String text) {
        int words = 0;
        for (final String word : text.split("\\s+"))
            if (!word.isBlank()) words += 1;
        return words;
    }
}
```
::::

Replace App.kalm with its caller:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm App.kalm {"style":"indentation"}
space stats

pub fun main() -> void:
    sayLine(@"${countWords("a quiet morning")} words")
```
```kalm App.kalm {"style":"braces"}
space stats

pub fun main() -> void {
    sayLine(@"${countWords("a quiet morning")} words")
}
```
```java App.java
package stats;

public final class App {
    public static void main(String[] args) {
        System.out.println(
            Counting.countWords("a quiet morning") + " words"
        );
    }
}
```
::::

The function has an explicit parameter and result type. Both files share the
same package, so the function is available without an import. `${...}` embeds
an expression in interpolated text.

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

Try calling countWords with two different strings. It has no mutable shared
state, which makes it easy to test.

::::::

::::::dialect kalms
Save the complete program below as App.kalms in a folder of your choice. Each lesson replaces this file; the shell does not load neighboring project files.

::::compare
```kalm App.kalm {"style":"indentation"}
fun countWords(text: Text) -> int:
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1

    return words

pub fun main() -> void:
    sayLine(@"${countWords("a quiet morning")} words")
```
```kalm App.kalm {"style":"braces"}
fun countWords(text: Text) -> int {
    var words = 0
    for word in text.split("\\s+") {
        if not word.isBlank() {
            words += 1
        }
    }
    return words
}

pub fun main() -> void {
    sayLine(@"${countWords("a quiet morning")} words")
}
```
```kalms App.kalms {"style":"indentation"}
fun countWords(text: Text) -> int:
    var words = 0
    for word in text.split("\\s+"):
        if not word.isBlank():
            words += 1

    return words

sayLine(@"${countWords("a quiet morning")} words")
```
```kalms App.kalms {"style":"braces"}
fun countWords(text: Text) -> int {
    var words = 0
    for word in text.split("\\s+") {
        if not word.isBlank() {
            words += 1
        }
    }
    return words
}

sayLine(@"${countWords("a quiet morning")} words")
```
```java App.java
final class Counting {
    public static int countWords(String text) {
        int words = 0;
        for (final String word : text.split("\\s+"))
            if (!word.isBlank()) words += 1;
        return words;
    }
}

public final class App {
    public static void main(String[] args) {
        System.out.println(
            Counting.countWords("a quiet morning") + " words"
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
3 words
```

::::::
