---
{
  "title": "Type patterns",
  "order": 73,
  "group": "Flow"
}
---

Match every permitted child of a closed hierarchy.

::::compare
```kalm Result.kalm
pub closed class Result:
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}

pub fun label(result: Result) -> Text = choose result {
    when Result.Ready => "ready";
    when Result.Missing => "missing";
};
```
```kalms Result.kalms
closed class Result:
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}

fun label(result: Result) -> Text = choose result {
    when Result.Ready => "ready";
    when Result.Missing => "missing";
};
```
```java Result.java
public sealed class Result permits Result.Ready, Result.Missing {
    public static final class Ready extends Result {}
    public static final class Missing extends Result {}
    public static String label(Result result) {
        return switch (result) {
            case Ready ready -> "ready";
            case Missing missing -> "missing";
            default -> throw new IllegalStateException("Unrecognized result");
        };
    }
}
```
::::

[Learn more](/docs/language/types/).
