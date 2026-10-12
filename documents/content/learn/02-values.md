---
{
  "title": "2. Values and text",
  "order": 2,
  "lesson": 2
}
---

::::::dialect kalm

Replace App.kalm with this small experiment:

::::compare {"scriptUnavailable":"This source file belongs to the project path; the script path uses one self-contained file."}
```kalm App.kalm {"style":"indentation"}
space stats

pub fun main() -> Unit:
    fix text = "a quiet morning"
    var words = 0
    words += 3
    sayLine(@"$words words: $text")
```
```kalm App.kalm {"style":"braces"}
space stats

pub fun main() -> Unit {
    fix text = "a quiet morning"
    var words = 0
    words += 3
    sayLine(@"$words words: $text")
}
```
```java App.java
package stats;

public final class App {
    public static void main(String[] args) {
        final String text = "a quiet morning";
        int words = 0;
        words += 3;
        System.out.println(words + " words: " + text);
    }
}
```
::::

`fix` binds a value once. `var` allows updates. Local types are inferred here;
public function results still have explicit types. Prefix a string with `@`
to interpolate a binding such as `$words`.

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
3 words: a quiet morning
```

Try changing the sentence and its count. In a later lesson, a loop will count
the words for you.

Read [values and nullability](/docs/language/values/) for the complete explanation.

::::::

::::::dialect kalms
Save the complete program below as App.kalms in a folder of your choice. Each lesson replaces this file; the shell does not load neighboring project files.

::::compare
```kalm App.kalm {"style":"indentation"}
pub fun main() -> Unit:
    fix text = "a quiet morning"
    var words = 0
    words += 3
    sayLine(@"$words words: $text")
```
```kalm App.kalm {"style":"braces"}
pub fun main() -> Unit {
    fix text = "a quiet morning"
    var words = 0
    words += 3
    sayLine(@"$words words: $text")
}
```
```kalms App.kalms {"style":"indentation"}
fix text = "a quiet morning"
var words = 0
words += 3
sayLine(@"$words words: $text")
```
```kalms App.kalms {"style":"braces"}
fix text = "a quiet morning"
var words = 0
words += 3
sayLine(@"$words words: $text")
```
```java App.java
void main() {
    final String text = "a quiet morning";
    int words = 0;
    words += 3;
    System.out.println(words + " words: " + text);
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
3 words: a quiet morning
```

::::::
