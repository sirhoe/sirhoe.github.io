---
layout: post
title: "Best practice to catch and rethrow Exception"
date: 2014-09-23 16:46:20 +1000
comments: true
categories: [Best Practice, Exception]
---

Some developers made this mistake when they catch an Exception and later rethrow them. 

	try {
	  // something went wrong here
	} catch (Exception ex)
	{
	    throw ex; //mistake here
	}
How many of you do this? Do you know what is wrong here? 

When you code *throw ex;* you are essentially throwing an except from this point onwards, discarding the original exception and information that you *catch* earlier. The trace from this point onwards would only go to where you are issuing the *throw ex;* statement.

**What is the correct statement then?**

	try {
	  // something went wrong here
	} catch (Exception ex)
	{
	    throw;
	}
Hope this helps!
