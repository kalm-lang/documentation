# Implementation boundaries

The language, compiler API, build plugins and editor packages are usable development artifacts. [Conformance status](conformance.md) identifies tested requirements and the remaining release decisions.

## Draft semantics requiring a decision

Generic `choice` declarations are rejected: the draft requires ordinary Java enums but its grammar also allows type parameters. `late var` fields have guarded Kalm/Java access and non-null setters; the compiler does not prove initialization across arbitrary calls. A sound static guarantee needs an explicit initialization protocol. These two draft questions remain open.

## Operational behavior

- A full JDK 25+ supplies `javac`. Java release targets below 25 are rejected. IntelliJ's host JVM may be older; its bundled server must use a separate JDK 25 Java executable.
- Java resolves overloads, bounds, SAM targets and final generated-body typing through documented javac APIs. Some diagnostics consequently use Java type names. Stable Kalm codes classify mapped type/name errors; handwritten Java build failures retain Java locations.
- Unannotated Java reference types are platform types. Assigning them to a Kalm non-null target warns; the Java API's nullability contract still matters. Kalm-produced references carry class-retained nullability metadata for subsequent compilations.
- Compiler-owned generated sources and class files have ownership manifests. Deleted sources remove their owned outputs; unrelated build output is preserved. Maven's ordinary Java compiler also participates in the host build's incremental behavior.
- Runtime stack-frame remapping is provided by `kalm run`, Kalm test execution and `RuntimeSourceMaps`. It requires retained generated Java/maps and the original sources. An application launched directly by plain `java` uses ordinary JVM stack traces unless it invokes the remapping API.
- Build-generated `kalm-project.properties` records source roots, test roots, Java dependencies and release. Run the project's build after dependency/root changes. Editors consume that metadata and preserve unsaved buffers during reload.
- Completion supports chained/nullable members and bounded recovery of unfinished syntax. Heavily malformed declarations may provide only lexical/package suggestions. Java refactoring beyond indexed Kalm call/type references has narrower coverage. Rename rejects known lexical/declaration collisions; review the editor's workspace edit before accepting it.
- A workspace containing unrelated modules with conflicting fully qualified declarations should open those modules as separate workspaces. The current server combines discovered project inputs for analysis.
- Build toolchains select the project's JDK for generation and tests. The Gradle plugin preserves the configured Java language version, vendor and implementation constraints.
- Distribution scripts stage Maven/Gradle/plugin/editor artifacts. External publisher accounts and credentials are supplied by the release owner. Windows commands are included and have a CI gate; Linux checks do not substitute for a Windows run.

Tasks use virtual threads and blocking `await`, as specified. Named/default arguments, payload variants, operator overloading, inner classes that capture an enclosing instance, a standalone debugger and a Kalm package manager remain outside the draft's 1.x scope.
