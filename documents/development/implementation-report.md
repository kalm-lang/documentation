# Kalm 1.2.0 implementation

The implementation targets the [final specification](https://github.com/kalm-lang/specification/blob/feat/kalm-1.2.0/documents/v1.2.0.md).
All active component repositories use `feat/kalm-1.2.0` and conventional commits.
The [migration guide](migration.md) describes source and Java API changes.

The compiler implements primitive/wrapper separation, contextual words, defaults, parent calls, conditional
and match values, bracket bindings, indexed writes, local functions, completion checks and KalmDoc.
The runtime and standard library supply the corresponding metadata, null boundaries and library APIs.
Build plugins, the language server, both editors, highlighting, examples and website consume matching 1.2.0 artifacts.

The specification is a standalone final contract. Migration guidance is a separate companion, and executable
acceptance scenarios live with the tools and component tests. Historical editions remain available with their
matching highlighting grammar.

## Verification

Use the [development workflow](development-brief.md) to build producers before consumers.
[Conformance](conformance.md) lists semantic suites, and the [release evidence](https://github.com/kalm-lang/tools/blob/feat/kalm-1.2.0/docs/release-1.2.0.md)
records completed gates, source revisions, generated archives and platform limits.

JDK 25+ is required for compilation and the shared server; Node 22.12+ builds the documentation and website.
Generated Java, caches, SDKs, PDFs and binary release archives stay in ignored build directories.
Public registry publication, marketplace publication, tags and live deployment are separate release actions.
