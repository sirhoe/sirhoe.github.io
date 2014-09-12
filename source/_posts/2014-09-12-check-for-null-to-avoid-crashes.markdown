---
layout: post
title: "Check for null to avoid crashes"
date: 2014-09-12 17:01:14 +1000
comments: true
categories: [BesT Practice, C# ]
---

NullPointerException is one of the most common error to crash an application. Everyone of us made this same mistake, the code runs fine although we did not check for null explicitly before calling *toString()* when we first code it because all the properties are instantiated during creation. It slips our mind and we checked in the code. 

    Uri myWebAddress = new Uri(“http://sirhoe.github.io”);
        …  //some flow
    Console.Writeline(myWebAddress.toString());

After awhile, someone else modified the code and now the object’s properties are not instantiated immediate after creation. 

    Uri myWebAddress = new Uri();
        …  //some flow
    Console.Writeline(myWebAddress.toString()); //throws exception

Now it crashes, because the *System.Net.Uri* object is null. This is just one example and there are many scenarios where similar error can happen. 

<!--more-->

###What should we do?

Make it a habit to check for null and I feel that the best and most readable way of doing it looks like this.

    (myWebAddress ?? string.Empty).toString());

You will have to make adjustment when adopting this but the whole idea is to make use of the “two question marks” to quickly check for null and give it a default value if its null.

Keep this best practice close to your heart and it will save you a lot of embarrassment down the road.

I hope you find this useful. 