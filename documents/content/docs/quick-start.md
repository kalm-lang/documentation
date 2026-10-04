---
{
  "title": "Getting started",
  "order": 0
}
---

## Set up Kalm

Use a full JDK 25 or newer and Maven. Kalm is currently a development snapshot;
public package installation is not available yet.

Clone Kalm using Git, then build it and add its launcher to your shell's path:

```bash
git clone https://github.com/TD99/kalm.git
cd kalm
mvn install
export PATH="$PWD/bin:$PATH"
kalm --version
```

Keep that shell open for the commands below. On Windows, add the repository's
`bin` directory to PATH and use `kalm.bat`.

## Write your first program

Create a separate project directory, then create `src/main/kalm/App.kalm`:

```kalm App.kalm
pub fun main() -> Unit:
    sayLine("Hello, Kalm!")
```

From your project directory:

```bash
kalm run
```

```text
Hello, Kalm!
```

## Keep going

Follow [Learn Kalm](/learn/) to build a small text-statistics CLI.
Browse the [language guide](/docs/language/) for explanations or
[Examples](/examples/) for a small piece of syntax.

For an existing Java project, use the [Maven](/docs/maven/) or
[Gradle](/docs/gradle/) integration. The [CLI guide](/docs/cli/)
covers checking, formatting, building, and testing.
