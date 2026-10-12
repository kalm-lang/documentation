---
{
  "title": "Numeric conversions",
  "order": 10,
  "group": "Values"
}
---

Convert explicitly; narrowing rejects out-of-range values.

::::compare
```kalm Example.kalm
pub fun small(value: Int) -> Byte = value.toByte()
pub fun roundedDown(value: Double) -> Int = value.toInt()
```
```kalms Example.kalms
fun small(value: Int) -> Byte = value.toByte()
fun roundedDown(value: Double) -> Int = value.toInt()
```
```java Example.java
public final class Example {
    public static byte small(int value) {
        if (value < Byte.MIN_VALUE || value > Byte.MAX_VALUE) throw new ArithmeticException("Byte overflow");
        return (byte) value;
    }
    public static int roundedDown(double value) {
        if (!Double.isFinite(value) || value < Integer.MIN_VALUE || value > Integer.MAX_VALUE) throw new ArithmeticException("Int overflow");
        return (int) value;
    }
}
```
::::

[Learn more](/docs/language/values/).
