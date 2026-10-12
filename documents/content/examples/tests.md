---
{
  "title": "test / before / after",
  "order": 64,
  "group": "Testing",
  "verify": "test"
}
---

Put native tests and their per-test hooks under src/test/kalm.

::::compare {"scriptUnavailable":"Native tests and hooks require a Kalm project."}
```kalm ExampleTests.kalm
before:
    sayLine("starting")

test "arithmetic works":
    expect 2 + 3 == 5

after:
    sayLine("finished")
```
```java ExampleTests.java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class ExampleTests {
    @BeforeEach void before() { System.out.println("starting"); }
    @Test void arithmeticWorks() { assertEquals(5, 2 + 3); }
    @AfterEach void after() { System.out.println("finished"); }
}
```
::::

[Learn more](/docs/language/properties/).
