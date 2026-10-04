---
{
  "title": "Editors",
  "order": 40
}
---

Both extensions use the same compiler-backed language server for diagnostics,
completion, navigation, references, rename, and formatting.

## VS Code

Build the extension from the cloned Kalm checkout:

```bash
cd extensions/vscode-kalm
npm ci
npm run package
```

Use **Extensions → Install from VSIX** to install the resulting package.
The extension recognizes `.kalm` files and integrates Maven and Gradle commands.
Its bundled language server needs JDK 25 or newer.

## IntelliJ IDEA

Build the plugin from the Kalm checkout:

```bash
./gradlew -p extensions/intellij-kalm buildPlugin
```

Use **Settings → Plugins → Install Plugin from Disk** to install the ZIP under
`build/distributions`. Install LSP4IJ as the plugin dependency. The IDE host JVM
may be older, but the language server must use a JDK 25 Java executable.

## Project model

Run the project build after changing dependencies or source roots. The generated
`kalm-project.properties` tells the server which inputs and Java dependencies to
analyze. Open unrelated modules with conflicting declarations separately.

CLI formatting checks are read-only. Editor formatting and
`kalm format --fix` apply edits.
