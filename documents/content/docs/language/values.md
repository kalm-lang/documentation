---
{
  "title": "Values and nullability",
  "order": 12,
  "navSection": "Language guide"
}
---

`fix` makes a binding immutable; `var` allows writes. Public results, parameters and fields have explicit types. `Text` maps to Java `String`, `int` to the primitive `int`, `Int` to non-null `Integer`, `Array<Int>` to `Integer[]`, and `IntArray` to `int[]`. Lowercase primitive types cannot be nullable or generic arguments; use wrappers such as `Int?` and `List<Int>`. `Any` excludes null; `Any?` permits it.

::::compare
```kalm {"style":"indentation"}
pub fun firstName(names: List<Text>?) -> Text = names?[0] ?? "Guest";

pub fun normalizedName(name: Text?) -> Text:
    fix candidate = name;
    if (candidate != null):
        return candidate.upper();

    return "GUEST";
```
```kalm {"style":"braces"}
pub fun firstName(names: List<Text>?) -> Text = names?[0] ?? "Guest";

pub fun normalizedName(name: Text?) -> Text {
    fix candidate = name;
    if (candidate != null) {
        return candidate.upper();
    }
    return "GUEST";
}
```
```kalms Example.kalms {"style":"indentation"}
fun firstName(names: List<Text>?) -> Text = names?[0] ?? "Guest";

fun normalizedName(name: Text?) -> Text:
    fix candidate = name;
    if (candidate != null):
        return candidate.upper();

    return "GUEST";
```
```kalms Example.kalms {"style":"braces"}
fun firstName(names: List<Text>?) -> Text = names?[0] ?? "Guest";

fun normalizedName(name: Text?) -> Text {
    fix candidate = name;
    if (candidate != null) {
        return candidate.upper();
    }
    return "GUEST";
}
```
```java Example.java
import java.util.List;
import java.util.Locale;

public final class Example {
    public static String firstName(List<String> names) {
        final String name = names != null ? names.get(0) : null;
        return name != null ? name : "Guest";
    }

    public static String normalizedName(String name) {
        final String candidate = name;
        return candidate != null
            ? candidate.toUpperCase(Locale.ROOT)
            : "GUEST";
    }
}
```
::::

Safe access evaluates the receiver once and skips indexes/arguments on null. Coalescing evaluates the fallback only on null. `??=` yields the existing value or assigned fallback. Mutable bindings keep their declared nullable type after writes; refine a `fix` value or coalesce explicitly. A null receiver is distinct from an empty list: safe indexing retains Java bounds behavior.

Arithmetic operands must have matching numeric types, with Java promotion of `Byte`, `Short` and `Char` to `Int`. Checked explicit conversions include `toByte()`, `toInt()` and `toLong()`. `upper()` and `lower()` use `Locale.ROOT`.

## Casts and generic nullability

`value as Text` checks the JVM type and rejects null with `ClassCastException`. Cast to `Text?` when null is an accepted result. The operand is evaluated once. Generic constructor arguments are checked against their instantiated types; `Box<Text>(nullableName)` is rejected, while `Box<Text?>(nullableName)` is allowed. Inferred Kalm constructor type arguments and inherited Java members preserve nullable element types.

Multiple local declarations initialize in source order: `var a = 1, b: int = a + 1`.
A flat bracket binding such as `fix [count, label] = [3, "three"]` infers each literal
slot independently. List and array sources must have exactly the required length; extraction
and conversions finish before any new destination is initialized.

`value as? Text` returns the same compatible reference or null. Its target must be a reifiable
non-null reference type. `value!!` asserts a nullable reference and throws `NullPointerException`
on null; it preserves the wrapper/reference type and evaluates its operand once. Map lookups
are nullable because keys can be absent. Indexed `=` yields the assigned value, and `??=`
supplies a fallback only when a writable nullable location is empty.
