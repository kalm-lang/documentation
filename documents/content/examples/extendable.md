---
{
  "title": "extendable / fix",
  "order": 37,
  "group": "Types"
}
---

Classes and methods are final by default; open them explicitly for extension.

```kalm Example.kalm
extendable class Greeter:
    extendable fun greet() -> Text = "Hello"

fix class Friendly inherits Greeter:
    override fun greet() -> Text = "Welcome"
```

[Learn more](/docs/language/types/).
