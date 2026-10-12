---
{
  "title": "contract / impl / override",
  "order": 35,
  "group": "Types"
}
---

Implement a contract using explicitly marked override methods.

::::compare
```kalm Example.kalm {"style":"indentation"}
contract Greeter:
    fun greet(name: Text) -> Text

class Friendly impl Greeter:
    override fun greet(name: Text) -> Text = @"Hello, $name!"
```
```kalm Example.kalm {"style":"braces"}
contract Greeter {
    fun greet(name: Text) -> Text
}

class Friendly impl Greeter {
    override fun greet(name: Text) -> Text = @"Hello, $name!"
}
```
```kalms Example.kalms {"style":"indentation"}
contract Greeter:
    fun greet(name: Text) -> Text

class Friendly impl Greeter:
    override fun greet(name: Text) -> Text = @"Hello, $name!"
```
```kalms Example.kalms {"style":"braces"}
contract Greeter {
    fun greet(name: Text) -> Text
}

class Friendly impl Greeter {
    override fun greet(name: Text) -> Text = @"Hello, $name!"
}
```
```java Example.java
interface Greeter {
    String greet(String name);
}

final class Friendly implements Greeter {
    @Override
    public final String greet(String name) {
        return "Hello, " + name + "!";
    }
}
```
::::

[Learn more](/docs/language/types/).
