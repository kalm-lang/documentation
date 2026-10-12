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
```kalm App.kalm
space stats

pub fun main() -> Unit:
    fix text = "a quiet morning"
    var words = 0
    words += 3
    sayLine(@"$words words: $text")
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

```bash
kalm run
```

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
```kalm App.kalm
pub fun main() -> Unit:
    fix text = "a quiet morning"
    var words = 0
    words += 3
    sayLine(@"$words words: $text")
```
```kalms App.kalms
fix text = "a quiet morning"
var words = 0
words += 3
sayLine(@"$words words: $text")
```
```java App.java
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

```bash
kalm shell -f App.kalms
```

```text
3 words: a quiet morning
```

::::::
