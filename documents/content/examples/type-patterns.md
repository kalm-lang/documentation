---
{
  "title": "Type patterns",
  "order": 73,
  "group": "Flow"
}
---

Match every permitted child of an abstract closed hierarchy.

::::compare
```kalm Result.kalm {"style":"indentation"}
pub base closed class Result:
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}

pub fun label(result: Result) -> Text = match result:
    case Result.Ready => "ready";
    case Result.Missing => "missing";
;
```
```kalm Result.kalm {"style":"braces"}
pub base closed class Result {
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}
}

pub fun label(result: Result) -> Text = match result {
    case Result.Ready => "ready";
    case Result.Missing => "missing";
}
;
```
```kalms Result.kalms {"style":"indentation"}
base closed class Result:
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}

fun label(result: Result) -> Text = match result:
    case Result.Ready => "ready";
    case Result.Missing => "missing";
;
```
```kalms Result.kalms {"style":"braces"}
base closed class Result {
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}
}

fun label(result: Result) -> Text = match result {
    case Result.Ready => "ready";
    case Result.Missing => "missing";
}
;
```
```java Result.java
public abstract sealed class Result permits Result.Ready, Result.Missing {

    public static final class Ready extends Result {}

    public static final class Missing extends Result {}

    public static String label(Result result) {
        return switch (result) {
            case Ready ready -> "ready";
            case Missing missing -> "missing";
        };
    }
}
```
::::

[Learn more](/docs/language/types/).
