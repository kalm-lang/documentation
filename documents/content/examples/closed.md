---
{
  "title": "closed",
  "order": 38,
  "group": "Types"
}
---

Declare all permitted direct children inside a sealed hierarchy.

```kalm Result.kalm
pub closed class Result:
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}
```

[Learn more](/docs/language/types/).
