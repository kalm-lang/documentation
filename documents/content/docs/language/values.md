---
{
  "title": "Values and nullability",
  "order": 12,
  "navSection": "Language guide"
}
---

`fix` makes a binding immutable; `var` allows writes. Public results, parameters and fields have explicit types. `Text` maps to Java `String`, `Int` to `int`, `Array<Int>` to `Integer[]`, and `IntArray` to `int[]`.

```kalm
pub fun firstName(names: List<Text>?) -> Text = names?[0] ?? "Guest";

pub fun normalizedName(name: Text?) -> Text {
    fix candidate = name;
    if (candidate != null) { return candidate.upper(); }
    return "GUEST";
}
```

Safe access evaluates the receiver once and skips indexes/arguments on null. Coalescing evaluates the fallback only on null. `??=` yields the existing value or assigned fallback. Mutable bindings keep their declared nullable type after writes; refine a `fix` value or coalesce explicitly. A null receiver is distinct from an empty list: safe indexing retains Java bounds behavior.

Arithmetic operands must have matching numeric types, with Java promotion of `Byte`, `Short` and `Char` to `Int`. Checked explicit conversions include `toByte()`, `toInt()` and `toLong()`. `upper()` and `lower()` use `Locale.ROOT`.

## Casts and generic nullability

`value as Text` checks the JVM type and rejects null with `ClassCastException`. Cast to `Text?` when null is an accepted result. The operand is evaluated once. Generic constructor arguments are checked against their instantiated types; `Box<Text>(nullableName)` is rejected, while `Box<Text?>(nullableName)` is allowed. Inferred Kalm constructor type arguments and inherited Java members preserve nullable element types.
