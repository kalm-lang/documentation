---
{
  "title": "Command-line tools",
  "order": 25
}
---

Run commands from your project directory. The default main roots are
`src/main/kalm` and `src/main/java`; tests use their corresponding test roots.

## Interactive shell and snippet scripts

```bash
kalm shell
kalm shell -e 'sayLine("Hello"); 1 + 2'
kalm shell -f experiment.kalms
```

The shell keeps variables, objects, imports, functions, and types across submissions
without replaying earlier code. Expressions display reusable results such as `res1`.
`fix` forbids assignment; redeclaring a name replaces its definition. Changes that
break existing definitions are rejected before execution. Referenced names must
already resolve. The CLI includes its runtime and standard library; no build tool
or additional installation is needed beyond the existing JDK 25+ requirement.

Method bodies can be replaced while objects remain live. Changes to a type's
fields or member signatures are rejected while reference bindings exist, because
JShell cannot preserve those objects across a JVM layout change. Use a new type
name or reset the session for such changes.

Snippet scripts contain imports, declarations, expressions, and statements directly.
They need no `space` header or `main`; defining `main` does not run it. Package headers,
tests, and hooks are rejected. Choose one `-e` input or one `-f` UTF-8 file.
Imports use `use` for JDK classes and bundled Kalm libraries. External libraries
and `--classpath` are not supported. Use `.kalms` for shell scripts; `.kalm`
files run with a warning because they denote application source code. The shell
does not discover project sources, read build metadata, or download dependencies.

Complete terminal lines run immediately; unfinished expressions and brace blocks
continue. End multiline colon blocks with a blank line. Use `/help`, `/exit`, `/reset`,
`/vars`, `/list`, and `/cancel`. Reset keeps the bundled libraries available. Advanced terminal editing,
completion, and persistent history are deferred; evaluated code receives EOF on stdin.

Piped input runs without prompts. Batch input stops at the first failure; terminal
errors return to the prompt. Runtime failures retain effects already performed.
The diagnostic options and exit statuses below also apply to the shell.

## Project commands

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
