---
{
  "title": "Delegate a contract in one line.",
  "order": 3,
  "icon": "route",
  "description": "The forward declaration generates contract methods for a delegate, preserving generic types and checked Java exceptions.",
  "doc": "/docs/language/types/"
}
---

Wrap an implementation without writing the same forwarding methods by hand.

```kalm Delegation.kalm
contract Greeter:
    fun greet(name: Text) -> Text

class Delegated impl Greeter:
    fix delegate: Greeter
    init(delegate: Greeter):
        self.delegate = delegate
    forward Greeter to delegate
```
