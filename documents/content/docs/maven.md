---
{
  "title": "Maven",
  "order": 30
}
---

Run Maven on a full JDK 25+. Configure [package authentication](https://github.com/kalm-lang/tools/blob/main/docs/bootstrap.md) before resolving the published dependencies. `kalm init --build-tool maven` includes the registry settings.

```xml
<properties>
  <maven.compiler.release>25</maven.compiler.release>
  <kalm.version>0.1.0-SNAPSHOT</kalm.version>
</properties>
<dependencies>
  <dependency>
    <groupId>dev.kalm</groupId><artifactId>kalm-stdlib</artifactId><version>${kalm.version}</version>
  </dependency>
</dependencies>
<build><plugins>
  <plugin>
    <groupId>dev.kalm</groupId><artifactId>kalm-maven-plugin</artifactId><version>${kalm.version}</version>
    <executions><execution><goals>
      <goal>compile</goal><goal>testCompile</goal><goal>test</goal>
    </goals></execution></executions>
  </plugin>
</plugins></build>
```

`compile` runs at `generate-sources`. `testCompile` runs at `process-test-sources`, after main classes exist. Each goal analyzes handwritten Java against Kalm signatures, generates real Java, and registers the generated root. Maven's normal Java compiler compiles both languages together. `test` runs native Kalm tests in Maven's test phase and fails on test failures.

When a Maven JDK toolchain has been selected, generation and Kalm tests run in that JDK. Its full JDK must be 25+ and support the requested release. Ordinary project dependency resolution and Java compiler settings remain under Maven's control.

## Configuration

| Parameter | Default / behavior |
|---|---|
| `sourceDirectory` | `src/main/kalm` for compile, `src/test/kalm` for testCompile |
| `sourceRoots`, `testSourceRoots` | Optional lists of main/test Kalm roots |
| `mainSourceDirectory`, `mainSourceRoots` | Main declarations indexed during test compilation |
| `generatedSourcesDirectory` | `target/generated-sources/kalm` / `target/generated-test-sources/kalm` |
| `release` | `maven.compiler.release`, otherwise 25 |
| `encoding` | `project.build.sourceEncoding`, otherwise UTF-8 |
| `includes`, `excludes` | Source glob patterns relative to each root; default `**/*.kalm` |
| `compilerArguments` | Additional javac analysis arguments, e.g. `-Xlint:all` |
| `modulepath` | Additional module directories/JARs |
| `reportsDirectory` | `target/surefire-reports` |

Generated files are rewritten only when content changes; deleted inputs remove owned generated sources. The host Java compiler owns class-file incrementality. Maven writes editor metadata to `target/kalm-project.properties`. XML reports are Surefire-compatible; HTML is under `target/reports/kalm/index.html`.

For named applications, add `requires kalm.runtime;` to `module-info.java`.
