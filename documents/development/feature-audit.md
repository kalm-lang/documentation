# Usability audit

The current target is the 1.1 draft, shipped as `0.1.0-SNAPSHOT`. This audit
compares the draft, implementation, tests, and runnable projects. It is not a
claim that every valid program has been verified.

| Area | Evidence and current behavior | Action in this round |
| --- | --- | --- |
| Layout | Parser/formatter tests cover braces, colon suites, and sibling normalization | Align the formatter contract with shipped behavior |
| Choices | Java enum backend rejects generic choices; grammar allowed them | Define non-generic, payload-free choices consistently |
| Late fields | Runtime tests cover guarded Kalm/Java reads and null-rejecting setters | State runtime guarantees explicitly |
| Ordinary fields | Initialization analysis tracks names without local scopes and only some statements | Track shadowing and normally completing control-flow paths |
| New projects | CLI compiles/runs/tests existing roots but has no initializer | Add configurable, offline scaffolding |
| Diagnostics | Shared compiler diagnostics carry codes and UTF-16 spans | Add actionable guidance without changing the wire format |
| Examples | One mixed Maven/Gradle application is packaged | Add a README starter and a coherent advanced CLI |
| Learning | Markdown guides exist, but no sequential tutorial or website | Reuse canonical docs and checked sources in a Lit site |

## Existing strengths

Java interoperability, explicit nullability, stable-value refinement, records,
contracts, forwarding, patterns, resources, virtual-thread tasks, native tests,
source mapping, both build adapters, and shared editor services already have
automated coverage. Keep these capabilities and the common compiler core.

## Deliberate boundaries

Constructor/function overload declarations, named/default arguments, payload
variants, operator overloading, capturing inner classes, a standalone debugger,
and a package manager remain deferred. Java overloads and libraries are usable
through interop. Named factories are the current alternative to constructors
with several signatures.

## Follow-up opportunities

The standard library is deliberately small: richer text and collection helpers
could reduce Java boilerplate in a later round. Some final type errors still use
Java names because javac resolves generated bodies. Large unrelated workspaces
need separate editor roots when fully qualified declarations conflict.

Interactive IDE acceptance, Windows execution, and publisher credentials remain
release-owner checks. See [conformance](conformance.md) and
[implementation boundaries](known-limitations.md).

## Completed language changes

Constructor initialization now tracks lexical shadowing and normal/return exits,
including resources, guards, exhaustive choices, and cleanup. Ten regression
cases cover these paths. Unsupported declaration and initialization diagnostics
include remedies while keeping their existing codes and JSON locations.
