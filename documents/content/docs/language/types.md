---
{
  "title": "Types and contracts",
  "order": 13,
  "navSection": "Language guide"
}
---

::::compare
```kalm Types.kalm {"style":"indentation"}
data Box<T>(value: T) generate Display;

contract Greeter:
    fun greet(name: Text) -> Text;

class DelegatedGreeting impl Greeter:
    private fix delegate: Greeter;
    init(delegate: Greeter):
        self.delegate = delegate;

    forward Greeter to delegate;
```
```kalm Types.kalm {"style":"braces"}
data Box<T>(value: T) generate Display;

contract Greeter {
    fun greet(name: Text) -> Text;
}

class DelegatedGreeting impl Greeter {
    private fix delegate: Greeter;
    init(delegate: Greeter) {
        self.delegate = delegate;
    }
    forward Greeter to delegate;
}
```
```kalms Example.kalms {"style":"indentation"}
data Box<T>(value: T) generate Display;

contract Greeter:
    fun greet(name: Text) -> Text;

class DelegatedGreeting impl Greeter:
    private fix delegate: Greeter;
    init(delegate: Greeter):
        self.delegate = delegate;

    forward Greeter to delegate;
```
```kalms Example.kalms {"style":"braces"}
data Box<T>(value: T) generate Display;

contract Greeter {
    fun greet(name: Text) -> Text;
}

class DelegatedGreeting impl Greeter {
    private fix delegate: Greeter;
    init(delegate: Greeter) {
        self.delegate = delegate;
    }
    forward Greeter to delegate;
}
```
```java Example.java
record Box<T>(T value) {}

interface Greeter {
    String greet(String name);
}

final class DelegatedGreeting implements Greeter {
    private final Greeter delegate;

    public DelegatedGreeting(Greeter delegate) {
        this.delegate = delegate;
    }

    @Override
    public final String greet(String name) {
        return delegate.greet(name);
    }
}
```
::::

These types share `Types.kalm`. Public types live in a matching `.kalm` file; facade functions live in `<FileName>Kalm`. Java sees ordinary public methods, constructors, records and interfaces. `override fun` is required for interface implementations and inherited overrides. Forwarding preserves substituted Java generic signatures and checked exceptions.

Other type forms include `base class` with `needs fun`, `closed class` with nested permitted subclasses, `choice` enums, `singleton`, and generic `alias`. Classes and methods are final by default; use `extendable` where extension is intended.
