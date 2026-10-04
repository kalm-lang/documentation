---
{
  "title": "async fun / await",
  "order": 61,
  "group": "Concurrency"
}
---

Await inside an async function or task body.

```kalm Example.kalm
pub async fun answer() -> Int:
    fix pending: Task<Int> = task:
        return 6 * 7
    return await pending
```

[Learn more](/docs/language/resources/).
