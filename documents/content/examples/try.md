---
{
  "title": "try / handle / finally",
  "order": 30,
  "group": "Flow"
}
---

Handle checked Java exceptions and run final cleanup.

```kalm Example.kalm
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

[Learn more](/docs/language/resources/).
