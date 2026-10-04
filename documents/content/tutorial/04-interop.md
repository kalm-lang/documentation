# Compose and cross the Java boundary

A contract separates the report operation from its implementation:

{{source:examples/task-report/src/main/kalm/tasks/reporting/Reporter.kalm}}

The implementation requires `override`; its lazy heading is initialized once:

{{source:examples/task-report/src/main/kalm/tasks/reporting/TextReporter.kalm}}

Forwarding composes an existing implementation without writing each method again:

{{source:examples/task-report/src/main/kalm/tasks/reporting/DelegatedReporter.kalm}}

Java sees an interface and ordinary classes. This handwritten Java file calls
the Kalm facade; the Kalm application calls it back:

{{source:examples/task-report/src/main/java/tasks/TaskInterop.java}}

Top-level functions in `Reporting.kalm` live in `ReportingKalm`. The build analyzes
both source sets before compiling their bodies together. Java libraries, SAMs,
varargs, and overloads remain available through ordinary imports and calls.

```sh
mvn -f examples/task-report/pom.xml verify exec:java
```

The final output line is `Java ↔ Kalm: doing`. Check the
[Java guide](../java.md) for nullability and checked exceptions at the boundary.
