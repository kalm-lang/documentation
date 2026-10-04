---
{
  "title": "2. Values and text",
  "order": 2,
  "lesson": 2
}
---

Replace App.kalm with this small experiment:

```kalm App.kalm
space stats

pub fun main() -> Unit:
    fix text = "a quiet morning"
    var words = 0
    words += 3
    sayLine(@"$words words: $text")
```

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
