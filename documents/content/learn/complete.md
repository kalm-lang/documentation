---
{
  "title": "Keep writing Kalm",
  "order": 9
}
---

::::::dialect kalm

You built a CLI that reads a file, counts lines and whitespace-separated words,
handles errors, and tests its core behavior.

Your final project contains these files:

```text
src/main/kalm/stats/
  App.kalm
  Counting.kalm
  Statistics.kalm
  Summary.kalm
  Input.kalm
src/test/kalm/stats/
  StatisticsTests.kalm
```

## Try a small extension

Add a character count to Statistics and update summarize and its tests.
Keep I/O separate from counting so your tests can use small in-memory inputs.

## Pick your next topic

- Read the [Handbook](/docs/language/) for deeper explanations.
- Try [contracts](/examples/contracts/) and [forwarding](/examples/forward/).
- Explore [async functions](/examples/async/) and [resource cleanup](/examples/with/).
- Add [Maven](/docs/maven/) or [Gradle](/docs/gradle/) to your project.

[Return to the learning path](/learn/).

::::::

::::::dialect kalms
You built a single-file script that reads a file, counts lines and whitespace-separated words, and handles input errors. Your program lives in App.kalms and runs with `kalm shell -f App.kalms`.

## Try a small extension

Add a character count to Statistics and update summarize. Keep input handling separate from counting so you can experiment with small in-memory values.

## Move into project mode

Switch the navbar to Kalm to follow the project path, publish reusable APIs, accept command-line arguments, and add native tests.

- Read the [Handbook](/docs/language/).
- Explore [async functions](/examples/async/) and [resource cleanup](/examples/with/).
- [Return to the learning path](/learn/).
::::::
