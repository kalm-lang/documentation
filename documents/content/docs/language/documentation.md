---
{
  "title": "KalmDoc",
  "order": 17,
  "navSection": "Language guide"
}
---

Consecutive `###` lines document the next declaration at the same structural level. Write `###` for
an empty documentation line; an ordinary blank line or unrelated statement ends attachment.
Annotations and modifiers remain part of their declaration. Ordinary `#` and `## ... ##` comments
are not documentation.

Descriptions use Javadoc text, HTML, and inline tags. The first sentence is the summary.
KalmDoc supports `@param`, `@return`, `@throws`, `@see`, `@since`, `@deprecated`, `{@link ...}`,
`{@code ...}`, `{@literal ...}`, and `{@inheritDoc}`. Parameter names must exist; inherited
documentation requires an inherited target. A documentation `@deprecated` tag alone does not
produce executable deprecation warnings; use `legacy` or Java `@Deprecated` for those.

References use `Type`, `Type#member`, `Type#method(Type, ...)`, or `#member`. Aliases and Kalm
built-ins resolve to Java types: `Text` becomes `java.lang.String`, `Int` becomes
`java.lang.Integer`, and `int` remains primitive. Top-level functions belong to their source facade,
such as `GreetingApiKalm#loud(Text)`. Supply parameter types to disambiguate overloads.

Generated Javadoc preserves descriptions, parameter documentation, defaults, and nullability.
Omission overloads document only their present parameters. Async documentation distinguishes the
non-null task handle from its body result. Generated API notes use a custom `apiNote` tag; register
it with the standard doclet using `-tag "apiNote:a:API Note:"`.

Documentation warnings use codes `KALM-4001` through `KALM-4005` for orphan groups, invalid targets,
unresolved references, malformed/duplicate tags, and unknown tags. They do not fail ordinary compilation.
Unknown tags remain available to a configured doclet. Comments on script-only definitions remain
source documentation even when no public Java documentation target exists.
