# Quick start

## Create a project

```sh
bin/kalm init my-app
cd my-app
# Use the installed kalm command, or the absolute path to the repository's bin/kalm.
kalm run
kalm test
```

`init` defaults to a CLI project with the README greeting and two native tests.
Use `--build-tool maven` or `--build-tool gradle` for a standalone build;
`--name notes --package notes.app` customizes identity and source paths.
`--template empty` creates roots/configuration without application code.
Only new or empty destinations are accepted. No dependencies are installed and
no Git repository is created. Generated READMEs list the required setup and commands.

## Requirements

Compilation and the language server require a full JDK 25+; releases below 25 are rejected. The runtime is an ordinary Java dependency, `dev.kalm:kalm-stdlib:0.1.0-SNAPSHOT`. Run Maven on JDK 25+; Gradle uses a selected Java toolchain for Kalm compilation independently of the daemon JVM.

Build from the repository root:

```sh
mvn clean install
bin/kalm --version
```

Until public artifacts are published, local Maven installation is required by the examples. Compiler, runtime, build plugins, server and IntelliJ use `0.1.0-SNAPSHOT`; the VSIX uses Marketplace-compatible version `0.1.0` and bundles the matching snapshot server.

## CLI

### Kalm shell

```sh
kalm shell
kalm shell -e 'sayLine("Hello"); 1 + 2'
kalm shell -f experiment.kalms
```

The shell needs only the installed Kalm CLI and the existing full JDK 25+.
Variables, objects, imports, functions, and types persist between submissions;
earlier statements and initializers are never replayed. Bare expressions display
their value and receive reusable names such as `res1`. `fix` prohibits assignment,
but its declaration can be replaced. Replacements that break existing definitions
are rejected before execution, preserving the working session.

Method bodies can be replaced while objects remain live. Changes to a type's
fields or member signatures are rejected while reference bindings exist, because
JShell cannot preserve those objects across a JVM layout change. Use a new type
name or reset the session for such changes.

Scripts contain snippets directly, without a `space` header or an entry point:

```kalm
use java.time.LocalDate
fix today = LocalDate.now()
fun greeting() -> Text:
    return @"Hello on $today"
sayLine(greeting())
1 + 2
```

`-f` accepts one UTF-8 file; `-e` accepts one inline input. They cannot be combined.
Imports use the normal `use` syntax for JDK classes, such as `java.util.List`,
and bundled Kalm libraries. External libraries and `--classpath` are not supported.
The shell includes the Kalm runtime and standard library automatically and does
not read project metadata, discover source files, or download dependencies.
Use `.kalms` for shell scripts. Running a `.kalm` file emits a warning because
that extension is reserved for application source code.
Define referenced names before using them. Defining `main` does not invoke it.
Package headers, tests, and test hooks are rejected.

Complete lines run immediately in the terminal. Unfinished expressions and brace
blocks receive a continuation prompt; finish multiline colon suites with a blank
line. Commands are `/help`, `/exit`, `/reset`, `/vars`, `/list`, and `/cancel`.
Reset clears definitions and values; cancel discards unfinished input. Portable line input is supported; completion and persistent history are
not provided. Evaluated code receives EOF on standard input.

Piped stdin runs without prompts. Inline, file, and piped execution stop at the
first failure; terminal errors leave the shell open. Runtime exceptions can leave
object mutations and other effects already performed. Diagnostic and exit status
conventions below apply to the shell, including `--diagnostic-format json`.

### Project commands

```sh
bin/kalm check src/main/kalm --java-source-root src/main/java
bin/kalm compile src/main/kalm --output target/classes
bin/kalm run src/main/kalm --main example.AppKalm -- argument
bin/kalm test
bin/kalm format src/main/kalm --indent-width 4 --line-length 100
bin/kalm format src/main/kalm --fix --indent-width 4 --line-length 100
bin/kalm build --jar target/application.jar
```

Default roots are `src/main/kalm` and `src/main/java`; `test` uses the corresponding test roots and compiles main sources first. Explicit source roots avoid accidental discovery of unrelated Java files. `--source-root`, `--java-source-root`, and `--main-source-root` can repeat. Paths with spaces must be quoted in the shell.

| Option | Meaning |
|---|---|
| `--classpath` | Dependencies separated by the host path separator (`:` or `;`) |
| `--module-path` | Readable Java modules |
| `--release` | Target Java release, default 25 |
| `--generated-sources` | Retained Java and `.kalm-map` files |
| `--output` | Class output directory |
| `--encoding` | Source encoding, default UTF-8 |
| `--main` | Select a Kalm facade entry point for `run` |
| `--diagnostic-format human\|json` | Diagnostics with stable codes and UTF-16 ranges |
| `--debug` | Include internal exception details alongside the report ID |
| `--reports`, `--html-reports` | Test report directories |

`format` checks files without changing them by default and lists any that need formatting. Add `--fix` to write the formatted result. `--check` is an explicit alias for the read-only mode.

`check` analyzes without generating classes. `compile` emits Java and classes. `build` produces a thin executable JAR; supply runtime and application dependencies beside it or on the classpath. `generate` and `test --no-compile` are build-adapter commands. With `test --no-compile`, an explicit `--classpath` is the complete test runtime classpath. `kalm run` and test failures map retained generated source positions back to Kalm lines.

Exit statuses: 0 success; 1 source, type, interop or test failure; 2 invalid command/configuration; 3 internal compiler failure. Warnings do not fail compilation. `KALM-2101` identifies assignments from unannotated Java references; `KALM-2102` identifies legacy declaration use.

## Maven and Gradle example

```sh
mvn -f examples/demo-mixed-project/pom.xml clean verify
mvn -f examples/demo-mixed-project/pom.xml exec:java
./gradlew -p examples/demo-mixed-project clean test
./gradlew -p examples/demo-mixed-project runKalm
```

Maven writes `target/surefire-reports/TEST-kalm.xml` and `target/reports/kalm/index.html`. Gradle writes `build/test-results/kalm/TEST-kalm.xml` and `build/reports/tests/kalm/index.html`. A failed Kalm test fails the host build.

Builds write `kalm-project.properties` under `target` or `build`. The CLI and language server read its resolved main/test roots, classpath, module path and release. Run the host build after changing dependencies.

For JPMS applications, add `requires kalm.runtime;` to `module-info.java`. The CLI places modular dependencies on the module path; Maven/Gradle retain their standard final Java compilation.
