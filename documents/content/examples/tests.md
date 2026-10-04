---
{
  "title": "test / before / after",
  "order": 64,
  "group": "Testing",
  "verify": "test"
}
---

Put native tests and their per-test hooks under src/test/kalm.

```kalm ExampleTests.kalm
before:
    sayLine("starting")

test "arithmetic works":
    expect 2 + 3 == 5

after:
    sayLine("finished")
```

[Learn more](/docs/language/properties/).
