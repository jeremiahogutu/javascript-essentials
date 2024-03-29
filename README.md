# Javascript essentials

#WORKING WITH STRINGS AND NUMBERS

Using the plus symbol as a string operator, we add different content together to be treated as one long string. Any item included in such a string is treated like a string so a number will be converted to a string in this new context. The plus operator is unique in this regard. It's the only one of the arithmetic operators that is also a string operator, meaning you have to be careful about what type of data your variables contain when you use it.

If we use one of the other operators, say a minus b instead, the math works even though we have a number and a string. Javascript says you're trying to do math here and even though b is a string, I see it only contains a number so I'm going to assume you meant to use it as a number. The same thing happens when we do multiplication and division, as long as your string only contains a number, the math will work. It's sloppy and programmatically wrong, but you get results.

However, if you put anything other than a number in the string you're trying to subtract, multiply, or divide, bad things happen. If a is a number and b is a string and I try to say sum a minus b, then it returns NAN, or not a number. This means you're trying to do math using values that are not numbers, so if you ever seen NAN in your console, you know one or more of your variables contains a string. 


#ANONYMOUS FUNCTION

Anonymous functions don't have names, so they need to be tied to something, a variable, or an event, or something similar to run. 

#Const

const can't be changed once defined

#let

let is a block scope variable.If you want to limit the scope of a variable to just one code block, use let.

#var

If you need a general global or local variable, use var.

#Dot and Bracket notation

Dot notation works well for properly named properties. Bracket notation works well for when we might have to convert the property name into a string. You can use these both at any time to do the same thing and you can mix them inside the code. You don't have to choose one over the other. But you have the option and any time you encounter something weird like WP:image remember bracket notation is there to solve your problem. 