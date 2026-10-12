---
{
  "title": "Properties and tests",
  "order": 15,
  "navSection": "Language guide"
}
---

`read`/`write` expose conventional Java getters/setters. `lazy fix` evaluates its initializer once and safely publishes success or the original failure. `late var` has a runtime guard for both Kalm and Java reads before assignment. It throws `IllegalStateException` until initialized; setters reject null and allow reassignment. Use ordinary initialized fields when construction should establish the invariant.

::::compare {"scriptUnavailable":"Native tests and lifecycle hooks run in a compiled Kalm project."}
```kalm BoxTests.kalm {"style":"indentation"}
data Box<T>(value: T)

before:
    require true;

test "a record preserves its value":
    fix box: Box<Text> = Box<Text>("Mira");
    expect box.value() == "Mira";
after:
    ensure true;
```
```kalm BoxTests.kalm {"style":"braces"}
data Box<T>(value: T)

before {
    require true;
}
test "a record preserves its value" {
    fix box: Box<Text> = Box<Text>("Mira");
    expect box.value() == "Mira";
}
after {
    ensure true;
}
```
```java BoxTests.java
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;

record Box<T>(T value) {}

class ExampleTests {
    @BeforeEach
    void before() {
        assertTrue(true);
    }

    @Test
    void recordPreservesValue() {
        assertEquals("Mira", new Box<String>("Mira").value());
    }

    @AfterEach
    void after() {
        assertTrue(true);
    }
}
```
::::

Tests and hooks belong under test roots. Every test runs with its hooks; cleanup still runs after a failed check. The CLI and both build plugins share the test runner and XML/HTML reports.
