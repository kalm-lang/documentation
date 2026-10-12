---
{
  "title": "Blocks and comments",
  "order": 1,
  "group": "Basics",
  "verify": "alternatives"
}
---

Use indentation or braces for blocks; # starts a comment.

::::compare {"presentation":"showcase","locks":{"style":true}}
```kalm Indentation {"style":"indentation","pane":"Indentation"}
pub fun greeting() -> Unit:
# A quiet hello.
    sayLine("Hello")
```
```kalms Indentation {"style":"indentation","pane":"Indentation"}
fun greeting() -> Unit:
# A quiet hello.
    sayLine("Hello")
```
```kalm Braces {"style":"braces","pane":"Braces"}
pub fun greeting() -> Unit {
    # The same hello.
    sayLine("Hello");
}
```
```kalms Braces {"style":"braces","pane":"Braces"}
fun greeting() -> Unit {
    # The same hello.
    sayLine("Hello");
}
```
::::
[Learn more](/docs/language/layout/).
