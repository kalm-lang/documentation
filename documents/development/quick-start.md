# Quick start

Use a full JDK 25+ and Maven 3.9+. Build and install the compiler, runtime, and Maven plugin, then run the independent demo:

```sh
mvn clean install
mvn -f demo-mixed-project/pom.xml clean verify
mvn -f demo-mixed-project/pom.xml exec:java
```

For a Maven project, add the `dev.kalm:kalm-runtime:0.1.0-SNAPSHOT` dependency and configure `dev.kalm:kalm-maven-plugin:0.1.0-SNAPSHOT` with the `compile`, `testCompile`, and `test` goals. The defaults are `src/main/kalm`, `src/test/kalm`, `target/generated-sources/kalm`, and `target/generated-test-sources/kalm`. Test compilation indexes main Kalm declarations, so tests can call main functions and augmentations without regenerating main classes. Set `maven.compiler.release` to `25`. See the [standalone demo POM](../demo-mixed-project/pom.xml) for a working example including Java dependencies. The `test` goal writes `target/surefire-reports/TEST-kalm.xml`.

The local CLI launcher, `bin/kalm`, uses the built compiler/runtime JARs. From a project directory:

```sh
/path/to/repository/bin/kalm check
/path/to/repository/bin/kalm compile
/path/to/repository/bin/kalm run -- program arguments
/path/to/repository/bin/kalm test
```

Use `--source-root DIR` for additional source directories, `--classpath PATHS` or `--module-path PATHS` for dependencies, `--generated-sources DIR`, `--output DIR`, `--encoding NAME` (UTF-8 by default), `--diagnostic-format human|json`, and `--release 25`. `check` leaves no class files. `run` accepts `--main package.AppKalm` if multiple entry points exist. `test` uses `src/test/kalm` by default and runs test blocks with per-file `before`/`after` hooks. The CLI's `build --jar target/app.jar` produces a thin executable JAR: provide dependencies and `kalm-runtime` on the Java runtime classpath as needed.

Public top-level types must reside in same-named `.kalm` files. Other top-level definitions use the `<File>Kalm` facade. Read [limitations](known-limitations.md) for current non-conformance and interop restrictions.
