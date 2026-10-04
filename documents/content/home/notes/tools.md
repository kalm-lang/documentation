---
{
  "title": "Tests are part of the syntax.",
  "order": 5,
  "icon": "check",
  "verify": "test",
  "description": "Write named test blocks with before and after hooks. The CLI, Maven and Gradle run the same native tests without a separate test library.",
  "doc": "/docs/cli/"
}
---

Put tests under `src/test/kalm` and run them with `kalm test`. Checks such as `expect` stay active without JVM assertion flags.

```kalm ArithmeticTests.kalm
before:
    sayLine("starting")

test "arithmetic works":
    expect 2 + 3 == 5

after:
    sayLine("finished")
```
