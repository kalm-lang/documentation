---
{
  "title": "Command-line tools",
  "order": 25
}
---

Run commands from your project directory. The default main roots are
`src/main/kalm` and `src/main/java`; tests use their corresponding test roots.

## Everyday commands

```bash
kalm check
kalm run
kalm run -- notes.txt
kalm test
kalm format src/main/kalm
kalm format src/main/kalm --fix
kalm build --jar target/app.jar
```

`check` performs type analysis without emitting classes. `format` reports changes;
`--fix` applies them. `build` creates a thin executable JAR, so application and
runtime dependencies must remain available on its classpath.

## Project inputs

| Option | Purpose |
| --- | --- |
| `--source-root DIR` | Kalm source root; repeat for multiple roots |
| `--java-source-root DIR` | Handwritten Java source root |
| `--classpath PATHS` | Dependencies using the host path separator |
| `--module-path PATHS` | Readable Java modules |
| `--release NUMBER` | Java release; 25 or newer |
| `--main NAME` | Entry-point facade for `run` |
| `--output DIR` | Class output directory |

Quote paths containing spaces. Build metadata under `target` or `build` supplies
source roots and resolved dependencies after a [Maven](/docs/maven/) or
[Gradle](/docs/gradle/) build.

## Diagnostics and tests

`--diagnostic-format json` produces structured diagnostics. `--debug` includes
internal exception details. Exit statuses are 0 for success, 1 for source or test
failure, 2 for invalid configuration, and 3 for internal compiler failure.

`kalm test` compiles main sources and runs native tests. Use `--reports DIR` and
`--html-reports DIR` to choose report directories. Both build plugins run the
same tests and fail their host build on test failure.
