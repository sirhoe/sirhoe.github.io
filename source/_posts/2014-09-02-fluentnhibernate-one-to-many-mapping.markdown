---
layout: post
title: "Fluent NHibernate: One-To-Many Mapping"
date: 2014-09-02 10:15:09 +1000
comments: true
categories: [Fluent NHibernate, C#]
---

One of the most common NHibernate mapping used is *one-to-many*, which is slightly more complex than the straight up *one-to-one*. There are a few things to take note of when we deal with such mapping especially when using FluentNHibernate.

For this demo, I am going to use FluentNHibernate 1.4 and NHibernate 3.3, particulary the [*FluentNHibernate.Mapping.Classmap*](https://github.com/jagregory/fluent-nhibernate/wiki/Fluent-mapping) class

<!--more-->

###The database schema
We are going to use a simple blog database schema, with a *Post* and *Category* tale. In this exercise, a *post* can only have one *category* while a *category* can be applied to many *post*. 

{% img /images/one-many-ERD.jpg 'one category many post' %}

The diagram above is intentionally left incomplete without the datatype and other contraints so that we can focus on the relationship. 

In order to represent such relationship in C# FluentNHibernate code, we first have to create the entities classes, *Post* and *Category*. 

    public class Post    {
        public virtual int Id { get; set; }
        public virtual string Title { get; set; }
        public virtual Category Category { get; set; }    }

    public class Category    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual IList<Post> Post { get; set; }    }

These are just plain old C# class with no relationship yet, that comes later. Even if you are not using Fluent or NHibernate you would still create such classes to store the data you fetch from the database. This entity classes are required no matter which ORM you use or even if you do not use one. 

After that, we will create the mapping classes required by FluentNHibernate to represent the relationship in the database. There will be two mapping classes, one for earch entity class. 

    public class PostMap : ClassMap<Post>    {
        public PostMap()        {
            Id(x => x.Id); //#1
		       
            Map(x => x.Title) //#2
                .Length(5000)
                .Not.Nullable();
              
            References(x => x.Category) //#3
                .Column("Category");
        } 
    }

*ClassMap* is the basic foundation of all your FluentNHiberate mapping and you will derive from this to map anything.

###Rule 1: ClassMap it in the Contructor

As you can see from the *PostMap* class above, all the mappings must be in the Contrsuctor. The mapping says:

1. Table *Post* Primary key, also known as Id, is mapped to the Id method.
2.  Method *Ttitle* maximum length is 5000 and it cannot be null. Since the method returns a *String*, it will be automatically mapped to a *nvarchar* column
3. Method *Category* is a Foreign Key reference tht is mapped to a column named *Category*. From *Post* table point of view, it is a one-to-one mapping to *Category*

Next we will take a look at the *CategoryMap*

    public class CategoryMap : ClassMap<Category>
    {
        public CategoryMap()
        {
            Id(x => x.Id);  //#1 
                 
            Map(x => x.Name)  //#2
                .Length(50) 
                .Not.Nullable(); 
                
            HasMany(x => x.Post) //#3 
                .Inverse() 
                .Cascade.All()
                .KeyColumn("Category"); 
            }
        }

The #1 and #2 have been explained earlier whereas #3 shows table *Category* has a *Post* method. The *Inverse* method dictates that the relationship must be traced from the other side which is the *Post* table. The *Cascade.All* dictates cascade on delete/update, which means leave no orphan. The *KeyColumn* is just telling FluentNHibernate to look at that column in *Post* table when tracing the relationship from inverse.

###Rule 2: Inverse at the Many side of the relationship.
Do not inverse both side unless you know what you are doing. Refer to [this excellent exlain](http://notherdev.blogspot.com.au/2012/04/nhibernates-inverse-what-does-it-really.html) for more detail. 

Finally with the entity class and mapping completed, we can start working with *ISessionFactory* to configure the databse. I will cover that in another post.

###Have a question?
Feel free to leave a comment or email and I will get back to you. 





