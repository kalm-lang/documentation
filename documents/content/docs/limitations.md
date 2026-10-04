---
{
  "title": "Implementation limitations",
  "order": 51
}
---

## Language boundaries

`choice` declarations are non-generic enums without payloads. Default and named
arguments, function/constructor overload declarations, and static declarations
inside Kalm classes are deferred.

`late var` uses runtime initialization guards. It does not guarantee initialization
across method calls. Prefer constructor initialization when an invariant requires it.

## Java boundary

Unannotated Java references remain platform values. Some type diagnostics come
from final javac analysis and consequently use Java type names.

Annotation processors generating types needed by Kalm must run before Kalm
analysis. Processors rewriting Java syntax trees are outside the 1.x contract.

For singleton property access, bind `Settings.INSTANCE` to a typed local first.
Java-style getters/setters can also be called directly.

## Tools and runtime

A full JDK 25 or newer is required. Runtime exception remapping through
`kalm run` requires retained generated Java, source maps, and original sources.
Plain `java` uses ordinary JVM stack traces unless the remapping API is invoked.

Rebuild after changing project roots or dependencies so editor metadata stays
current. Heavily malformed declarations can reduce completion quality.

See [Java interoperability](/docs/java/) and [Editors](/docs/editors/) for setup.
