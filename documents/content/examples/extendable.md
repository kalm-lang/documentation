---
{
  "title": "extendable / fix",
  "order": 37,
  "group": "Types"
}
---

Classes and methods are final by default; open them explicitly for extension.

::::compare
```kalm Example.kalm {"style":"indentation"}
extendable class Greeter:
    extendable fun greet() -> Text = "Hello"

fix class Friendly inherits Greeter:
    override fun greet() -> Text = "Welcome"
```
```kalm Example.kalm {"style":"braces"}
extendable class Greeter {
    extendable fun greet() -> Text = "Hello"
}

fix class Friendly inherits Greeter {
    override fun greet() -> Text = "Welcome"
}
```
```kalms Example.kalms {"style":"indentation"}
extendable class Greeter:
    extendable fun greet() -> Text = "Hello"

fix class Friendly inherits Greeter:
    override fun greet() -> Text = "Welcome"
```
```kalms Example.kalms {"style":"braces"}
extendable class Greeter {
    extendable fun greet() -> Text = "Hello"
}

fix class Friendly inherits Greeter {
    override fun greet() -> Text = "Welcome"
}
```
```java Example.java
class Greeter {
    public String greet() {
        return "Hello";
    }
}

final class Friendly extends Greeter {
    @Override
    public final String greet() {
        return "Welcome";
    }
}
```
::::

[Learn more](/docs/language/types/).
