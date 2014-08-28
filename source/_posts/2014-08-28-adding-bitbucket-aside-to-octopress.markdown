---
layout: post
title: "Adding Bitbucket aside to Octopress"
date: 2014-08-28 12:37:46 +1000
comments: true
categories: [Octopress, Bitbucket]
---

Default Octopress installation came with github support, as a widget-like plugin called 'aside'. The aside plugin will list your repositores based on the account name you configured in Octopress's *_config.xml*. 

Now I needed another one for Bitbucket and luckily I found [plugin developed by Izacus](https://github.com/izacus/octopress-bitbucket). The installation steps are clear and direct but the resulted Aside was ugly because it didnt include the necessary HTML *class* tag for my bootstrap css theme to work. Not a big deal, I got it fixed and the last thing I am going to do is contribute the changes back to the project.