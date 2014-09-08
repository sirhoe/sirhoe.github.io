---
layout: post
title: "Why C# Interface? and when to use them."
date: 2014-09-08 12:33:42 +1000
comments: true
categories: [C#, Best Practice]
---

>**Q: What is a Interface?**
 
 >A: It has a structure of a Class, contains all the declarations but no implementations. 

**Why? What is the point of a Interface?**

It serves as a *contract* for derived Classes. It dictates a set of public methods that implementing Classes must have, what arguments they get and what they return.

**Please explain in non technical jargon, When and How do we use Interface as a contract?**

When someone else is going to provide you the implementation later. You get to start working with your own code against a Interface because you already know what to pass in and get out of object’s methods which must surely exist in Classes that implement the agreed Interface.
When you intend to swap out objects. To allow objects from different Classes to be interchanged, they have to implement the same Interface.
