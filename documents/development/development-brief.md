# Development and release workflow

## Automated verification

```sh
mvn clean install
mvn -f examples/demo-mixed-project/pom.xml clean verify
./gradlew -p kalm-gradle-plugin test validatePlugins
./gradlew -p examples/demo-mixed-project clean test
./gradlew -p examples/demo-mixed-project test --configuration-cache
gradle -p extensions/intellij-kalm test buildPlugin verifyPluginStructure
cd extensions/vscode-kalm
npm ci
npm run check
npm test
npm run package
```

The Maven reactor includes positive mixed-source and negative type-error plugin integration fixtures. Compiler tests cover language semantics, same-source and compiled Java signatures, module paths, nullable flow, exact diagnostic ranges, source ownership, warnings and formatting. Gradle TestKit checks both call directions, Kalm test reports, unchanged-task skipping and deletion. LSP tests exercise framed stdio JSON-RPC, unsaved snapshots, closed files, scope-aware rename, Java member completion and Java caller edits. Editor highlighting uses shared fixtures and the actual native/TextMate lexers.

Keep generated artifacts under `target`, `build`, or ignored extension resource directories. Never commit dependency caches, built JARs/VSIX files, SDKs or generated application Java.

## Package a distribution

After building and verifying all components:

```sh
./gradlew -p kalm-gradle-plugin publish
python3 scripts/verify_clean_builds.py --offline
python3 scripts/verify_editor_packages.py
python3 scripts/package_distribution.py
python3 scripts/verify_distribution.py --build-example
```

`publish` above writes the Gradle plugin and marker to the local `kalm-gradle-plugin/build/repository`, without uploading externally. The distribution script requires current compiler/runtime/plugin/server/editor artifacts, writes deterministic ZIP and TAR.GZ archives under `dist`, and records SHA-256 checksums. Snapshot plugin repository entries use fixed version names and packaged editor ZIP metadata is normalized. It includes an installer for the local Maven artifacts and a sample that resolves the packaged Gradle plugin. [Distribution installation](distribution.md) describes the binary archive.

JAR archives have deterministic timestamps; Gradle archives use stable file order. Packaging the same built inputs twice produces identical distribution checksums. The Gradle wrapper pins an official SHA-256 distribution checksum.

## Release

Coordinates use `dev.kalm`, with Gradle plugin ID `dev.kalm.language`, VS Code language ID `kalm`, and IntelliJ plugin ID `dev.kalm.idea`. Update all component versions together and record breaking development changes in [migration notes](migration.md).

A public release needs passing automated gates, an interactive editor smoke check, and the owner's configured Maven/plugin/editor publisher accounts. Distribution staging and CI artifact upload are available locally; public registry credentials are intentionally supplied by the release environment. Do not label the draft implementation a 1.0 release while a required conformance gate remains open.
