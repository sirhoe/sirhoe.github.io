---
layout: post
title: "Clustered index issue when Migrating database to Azure"
date: 2014-09-03 16:49:44 +1000
comments: true
categories: [Azure, SQL Server, Database]
---

{% img left /images/SQL-import-export.png 'Tool from MS SQL 2014' 250 80 %}

When I was migrating my development database with mock data to Azure to setup my portfolio site, I faced a migration issue while using the *SQL Import and Export Wizard* provided by my MSSQL Server 2014 installation. When I ran the wizard, it failed with a message complaining that Azure do not allow insertion in table which is created without a clustered index. The fix is obivious here, I will need to alter the table creation script, each one of them.

Thats alot of manual work for some mock data.

Luckily for me, I found a tool called *SQL Database Migration Wizard* which will analyze your database for Azure compatibility and in my case, automatically suggest adding Clustered Index to my tables while they are moved to the Azure cloud. Fantastic! 

I would highly recommend this tool for development purpose and do be extra careful if you are moving production data. [Here is the link to the tool.](http://sqlazuremw.codeplex.com)
