---
{
  "title": "choose / when",
  "order": 29,
  "group": "Flow"
}
---

Return a result from a matching branch; _ catches remaining values.

```kalm Example.kalm
pub fun label(value: Int) -> Text = choose value {
    when 0 => "zero";
    when 1 => "one";
    when _ => "many";
};
```

[Learn more](/docs/language/functions/).
