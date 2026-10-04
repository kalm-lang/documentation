---
{
  "title": "task",
  "order": 60,
  "group": "Concurrency"
}
---

Start a block on a virtual thread and keep its result handle.

```kalm Example.kalm
pub fun start() -> Task<Int>:
    return task:
        return 6 * 7
```

[Learn more](/docs/language/resources/).
