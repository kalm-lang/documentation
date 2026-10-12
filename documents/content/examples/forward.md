---
{
  "title": "forward",
  "order": 41,
  "group": "Types"
}
---

Delegate contract methods to an existing implementation.

::::compare
```kalm Example.kalm {"style":"indentation"}
contract Greeter:
    fun greet(name: Text) -> Text

class Delegated impl Greeter:
    fix delegate: Greeter
    init(delegate: Greeter):
        self.delegate = delegate

    forward Greeter to delegate
```
```kalm Example.kalm {"style":"braces"}
contract Greeter {
    fun greet(name: Text) -> Text
}

class Delegated impl Greeter {
    fix delegate: Greeter
    init(delegate: Greeter) {
        self.delegate = delegate
    }
    forward Greeter to delegate
}
```
```kalms Example.kalms {"style":"indentation"}
contract Greeter:
    fun greet(name: Text) -> Text

class Delegated impl Greeter:
    fix delegate: Greeter
    init(delegate: Greeter):
        self.delegate = delegate

    forward Greeter to delegate
```
```kalms Example.kalms {"style":"braces"}
contract Greeter {
    fun greet(name: Text) -> Text
}

class Delegated impl Greeter {
    fix delegate: Greeter
    init(delegate: Greeter) {
        self.delegate = delegate
    }
    forward Greeter to delegate
}
```
```java Example.java
interface Greeter {
    String greet(String name);
}

final class Delegated implements Greeter {
    public final Greeter delegate;

    public Delegated(Greeter delegate) {
        this.delegate = delegate;
    }

    @Override
    public final String greet(String name) {
        return delegate.greet(name);
    }
}
```
::::

[Learn more](/docs/language/types/).
