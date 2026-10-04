---
{
  "title": "contract / impl / override",
  "order": 35,
  "group": "Types"
}
---

Implement a contract using explicitly marked override methods.

```kalm Example.kalm
contract Greeter:
    fun greet(name: Text) -> Text

class Friendly impl Greeter:
    override fun greet(name: Text) -> Text = @"Hello, $name!"
```

[Learn more](/docs/language/types/).
