# Model the work

The advanced application reads tasks from a TSV file. A record holds each task,
and a choice defines the finite statuses.

{{source:examples/task-report/src/main/kalm/tasks/domain/WorkItem.kalm}}

{{source:examples/task-report/src/main/kalm/tasks/domain/Status.kalm}}

A `data` declaration becomes a Java record with component accessors and value
equality. `generate Display` supplies its display method. A `choice` becomes an
ordinary non-generic Java enum; variants have no payload in this draft.

Generic data records are supported:

{{source:examples/task-report/src/main/kalm/tasks/domain/Box.kalm}}

`choose` checks finite choice coverage. The reporting module maps all three
statuses to their display text; omitting one arm is a compile error unless a
wildcard covers it. Sealed hierarchies provide a separate type-pattern option:

{{source:examples/task-report/src/main/kalm/tasks/domain/ReportResult.kalm}}

Run the project tests from the repository root:

```sh
mvn -f examples/task-report/pom.xml verify
```

Inspect `fixtures/tasks.tsv`: each row has an ID, title, status, and estimate.
The reader validates unique positive IDs and nonnegative estimates.
