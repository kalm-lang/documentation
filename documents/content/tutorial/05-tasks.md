# Tasks, resources, and tests

The report summary starts independent virtual-thread jobs before awaiting either:

{{source:examples/task-report/src/main/kalm/tasks/reporting/Reporting.kalm}}

`await` blocks its virtual thread and is allowed inside `async` functions and task
bodies. Java callers can use the returned `Task<T>` as a `CompletionStage<T>`.
The final display order stays deterministic because the function assembles the
result after both values are available.

The input reader uses `with` to close resources and `try`/`handle` for checked
Java I/O, even though its underlying input is an in-memory string:

{{source:examples/task-report/src/main/kalm/tasks/input/Input.kalm}}

`defer` runs at scope exit. `guard` synchronizes on a non-null object, and an
`await` inside a guard is rejected. `expect`, `require`, and `ensure` stay active
without JVM assertion flags.

The native tests exercise forwarding, guarded late reads, deferred cleanup, and
failure propagation:

{{source:examples/task-report/src/test/kalm/tasks/ReportTests.kalm}}

```sh
cd examples/task-report
../../bin/kalm test
```

Expected result: `Kalm tests: 8 passed, 0 failed`. XML/HTML reports appear under
`target`. A test failure also fails the Maven or Gradle host build.
