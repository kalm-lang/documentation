---
{
  "title": "try / handle / finally",
  "order": 30,
  "group": "Flow"
}
---

Handle checked Java exceptions and run final cleanup.

::::compare
```kalm Example.kalm {"style":"indentation"}
use java.nio.file.Files
use java.nio.file.Path

pub fun readFile(path: Path) -> Text:
    try:
        return Files.readString(path)
    handle (error: java.io.IOException):
        return "Could not read file"
    finally:
        sayLine("read attempted")
```
```kalm Example.kalm {"style":"braces"}
use java.nio.file.Files
use java.nio.file.Path

pub fun readFile(path: Path) -> Text {
    try {
        return Files.readString(path)
    }
    handle (error: java.io.IOException) {
        return "Could not read file"
    }
    finally {
        sayLine("read attempted")
    }
}
```
```kalms Example.kalms {"style":"indentation"}
use java.nio.file.Files
use java.nio.file.Path

fun readFile(path: Path) -> Text:
    try:
        return Files.readString(path)
    handle (error: java.io.IOException):
        return "Could not read file"
    finally:
        sayLine("read attempted")
```
```kalms Example.kalms {"style":"braces"}
use java.nio.file.Files
use java.nio.file.Path

fun readFile(path: Path) -> Text {
    try {
        return Files.readString(path)
    }
    handle (error: java.io.IOException) {
        return "Could not read file"
    }
    finally {
        sayLine("read attempted")
    }
}
```
```java Example.java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public final class Example {
    public static String readFile(Path path) {
        try {
            return Files.readString(path);
        } catch (IOException error) {
            return "Could not read file";
        } finally {
            System.out.println("read attempted");
        }
    }
}
```
::::

[Learn more](/docs/language/resources/).
