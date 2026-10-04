---
{
  "title": "defer",
  "order": 58,
  "group": "Resources"
}
---

Run deferred cleanup when the scope exits.

```kalm Example.kalm
pub fun work() -> Unit:
    defer:
        sayLine("finished")
    sayLine("working")
```

[Learn more](/docs/language/resources/).
