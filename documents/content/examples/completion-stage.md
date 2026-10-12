---
{
  "title": "Java completion stages",
  "order": 62,
  "group": "Concurrency"
}
---

Await also accepts a Java CompletionStage.

::::compare
```kalm Example.kalm {"style":"indentation"}
pub async fun answer() -> Int:
    return await java.util.concurrent.CompletableFuture.completedFuture(42)
```
```kalm Example.kalm {"style":"braces"}
pub async fun answer() -> Int {
    return await java.util.concurrent.CompletableFuture.completedFuture(42)
}
```
```kalms Example.kalms {"style":"indentation"}
async fun answer() -> Int:
    return await java.util.concurrent.CompletableFuture.completedFuture(42)
```
```kalms Example.kalms {"style":"braces"}
async fun answer() -> Int {
    return await java.util.concurrent.CompletableFuture.completedFuture(42)
}
```
```java Example.java
import java.util.concurrent.CompletableFuture;

public final class Example {
    public static CompletableFuture<Integer> answer() {
        return CompletableFuture.completedFuture(42);
    }
}
```
::::

[Learn more](/docs/language/resources/).
