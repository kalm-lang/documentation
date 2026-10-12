---
{
  "title": "exit",
  "order": 68,
  "group": "Standard library"
}
---

Choose a process exit code explicitly.

::::compare {"scriptUnavailable":"The current shell reports session termination when exit is called. Use project mode to choose the application exit code."}
```kalm Example.kalm
pub fun main() -> Unit:
    sayLine("Nothing to do")
    exit(0)
```
```java Example.java
public final class Example {
    public static void main(String[] args) {
        System.out.println("Nothing to do");
        System.exit(0);
    }
}
```
::::

[Learn more](/docs/cli/).
