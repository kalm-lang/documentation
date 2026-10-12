---
{"title":"App.kalm","order":0}
---

::::compare
```kalm App.kalm {"style":"indentation"}
pub fun greeting(name: Text) -> Text:
    return @"Hello, $name!"

pub fun main() -> Unit:
    sayLine(greeting("Mira"))
```
```kalm App.kalm {"style":"braces"}
pub fun greeting(name: Text) -> Text {
    return @"Hello, $name!"
}

pub fun main() -> Unit {
    sayLine(greeting("Mira"))
}
```
```kalms App.kalms {"style":"indentation"}
fun greeting(name: Text) -> Text:
    return @"Hello, $name!"

sayLine(greeting("Mira"))
```
```kalms App.kalms {"style":"braces"}
fun greeting(name: Text) -> Text {
    return @"Hello, $name!"
}

sayLine(greeting("Mira"))
```
```java App.java
String greeting(String name) {
    return "Hello, " + name + "!";
}

void main() {
    System.out.println(greeting("Mira"));
}
```
::::
