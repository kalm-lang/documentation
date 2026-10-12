---
{
  "title": "Resources and concurrency",
  "order": 14,
  "navSection": "Language guide"
}
---

::::compare
```kalm {"style":"indentation"}
pub fun main() -> Unit:
    with input = java.util.Scanner(System.in):
        if (input.hasNextLine()):
            sayLine(input.nextLine());

async fun count() -> Int:
    return await task:
        return 7;

    ;
```
```kalm {"style":"braces"}
pub fun main() -> Unit {
    with input = java.util.Scanner(System.in) {
        if (input.hasNextLine()) {
            sayLine(input.nextLine());
        }
    }
}

async fun count() -> Int {
    return await task {
        return 7;
    }
    ;
}
```
```kalms Example.kalms {"style":"indentation"}
with input = java.util.Scanner(System.in):
    if (input.hasNextLine()):
        sayLine(input.nextLine());

async fun count() -> Int:
    return await task:
        return 7;

    ;
```
```kalms Example.kalms {"style":"braces"}
with input = java.util.Scanner(System.in) {
    if (input.hasNextLine()) {
        sayLine(input.nextLine());
    }
}

async fun count() -> Int {
    return await task {
        return 7;
    }
    ;
}
```
```java Example.java
import java.util.Scanner;
import java.util.concurrent.CompletableFuture;

void main() {
    try (var input = new Scanner(System.in)) {
        if (input.hasNextLine()) System.out.println(input.nextLine());
    }
}

CompletableFuture<Integer> count() {
    var result = new CompletableFuture<Integer>();
    Thread.startVirtualThread(() -> result.complete(7));
    return result;
}
```
::::

`with` closes resources in reverse order. `defer` runs cleanup on scope exit. `expect`, `require` and `ensure` remain active without JVM assertion flags. `guard lock { ... }` synchronizes on a non-null receiver and prohibits `await` inside the guard.

Tasks run on virtual threads. `Task<T>` extends `CompletionStage<T>` for Java callers. `await` accepts either type, handles cancellation/failure/interruption, and is valid only inside async functions or task bodies.
