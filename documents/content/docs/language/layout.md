---
{
  "title": "Layout and blocks",
  "order": 11,
  "navSection": "Language guide"
}
---

Kalm has two ways to write a block. Braces make boundaries explicit; a colon introduces an indented suite that keeps the body uncluttered. Both styles support function and type bodies, control-flow branches, and other compound statements. Colon suites can be multiline or, for a simple statement, inline. Empty bodies are written `{}`.

::::compare
```kalm
pub fun greet(name: Text?) -> Unit:
    fix display = name ?? "Guest"
    if display == "Guest":
        sayLine("Welcome!")
    else:
        sayLine(display)
```
```kalms Example.kalms
fun greet(name: Text?) -> Unit:
    fix display = name ?? "Guest"
    if display == "Guest":
        sayLine("Welcome!")
    else:
        sayLine(display)
```
```java Example.java
public final class Example {
    public static void greet(String name) {
        final String display = name != null ? name : "Guest";
        System.out.println(display.equals("Guest") ? "Welcome!" : display);
    }
}
```
::::

Keep related blocks at the same level in one style. In particular, use matching delimiters for all branches of an `if`/`else`, and keep neighboring declarations or statements consistent. The formatter applies the style of the first block in each same-level group, including at the top level. For example, if the first top-level function uses `:`, a following function written with `{}` is formatted with `:` too. The empty-block form `{}` remains available because a colon suite requires a body.

Style is chosen independently at each nesting level. A function written with a colon suite may contain an `if`/`else` written with braces, as long as both branches use braces:

::::compare
```kalm
pub fun greet(name: Text?) -> Unit:
    if name == null {
        sayLine("Welcome!")
    } else {
        sayLine(name)
    }
```
```kalms Example.kalms
fun greet(name: Text?) -> Unit:
    if name == null {
        sayLine("Welcome!")
    } else {
        sayLine(name)
    }
```
```java Example.java
public final class Example {
    public static void greet(String name) { System.out.println(name == null ? "Welcome!" : name); }
}
```
::::

Simple statements end at a logical newline or semicolon. Use semicolons when placing multiple simple statements on one line. `bin/kalm format <source-root>` checks formatting without changing files and reports any that differ; pass `--fix` to apply the formatter's changes. Editor formatting applies changes when you invoke the editor's format command.

Use `fix` instead of the former `fixed` keyword. `Unit` still means Java `void`; Java's boxed `Void` remains a separate type. Console, text, collection and numeric helpers come from the `kalm-stdlib` dependency and its automatic prelude.
