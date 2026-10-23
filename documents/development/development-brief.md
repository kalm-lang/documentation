# Development and release workflow

Components are separate repositories. Use the optional sibling workspace to build them in dependency order:

```sh
python3 tools/scripts/workspace.py --maven /path/to/mvn
python3 tools/scripts/workspace.py --maven /path/to/mvn --full
```

The core gate builds the runtime, standard library, compiler, Maven plugin, server and shared fixtures.
The full gate adds Gradle integration, examples, editor packages, npm consumers and the distribution.
Each component also documents its standalone build. Run Maven on JDK 25+; use the pinned Gradle wrappers.
The website requires Node 22.12+.

Keep generated artifacts under ignored `target`, `build`, `generated`, `dist` or extension resource directories.
Never commit dependency caches, SDKs, built JARs/VSIX files or generated application Java.

## Package and verify

After the producer and consumer builds pass, run from the sibling workspace root:

```sh
python3 tools/scripts/verify_clean_builds.py --maven /path/to/mvn --offline
python3 tools/scripts/verify_editor_packages.py
python3 tools/scripts/package_distribution.py
python3 tools/scripts/verify_distribution.py --build-example --maven /path/to/mvn
```

The Gradle plugin's `publishAllPublicationsToDistributionRepository` task stages its plugin and marker under
`plugin-gradle/build/repository`. It does not upload externally. Distribution packaging requires current
compiler/runtime/plugin/server/editor artifacts and writes ZIP, TAR.GZ and SHA-256 checksums under `tools/dist`.
It includes the Maven artifact installer and examples that resolve the packaged Gradle plugin.
See [distribution installation](distribution.md).

JAR archives use deterministic timestamps; Gradle archives use stable file order. The clean-build gate compares
JVM artifact hashes across two source copies. Distribution verification checks identical ZIP/TAR contents,
checksums, executable launchers and packaged behavior. Wrappers pin official distribution checksums.

## Release

All Kalm components use `1.2.0`, Maven coordinates use `dev.kalm`, the Gradle plugin ID is `dev.kalm.language`,
the VS Code language ID is `kalm`, and the IntelliJ plugin ID is `dev.kalm.idea`.
Record incompatible source and Java API changes in the [migration guide](migration.md).

Public publication requires passing automated gates, interactive IDE checks and the owner's publisher accounts.
Stable artifact publication is explicit in producer workflows. Branch pushes do not publish stable artifacts.
Windows execution remains a separate platform gate; Linux results do not substitute for it.
