# Project: Calculator

## Introduction:

This is a rather simple calculator that allows you to perform basic arithmetic, and to find the nth power or nth root of a number.

## Features and usage:

- Keyboard support: what you see on screen is what you need to press, with the exception of exponentiation and roots buttons, in which case you must press "p" and "r" respectively. Furthermore, = works either with Enter or with Shift+0 (or whatever the "=" symbol might be).

- Digit limit: users can only input up to 10 digit numbers. Any repeating or non-repeating decimal will be rounded down to 4 digits. Numbers greater than 9999999999 or lesser than -9999999999 will be expressed using scientific notation, with some results being rounded (for instance: 9999999999*3 won't show 2.99e+10, but 3.00e+10 instead). Sometimes, getting a floating point number might surpass the 10 digits limit.

- Calculating powers and roots: first operand should be the base or radicand, and the second one the exponent or index. Note that as decimals on roots are rounded, it might affect some results. E.g.: doing sqrt(12)**2 won't displayed 12, but 11.99...

- Chaining operations: You can chain calculations consecutively as long as you press any operator instead of =. If so, the partial result will be displayed and a new operand will be expected to be used with the selected operator.

- Errors: if you try to divide by 0, or if you attempt any operation without operands and operators, an error message will be displayed.

- Fixing mistakes: numbers can be fixed using tha backspace button. If the wrong operator is selected, you can change it before entering the second operand.




