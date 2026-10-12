---
{
  "title": "Comments",
  "order": 2,
  "group": "Basics"
}
---

Use # for a line, ## for a block, and ### for documentation.

::::compare
```kalm Example.kalm
### Return a friendly greeting.
pub fun greeting() -> Text:
    ## This comment
       spans two lines. ##
    # A line comment.
    return "Hello"
```
```kalms Example.kalms
### Return a friendly greeting.
fun greeting() -> Text:
    ## This comment
       spans two lines. ##
    # A line comment.
    return "Hello"
```
```java Example.java
public final class Example {
    /** Return a friendly greeting. */
    public static String greeting() {
        /* This comment
           spans two lines. */
        // A line comment.
        return "Hello";
    }
}
```
::::

[Learn more](/docs/language/layout/).
