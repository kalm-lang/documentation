---
{
  "title": "Resources and concurrency",
  "order": 14,
  "navSection": "Language guide"
}
---

```kalm
with input = java.util.Scanner(System.in) {
    if (input.hasNextLine()) { sayLine(input.nextLine()); }
}

async fun count() -> Int { return await task { return 7; }; }
```

`with` closes resources in reverse order. `defer` runs cleanup on scope exit. `expect`, `require` and `ensure` remain active without JVM assertion flags. `guard lock { ... }` synchronizes on a non-null receiver and prohibits `await` inside the guard.

Tasks run on virtual threads. `Task<T>` extends `CompletionStage<T>` for Java callers. `await` accepts either type, handles cancellation/failure/interruption, and is valid only inside async functions or task bodies.
