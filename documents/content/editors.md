# Editors

Both editor extensions use the same compiler-backed language server for
workspace diagnostics, completion, navigation, references, rename, formatting,
and runnable CodeLens actions.

## VS Code

The extension recognizes `.kalm`, supplies TextMate highlighting and snippets,
and integrates Maven and Gradle build commands. Its bundled server runs on JDK
25+. Install the packaged VSIX for this development version.

See the [VS Code installation and settings](../../extensions/vscode-kalm/README.md).

## IntelliJ IDEA

The Community-compatible plugin provides native highlighting and a shared LSP
client. It imports source roots and dependencies through the project build.
The IDE may run an older host JVM, but its language server needs a separate JDK
25 executable.

See the [IntelliJ installation and settings](../../extensions/intellij-kalm/README.md).

## Keep the project model current

Build after dependency or source-root changes. Generated `kalm-project.properties`
records the roots, classpath, module path, and release that editor analysis needs.
Formatting checks from the CLI are read-only; editor formatting applies the
requested edit, and `kalm format --fix` writes changes explicitly.

Automated editor package checks do not replace interactive installation and
editing acceptance. The [status page](../../docs/conformance.md) records those
remaining release-owner checks.
