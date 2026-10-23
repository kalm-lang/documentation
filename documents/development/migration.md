# Migrating to Kalm 1.2.0

The [final changes companion](https://github.com/kalm-lang/specification/blob/feat/kalm-1.2.0/changes/v1.2.0.md)
is the complete comparison against final 1.1.0. Recompile dependent Java and Kalm code after changing exposed signatures.

- Use lowercase primitive annotations to preserve primitive JVM descriptors. Capitalized wrappers keep reference storage; nullable and generic wrappers remain capitalized. Numeric expressions use the specified promotion rules.
- Replace `impl`, `choose`, and `when` constructs with `implements`, `match`, and `case`. The old words remain ordinary identifiers.
- Add `fix` where class or method finality must remain guaranteed. Mark direct sealed children explicitly.
- Use `Any?` wherever null is allowed, and handle absent map keys.
- Replace call-shaped word negation/await with `!(condition)` or `await pending`. Calls such as `not(value)` resolve a named callable.
- Use `yield` for value-match block arms. Nullable value functions still need explicit returns on every completing path. A concrete closed base remains an inhabitant; mark it `base` when only permitted children should inhabit the hierarchy.
- Declare defaults only on eligible non-overriding concrete functions or constructors. Omitted arguments evaluate defaults in order; explicit null remains a supplied argument.
- Use `void` or compatible `Unit` for no-result declarations. Neither denotes an ordinary stored value; no-result tasks expose `Task<Unit>`.
- Replace backslash-dollar escapes with `$$` in interpolated text. Keep only the specified character and Unicode escapes.

## Build and editor migration

All Kalm JVM components and both editor packages use `1.2.0`. The standard library brings the runtime transitively.
Install the distribution's Maven artifacts locally until the corresponding registry release is available.
The Gradle plugin ID remains `dev.kalm.language`.

Both editors bundle the shared compiler and server and require a JDK 25+ executable for those processes.
Rebuild host projects after changing dependencies so `kalm-project.properties` records the current roots,
classpath and release. The CLI and server read that metadata.

Mapped diagnostics retain the stable Kalm families and UTF-16 locations. Java reference nullability and escaped
Kalm declaration names survive separate compilation through class-retained metadata. Keep generated Java
and source maps when runtime stack-frame remapping is required.
