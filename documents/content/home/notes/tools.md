---
{
  "title": "Tests are part of the syntax.",
  "order": 5,
  "icon": "check",
  "verify": "test",
  "description": "Write named test blocks with before and after hooks. The CLI, Maven and Gradle run the same native tests without a separate test library.",
  "doc": "/docs/cli/",
  "scriptTitle": "Project mode adds native tests.",
  "scriptDescription": "Scripts are for sequential programs. Native tests and before/after hooks belong in a Kalm project; switch to Kalm to follow the test workflow."
}
---

Put tests under `src/test/kalm` and run them with `kalm test`. Checks such as `expect` stay active without JVM assertion flags.

::::compare {"scriptUnavailable":"Native tests and hooks require a Kalm project."}
```kalm ArithmeticTests.kalm
before:
    sayLine("starting")

test "arithmetic works":
    expect 2 + 3 == 5

after:
    sayLine("finished")
```
```java ArithmeticTests.java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class ArithmeticTests {
    @BeforeEach void before() { System.out.println("starting"); }
    @Test void arithmeticWorks() { assertEquals(5, 2 + 3); }
    @AfterEach void after() { System.out.println("finished"); }
}
```
::::
