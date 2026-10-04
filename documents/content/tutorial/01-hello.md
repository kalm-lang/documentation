# Your first greeting

Kalm is a JVM language. Begin with a full JDK 25+ and the development compiler.
From the repository root:

```sh
mvn install
bin/kalm init hello
cd hello
../bin/kalm run
../bin/kalm test
```

The initializer creates this complete program:

{{source:examples/hello/src/main/kalm/example/App.kalm}}

`space` names the package. `pub fun` exposes a function. A colon introduces an
indented body; a logical newline ends each simple statement. `main` is the entry
point. `sayLine` comes from the bundled standard-library prelude.

Expected output:

```text
Hello, Guest!
```

The generated tests check both the fallback and a supplied name:

{{source:examples/hello/src/test/kalm/example/GreetingTests.kalm}}

Run `../bin/kalm format src/main/kalm` to check formatting. Add `--fix` only when
you want it to write changes. `../bin/kalm check` performs full type analysis.

For Maven or Gradle, initialize a separate project with `--build-tool maven`
or `--build-tool gradle`. Its README explains local artifact installation.
