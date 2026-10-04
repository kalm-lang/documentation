---
{
  "title": "Type patterns",
  "order": 73,
  "group": "Flow"
}
---

Match every permitted child of a closed hierarchy.

```kalm Result.kalm
pub closed class Result:
    pub fix class Ready inherits Result {}
    pub fix class Missing inherits Result {}

pub fun label(result: Result) -> Text = choose result {
    when Result.Ready => "ready";
    when Result.Missing => "missing";
};
```

[Learn more](/docs/language/types/).
