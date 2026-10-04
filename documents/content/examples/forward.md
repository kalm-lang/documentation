---
{
  "title": "forward",
  "order": 41,
  "group": "Types"
}
---

Delegate contract methods to an existing implementation.

```kalm Example.kalm
contract Greeter:
    fun greet(name: Text) -> Text

class Delegated impl Greeter:
    fix delegate: Greeter
    init(delegate: Greeter):
        self.delegate = delegate
    forward Greeter to delegate
```

[Learn more](/docs/language/types/).
