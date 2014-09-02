---
layout: post
title: "Best practices to manipulate String in C#"
date: 2014-09-02 21:31:36 +1000
comments: true
categories: [String, Best Practice, C#]
---

Manipulating strings is probably the most performed task in programming yet most developer are not doing it efficiently. Developers tend to use the '+' operand to concatenate strings because it is an easy syntax and they are not aware of better options.

<!--more-->

###In C#, use System.Text.StringBuilder

Make it a habit to use StringBuilder to manipulate strings because the class is designed to be compiler-optimised and it will avoid memory allocation where possible. 

###String is immutable

Do you know that *String* type is immutable, which means that it cannot be changed after instantiated. Every time you modify an existing string, a new string is created. Now imagine if you have a loop which append to a string, the .NET runtime have to allocate memory for a new string every time the string is modified. Memory allocation is an expensive operation.


###StringBuilder is mutable and optimised

To overcome the resource penalty when manipulating string during runtime, StringBuilder is introduced. It's operation is compiler optimised and mutable where possible. 

###When to use StringBuilder?
Understanding the need for easy syntax and readability, I would suggest using StringBuilder whenever you are manipulating string in a loop and performance matters. 


###For more reading
[Namespace System.Text.StringBuilder](http://msdn.microsoft.com/en-us/library/2839d5h5(v=vs.110).aspx)
 
[StringBuilder Benchmark](http://www.dotnetperls.com/stringbuilder)


