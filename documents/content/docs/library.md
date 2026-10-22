---
{
  "title": "Standard library",
  "order": 22
}
---

Kalm 1.2.0 supplies everyday helpers through the default prelude in both `.kalm` and `.kalms`.
The library uses ordinary Java-callable functions, SAM callbacks, records, and mutable Java collections.

| Area | Operations |
|---|---|
| Console | `text`, `say`, `sayLine`, `readLine`, `exit` |
| Parsing | `parseByte`, `parseShort`, `parseInt`, `parseLong`, `parseFloat`, `parseDouble`, `parseBool` |
| Collections | `listOf`, `setOf`, `mapOf`, `arrayOf`, primitive array factories, `len` |
| Traversal | `map`, `filter`, `fold`, `firstOrNull`, `any`, `all`, `join` |
| Numbers | `range`, `clamp`, `abs`, `min`, `max`, `sqrt`, `pow`, `round` |
| Text extensions | `upper`, `lower`, `trimmed`, `isBlank`, `splitOn`, `replaceText` |

Parsers strip surrounding whitespace and return nullable wrappers for invalid text or overflow.
Floating parsing accepts finite decimal values. Text splitting uses a literal nonempty separator and
preserves empty pieces. Case conversion uses `Locale.ROOT`; length counts UTF-16 code units.

Returned collection helpers produce fresh mutable snapshots while retaining element references.
Callbacks run in encounter order; predicates stop when their answer is known. Three-argument
`range(start, end, step)` is lazy, excludes the end, supports descending ranges, and rejects a zero step.
Arrays can enter Iterable helpers through the explicit `Collections.asList` adapters.

## Explicit facades

Import these types from `kalm.stdlib` and call their static methods:

| Facade | Operations and behavior |
|---|---|
| `FileOps` | Paths, existence, text/line reads, writes, and appends; UTF-8 defaults; checked I/O failures retain their causes in `UncheckedIOException`. |
| `Time` | UTC instants/dates, duration factories, and `timed`; elapsed duration uses a monotonic clock. |
| `Tasks` | Ordered aggregation, timeouts, and `mapConcurrent` with a positive callback limit. |
| `Collections` | `windowed`, `partition`, and reference/primitive array adapters. |

`FileOps` closes owned resources, creates no parent directories, and promises no atomic write or rollback.
Task failures and cancellation can leave completed effects; cancellation requests interruption but cannot
stop code that ignores it. Timeouts require positive durations. Concurrent mapping snapshots its input
before scheduling and retains result order independently of callback completion order.

`Partition<T>` contains `matching` and `remaining` lists. `Timed<T>` contains a value and elapsed
`java.time.Duration`. Their component bindings are immutable; contained objects retain their own mutability.
EOF makes `readLine` return null. Evaluated shell code receives EOF rather than the shell's command input.
