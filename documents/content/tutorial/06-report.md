# Put the report together

The entry point connects input, domain values, the reporter, and concurrent work:

{{source:examples/task-report/src/main/kalm/tasks/App.kalm}}

Run from the repository root:

```sh
mvn -f examples/task-report/pom.xml verify exec:java
```

Or use the CLI from the project directory:

```sh
cd examples/task-report
../../bin/kalm run
../../bin/kalm test
../../bin/kalm run -- /path/to/tasks.tsv
```

The bundled fixture produces:

```text
TASK REPORT
1. Design the API [done] 3h
2. Write the parser [doing] 5h
3. Improve errors [todo] 2h
4. Add examples [done] 2h
5. Build the docs [doing] 3h
6. Ship the draft [todo] 1h
6 tasks / 2 done / 16h estimated
Java ↔ Kalm: doing
```

An unreadable file fails explicitly. Malformed rows and unknown statuses do too.
The example does not write to its input file. Records, enums, interfaces, and
Java helpers remain standard JVM types throughout.

Explore the [complete source browser](../../../examples/task-report/README.md),
then use `kalm init notes --name notes --package notes.app` for your own CLI.
Use `--template empty` when you want structure without greeting boilerplate.
