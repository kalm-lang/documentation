# Values and absence

`fix` declares an immutable binding. `var` declares a writable one. Parameters
are immutable, and public signatures have explicit types. `Text` maps to Java
`String`; the question mark in `Text?` makes absence visible.

The mixed project's nullable helpers show stable refinement, safe indexing, and
coalescing assignment:

{{source:examples/demo-mixed-project/src/main/kalm/demo/NullableNames.kalm}}

`??` evaluates its fallback only when the left value is null. `??=` assigns a
fallback only when a writable nullable binding is null, and yields the result.
Safe indexing evaluates a nullable receiver once and skips the index on null.
An empty list still has Java's bounds behavior; safe access is not a bounds check.

A null check refines a stable `fix` binding. A mutable binding retains its declared
nullable type after assignment, so use a stable local or coalesce explicitly.

Run the checked project from the repository root:

```sh
mvn -f examples/demo-mixed-project/pom.xml verify
```

Try replacing the nullable `Text?` parameter with `Text` while retaining a null
call: `kalm check` will reject the mismatch. Restore it before continuing.
