---
{
  "title": "task",
  "order": 60,
  "group": "Concurrency"
}
---

Start a block on a virtual thread and keep its result handle.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub fun start() -> Task<Int>:
    return task:
        return 6 * 7
```
```kalm Example.kalm {"style":"braces"}
pub fun start() -> Task<Int> {
    return task {
        return 6 * 7
    }
}
```
```kalms Example.kalms {"style":"indentation"}
fun start() -> Task<Int>:
    return task:
        return 6 * 7
```
```kalms Example.kalms {"style":"braces"}
fun start() -> Task<Int> {
    return task {
        return 6 * 7
    }
}
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
