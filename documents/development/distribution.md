# Kalm distribution

This archive includes the CLI, language server, runtime, Maven and Gradle integrations, editor packages, documentation and a mixed Java/Kalm example. Use a **full JDK 25+**.

## Install

Extract the ZIP or TAR.GZ and add its `bin` directory to PATH. Unix launchers are executable; Windows launchers use `.bat`. `KALM_JAVA_COMMAND` can select a full JDK's Java executable.

```sh
bin/kalm --version
bin/kalm run /path/to/project/src/main/kalm --java-source-root /path/to/project/src/main/java
```

Start `kalm shell`, evaluate inline code with `kalm shell -e '1 + 2'`, or run a
`.kalms` script with `kalm shell -f experiment.kalms`. These modes work outside
projects, without Maven or Gradle. Only JDK and bundled Kalm libraries are available.
The editor packages recognize `.kalms` and provide **Run Kalm Script**.

Install the included Maven artifacts into your local repository:

```sh
python3 integrations/install_maven_artifacts.py
```

On Windows, use `python integrations/install_maven_artifacts.py --maven mvn.cmd`. `--repository /path/to/repository` selects an isolated repository. Third-party Maven dependencies are resolved normally.

## Example and editors

```sh
cd examples/demo-mixed-project
mvn clean verify
mvn exec:java
./gradlew test
./gradlew runKalm
```

The example's Gradle settings resolve the supplied plugin from `integrations/gradle`; the compiler/runtime resolve from Maven Local after the installation step.

Install the VSIX under `editors` in VS Code, or the IntelliJ ZIP using **Install Plugin from Disk**. IntelliJ also needs LSP4IJ, as declared in the plugin manifest. Both packages bundle the shared server. Set the editor's Java command to JDK 25 if its normal Java executable is older.

See [language usage](language-guide.md), [CLI documentation](quick-start.md), and [conformance status](conformance.md). The final specification and migration companion are included under `specification/documents` and `specification/changes`. Public registry publication is a separate release step.

## More examples

`examples/hello` contains the README greeting; `examples/task-report` demonstrates
concurrent domain reporting and Java calls in both directions. Each ships Maven
and Gradle builds, native tests, source-only fixtures, and a local wrapper in the
archive. Follow its README after installing the bundled Maven artifacts.
The CLI can run/test either project directly from its own directory.
