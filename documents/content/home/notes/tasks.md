---
{
  "title": "Async runs on virtual threads.",
  "order": 2,
  "icon": "timer",
  "description": "Tasks use JVM virtual threads. Await either a Kalm Task or a Java CompletionStage, with cancellation, failure and interruption handling.",
  "doc": "/docs/language/resources/"
}
---

::::compare
```kalm Tasks.kalm {"style":"indentation"}
pub async fun answer() -> int:
    fix pending: Task<Int> = task:
        return 6 * 7

    return await pending
```
```kalm Tasks.kalm {"style":"braces"}
pub async fun answer() -> int {
    fix pending: Task<Int> = task {
        return 6 * 7
    }
    return await pending
}
```
```kalms Tasks.kalms {"style":"indentation"}
async fun answer() -> int:
    fix pending: Task<Int> = task:
        return 6 * 7

    return await pending
```
```kalms Tasks.kalms {"style":"braces"}
async fun answer() -> int {
    fix pending: Task<Int> = task {
        return 6 * 7
    }
    return await pending
}
```
```java Tasks.java
import java.util.concurrent.CompletableFuture;

public final class Tasks {
    public static CompletableFuture<Integer> answer() {
        var pending = start();
        return pending.thenApply(value -> value);
    }

    public static CompletableFuture<Integer> start() {
        var pending = new CompletableFuture<Integer>();
        Thread.startVirtualThread(() -> pending.complete(6 * 7));
        return pending;
    }
}
```
::::
