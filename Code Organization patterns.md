# Code Organization Patterns

## Learning Objectives
By the end of this lesson you will be able to:
- Explain code organization techniques to plan elements of your code writing.
- Apply code organization techniques necessary to plan projects before executing them.

</br> 

## Before writing code

If you were building a house you (hopefully) wouldn't build it one room at a time without thinking about how it will all come together. You'd probably think about what rooms you need and the layout you want and how you will move through the house once it is built. 

Just like if you were building a house, you want to write out a blueprint for your application before you start writing any code. You should take stock of what data you need to keep track of and think about how it may change as users interact with your app. You'll want to think about what functions you may need to write to manage user interactions as well. 

### Single source of truth

It can be tempting to use the DOM as the source of truth for the state of your application but in practice this is not a good idea. Instead, you should be using objects in your JavaScript code to store the state and when those objects change, that is when you should update the DOM to reflect the changes. This means that you will only need to worry about keeping track of changes in one place, and then worry about updating the UI only when your data structures change. 

This is especially important when you are getting data from another source, like a database or an API. If you relied on the DOM to keep the state of your application, you will quickly get out of sync with your data source. 

<br />

![](https://hychalknotes.s3.amazonaws.com/application-flow.png)

<br />

### Where to start

Planning your codebase can seem quite overwhelming at the start, but the effort you put in up front will save you lots of time in the long run!

#### Write some requirements

One good exercise is to write out in plain English what you want your app to do. For example, if you were building a To Do app, you might start with something like this:

Users should be able to:
1. View a list of their to do items
2. Be able to add a new item
3. Be able to check off completed items
4. Be able to delete completed or uncompleted items


#### Write your pseudocode

From there, start translating that into pseudocode to break down the tasks you will need to tackle to make your app work:

```
1. View a list of their to do items
* Will need a ul element in the DOM to display the to do items (as li elements)
* Will need a data structure to store the data (the to do items) that I can read from to display the data

2. Be able to add a new item
* Will need an input element in the DOM that users can type in and a submit button to submit their to do
* Will need an event listener for when the user adds an item
* Will need a function that adds the new to do to the list of to dos

3. Be able to check off completed items
* Will need a checkbox input for each li
* Will need an event listener to listen for when the user clicks on the checkbox
* Will need a function that finds the selected to do and marks it as done

4. Be able to delete completed or uncompleted items
* Will need a delete button for each li
* Will need an event listener to listen for when the user clicks on the delete button
* Will need a function that finds the selected to do and removes it from the list
```

#### Plan your data structures

This is when you will want to start making a list of what data you will need to store and how it may change with user interaction. As you go through this process, think about the data types you will need for each of the properties you add. 

For our to do app, we know that we need to keep track of a list of to dos that the user adds. This seems like a good job for an array! But what do we want to store in our array? We could store just the strings that describe the to do tasks, but how would we be able to mark them as completed? By using an object for each item we can store some extra information about each to do. Let's take a look at what that might look like:

```
const toDoItems = [{
		id: 1,
		description: "Plan my app",
		completed: true
	}, {
		id: 2, 
		description: "Build my app",
		completed: false
	}]
```

Now that you have a good idea of what the data structure that you will use to store your to dos looks like, it will help you to write the functions you need to allow the user to interact with the list. 



