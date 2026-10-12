---
{
  "title": "task",
  "order": 60,
  "group": "Concurrency"
}
---

Start a block on a virtual thread and keep its result handle.

::::compare
```kalm Example.kalm
pub fun start() -> Task<Int>:
    return task:
        return 6 * 7
```
```kalms Example.kalms
fun start() -> Task<Int>:
    return task:
        return 6 * 7
```
```java Example.java
import java.util.concurrent.CompletableFuture;

public final class Example {
    public static CompletableFuture<Integer> start() {
        var pending = new CompletableFuture<Integer>();
        Thread.startVirtualThread(() -> pending.complete(6 * 7));
        return pending;
    }
}
```
::::

[Learn more](/docs/language/resources/).
