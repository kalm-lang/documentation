---
{
  "title": "Java interoperability",
  "order": 20
}
---

Kalm generates Java source and ordinary JVM classes. Java sees records, enums,
interfaces, methods, and constructors.

## Call Java

::::compare
```kalm {"style":"indentation"}
use java.time.LocalDate

pub fun year() -> int = LocalDate.now().getYear()
```
```kalm {"style":"braces"}
use java.time.LocalDate

pub fun year() -> int = LocalDate.now().getYear()
```
```kalms Example.kalms {"style":"indentation"}
use java.time.LocalDate

fun year() -> int = LocalDate.now().getYear()
```
```kalms Example.kalms {"style":"braces"}
use java.time.LocalDate

fun year() -> int = LocalDate.now().getYear()
```
```java Example.java
import java.time.LocalDate;

public final class Example {
    public static int year() {
        return LocalDate.now().getYear();
    }
}
```
::::

Java visibility, overloads, varargs, boxing, and SAM lambdas retain their usual
invocation rules. Public Kalm types belong in matching `.kalm` files.

## Call Kalm

Top-level functions in `Greeting.kalm` become methods of `GreetingKalm`.
Both source sets can call each other within the same build.

::::compare {"presentation":"showcase","locks":{"dialect":true}}
```kalm Greeting.kalm {"style":"indentation","pane":"Greeting.kalm"}
pub fun greeting(name: Text) -> Text = @"Hello, $name!"
```
```kalm Greeting.kalm {"style":"braces","pane":"Greeting.kalm"}
pub fun greeting(name: Text) -> Text = @"Hello, $name!"
```
```java Caller.java {"pane":"Caller.java"}
public class Caller {
    public static void main(String[] args) {
        System.out.println(GreetingKalm.greeting("Mira"));
    }
}
```
::::
## Nullability

Unannotated Java references are platform values. Give a potentially absent result
an explicit nullable type before coalescing it. Assigning an unannotated reference
to a non-null target produces a warning.

::::compare
```kalm {"style":"indentation"}
pub fun projectName() -> Text:
    fix configured: Text? = System.getProperty("project.name")
    return configured ?? "untitled"
```
```kalm {"style":"braces"}
pub fun projectName() -> Text {
    fix configured: Text? = System.getProperty("project.name")
    return configured ?? "untitled"
}
```
```kalms Example.kalms {"style":"indentation"}
fun projectName() -> Text:
    fix configured: Text? = System.getProperty("project.name")
    return configured ?? "untitled"
```
```kalms Example.kalms {"style":"braces"}
fun projectName() -> Text {
    fix configured: Text? = System.getProperty("project.name")
    return configured ?? "untitled"
}
```
```java Example.java
public final class Example {
    public static String projectName() {
        final String configured = System.getProperty("project.name");
        return configured != null ? configured : "untitled";
    }
}
```
::::

Generated signatures preserve nullability metadata, including generic arguments
and array dimensions, for later Kalm compilations.

## Resources and errors

Handle checked Java exceptions with `try`/`handle`. Use `with` for closeable
resources. [Resources and concurrency](/docs/language/resources/) explains both.

An `external fun` wraps a Java static method under a Kalm name.
An ordinary `augment` adds Kalm extension functions; `bridge augment` also
exposes a public helper facade to Java.

## Build integration

Use [Maven](/docs/maven/) or [Gradle](/docs/gradle/) to compile Java and Kalm
source sets together. See [implementation limitations](/docs/limitations/)
for boundaries that affect existing Java projects.
