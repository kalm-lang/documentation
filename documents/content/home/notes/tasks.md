---
{
  "title": "Let a task take its time.",
  "order": 4,
  "icon": "timer",
  "description": "Start work on a virtual thread and await its answer.",
  "preview": "task / async / await",
  "doc": "/docs/language/resources/"
}
---

```kalm Tasks.kalm
pub async fun answer() -> Int:
    fix pending: Task<Int> = task:
        return 6 * 7
    return await pending
```
