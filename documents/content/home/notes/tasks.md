---
{
  "title": "Async runs on virtual threads.",
  "order": 2,
  "icon": "timer",
  "description": "Tasks use JVM virtual threads. Await either a Kalm Task or a Java CompletionStage, with cancellation, failure and interruption handling.",
  "doc": "/docs/language/resources/"
}
---

```kalm Tasks.kalm
pub async fun answer() -> Int:
    fix pending: Task<Int> = task:
        return 6 * 7
    return await pending
```
