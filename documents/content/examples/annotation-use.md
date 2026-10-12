---
{
  "title": "Annotation use",
  "order": 55,
  "group": "Java & modules"
}
---

Apply Java annotations to declarations and parameters.

::::compare
```kalm OldApi.kalm
@Deprecated
pub class OldApi:
    fun echo(@Deprecated value: Text) -> Text = value
```
```kalms OldApi.kalms
@Deprecated
class OldApi:
    fun echo(@Deprecated value: Text) -> Text = value
```
```java OldApi.java
@Deprecated
public final class OldApi {
    public final String echo(@Deprecated String value) { return value; }
}
```
::::

[Learn more](/docs/java/).
