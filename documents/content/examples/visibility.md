---
{
  "title": "Visibility",
  "order": 46,
  "group": "Types"
}
---

Use pub for API declarations, internal for module access, and private for local implementation.

::::compare
```kalm Counter.kalm {"style":"indentation"}
pub class Counter:
    private var value: Int = 0
    protected fun current() -> Int = value
    pub fun increment() -> Int:
        value += 1
        return value

internal fun defaultValue() -> Int = 0
```
```kalm Counter.kalm {"style":"braces"}
pub class Counter {
    private var value: Int = 0
    protected fun current() -> Int = value
    pub fun increment() -> Int {
        value += 1
        return value
    }
}

internal fun defaultValue() -> Int = 0
```
```kalms Counter.kalms {"style":"indentation"}
class Counter:
    private var value: Int = 0
    protected fun current() -> Int = value
    pub fun increment() -> Int:
        value += 1
        return value

internal fun defaultValue() -> Int = 0
```
```kalms Counter.kalms {"style":"braces"}
class Counter {
    private var value: Int = 0
    protected fun current() -> Int = value
    pub fun increment() -> Int {
        value += 1
        return value
    }
}

internal fun defaultValue() -> Int = 0
```
```java Counter.java
public final class Counter {
    private int value = 0;

    protected final int current() {
        return value;
    }

    public final int increment() {
        value += 1;
        return value;
    }
}

// Package visibility approximates Kalm's module visibility.
final class CounterFunctions {
    static int defaultValue() {
        return 0;
    }
}
```
::::

[Learn more](/docs/language/types/).
