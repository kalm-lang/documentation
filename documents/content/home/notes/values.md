---
{
  "title": "Delegate a contract in one line.",
  "order": 3,
  "icon": "route",
  "description": "The forward declaration generates contract methods for a delegate, preserving generic types and checked Java exceptions.",
  "doc": "/docs/language/types/"
}
---

Wrap an implementation without writing the same forwarding methods by hand.

::::compare
```kalm Delegation.kalm {"style":"indentation"}
contract Greeter:
    fun greet(name: Text) -> Text

class Delegated impl Greeter:
    fix delegate: Greeter
    init(delegate: Greeter):
        self.delegate = delegate

    forward Greeter to delegate
```
```kalm Delegation.kalm {"style":"braces"}
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
```kalms Delegation.kalms {"style":"indentation"}
contract Greeter:
    fun greet(name: Text) -> Text

class Delegated impl Greeter:
    fix delegate: Greeter
    init(delegate: Greeter):
        self.delegate = delegate

    forward Greeter to delegate
```
```kalms Delegation.kalms {"style":"braces"}
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
```java Delegation.java
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
