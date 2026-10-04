---
{
  "title": "1. Your first program",
  "order": 1,
  "lesson": 1
}
---

Start with [Getting started](/docs/quick-start/) to build Kalm and make the
`kalm` command available in your shell.

## Create a workspace

Create a folder named `text-stats` outside the Kalm checkout. Inside it, create
`src/main/kalm/stats` and `src/test/kalm/stats`. All commands in this path run
from `text-stats`.

Save this as `src/main/kalm/stats/App.kalm`:

```kalm App.kalm
space stats

pub fun main() -> Unit:
    sayLine("Text stats")
```

`space` names the package; `main` is the entry point. `sayLine` is available
without an import. The colon starts an indented body.

## Run it

```bash
kalm run
```

```text
Text stats
```

Try changing the message and run it again. Your project will eventually read a
text file and report its line and word counts.
