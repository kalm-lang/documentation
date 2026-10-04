---
{
  "title": "Java completion stages",
  "order": 62,
  "group": "Concurrency"
}
---

Await also accepts a Java CompletionStage.

```kalm Example.kalm
pub async fun answer() -> Int:
    return await java.util.concurrent.CompletableFuture.completedFuture(42)
```

[Learn more](/docs/language/resources/).
