---
{
  "title": "Gradle",
  "order": 31
}
---

Plugin ID: `dev.kalm.language`. The repository pins Gradle 9.6.1 with a checksummed wrapper. Install the Maven reactor first; the development compiler is resolved from Maven Local.

```kotlin
plugins { java; id("dev.kalm.language") }
repositories { mavenLocal(); mavenCentral() }
dependencies { implementation("dev.kalm:kalm-stdlib:0.1.0-SNAPSHOT") }
java { toolchain.languageVersion.set(JavaLanguageVersion.of(25)) }

kalm {
    mainSourceDirectory.set(layout.projectDirectory.dir("src/main/kalm"))
    testSourceDirectory.set(layout.projectDirectory.dir("src/test/kalm"))
    release.set(25)
    encoding.set("UTF-8")
    includes.set(listOf("**/*.kalm"))
    excludes.set(listOf("**/scratch/**"))
    compilerArguments.set(listOf("-Xlint:all"))
}
```

The plugin inherits the Java toolchain language version, vendor and implementation and defaults it to 25 when unspecified. Kalm runs in a separate compiler process on that JDK; the plugin itself uses Java 17 bytecode. Java compile release follows `kalm.release` unless explicitly configured in the host build. Releases below 25 fail.

## Tasks

| Task | Responsibility |
|---|---|
| `compileKalm` | Main joint signature analysis and Java generation |
| `compileJava` | Normal Gradle compilation of handwritten and generated main Java |
| `compileTestKalm` | Test generation against compiled main classes |
| `compileTestJava` | Normal compilation of handwritten and generated test Java |
| `testKalm` | Kalm tests, XML and HTML reports; prerequisite of `test` |
| `writeKalmProject` | Resolved workspace roots/classpath for the language server |

Generation tasks declare source files, handwritten Java signatures, classpaths, compiler options and the launcher as inputs. Outputs live under `build/generated/sources/kalm/main` and `test`. Unchanged inputs skip generation; deleted sources remove stale generated files. Gradle's Java compiler maintains class outputs.

Reports: `build/test-results/kalm/TEST-kalm.xml` and `build/reports/tests/kalm/index.html`. Kalm tests run even when there are no JUnit tests. Failed checks fail `test`/`check`.
