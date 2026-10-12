---
{
  "title": "async fun / await",
  "order": 61,
  "group": "Concurrency"
}
---

Await inside an async function or task body.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub async fun answer() -> Int:
    fix pending: Task<Int> = task:
        return 6 * 7

    return await pending
```
```kalm Example.kalm {"style":"braces"}
pub async fun answer() -> Int {
    fix pending: Task<Int> = task {
        return 6 * 7
    }
    return await pending
}
```
```kalms Example.kalms {"style":"indentation"}
async fun answer() -> Int:
    fix pending: Task<Int> = task:
        return 6 * 7

    return await pending
```
```kalms Example.kalms {"style":"braces"}
async fun answer() -> Int {
    fix pending: Task<Int> = task {
        return 6 * 7
    }
    return await pending
}
```
```java Example.java
import java.util.concurrent.CompletableFuture;

public final class Example {
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

[Learn more](/docs/language/resources/).
