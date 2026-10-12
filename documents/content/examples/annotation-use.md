---
{
  "title": "Annotation use",
  "order": 55,
  "group": "Java & modules"
}
---

Apply Java annotations to declarations and parameters.

::::compare
```kalm OldApi.kalm {"style":"indentation"}
@Deprecated
pub class OldApi:
    fun echo(@Deprecated value: Text) -> Text = value
```
```kalm OldApi.kalm {"style":"braces"}
@Deprecated
pub class OldApi {
    fun echo(@Deprecated value: Text) -> Text = value
}
```
```kalms OldApi.kalms {"style":"indentation"}
@Deprecated
class OldApi:
    fun echo(@Deprecated value: Text) -> Text = value
```
```kalms OldApi.kalms {"style":"braces"}
@Deprecated
class OldApi {
    fun echo(@Deprecated value: Text) -> Text = value
}
```
```java OldApi.java
@Deprecated
public final class OldApi {
    public final String echo(@Deprecated String value) {
        return value;
    }
}
```
::::

[Learn more](/docs/java/).
