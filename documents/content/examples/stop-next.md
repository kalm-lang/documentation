---
{
  "title": "stop / next",
  "order": 28,
  "group": "Flow"
}
---

Skip an iteration with next, or leave the loop with stop.

```kalm Example.kalm
pub fun main() -> Unit:
    for value in range(5):
        if value == 1:
            next
        if value == 4:
            stop
        sayLine(value)
```

[Learn more](/docs/language/functions/).
