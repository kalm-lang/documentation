---
{
  "title": "Blocks and comments",
  "order": 1,
  "group": "Basics",
  "verify": "alternatives"
}
---

Use indentation or braces for blocks; # starts a comment.

:::tabs
```kalm Indentation
pub fun greeting() -> Unit:
    # A quiet hello.
    sayLine("Hello")
```
```kalm Braces
pub fun greeting() -> Unit {
    # The same hello.
    sayLine("Hello");
}
```
:::

[Learn more](/docs/language/layout/).
