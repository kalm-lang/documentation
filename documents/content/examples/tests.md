---
{
  "title": "test / before / after",
  "order": 64,
  "group": "Testing",
  "verify": "test"
}
---

Put native tests and their per-test hooks under src/test/kalm.

::::compare {"scriptUnavailable":"Native tests and lifecycle hooks run in a compiled Kalm project."}
```kalm ExampleTests.kalm {"style":"indentation"}
before:
    sayLine("starting")

test "arithmetic works":
    expect 2 + 3 == 5

after:
    sayLine("finished")
```
```kalm ExampleTests.kalm {"style":"braces"}
before {
    sayLine("starting")
}

test "arithmetic works" {
    expect 2 + 3 == 5
}

after {
    sayLine("finished")
}
```
```java ExampleTests.java
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;

public class ExampleTests {
    @BeforeEach
    void before() {
        System.out.println("starting");
    }

    @Test
    void arithmeticWorks() {
        assertEquals(5, 2 + 3);
    }

    @AfterEach
    void after() {
        System.out.println("finished");
    }
}
```
::::

[Learn more](/docs/language/properties/).
