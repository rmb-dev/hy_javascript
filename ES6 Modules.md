# ES6 Modules

## Learning Objectives
By the end of this lesson you will be able to:
- Identify the uses and importance of ES6 modules.
- Practice writing code that utilizes modules to illustrate their functionality and necessity in large scale applications.


### Notes
- ES6 modules will not work in the browser on its own as a live server must be running to avoid a Cross Origin Request error.
- We are able to install a `Live Server` extension directly into VSCode that allows for a live server to be running.
- The following steps can be followed to get a live server running:
1. Open up your VSCode editor and select the `Extensions` button on the bottom of the left panel.
2. In the search bar that appears, type in: `Live Server`.
3. Click `install`, and this will bring Live Server into your Visual Studio Code editor.
4. You should see a `Live Server` button appear at the bottom righthand side of your editor window.
5. When you are writing modules in JavaScript, you should run the code in Live Sever to avoid the aforementioned errors.


- When using the script tag to bring in a JavaScript file from your HTML, please ensure that you include `type="module"`. For example:   

   ```html
   <script src="main.js" type="module"></script>
   ```


### What is a module?
Modules are self-contained chunks of reusable code. Building your code in modules allows you to isolate concerns because you are decoupling your logic from other parts of the application.  Imagine trying to work on a codebase that had tens of thousands of lines of code.... all in one file! Modules make it much easier to maintain your code and allow you to make changes to a single module without worrying too much about what you are impacting in the rest of your code.

The functions or variables in a module are not available for use, unless the module file exports them.


### Import and Export

In order to understand modules we need to understand does two important Javsacript concepts - _import_ and _export_.

`import` is a way of "importing" another Javascript file into your own file. Whenever you say `import a from './somefile.js';`, the variable you assign to it (in this case 'a') will be assigned to whatever is **exported** by that file.

`export` is the flipside of this, and is what will be available when you import the file into another file. Wherever you import, you can **only** access what is exported by the module - everything else in the file is unavailable. 

There are two kinds of exports: named exports (several per module) and default exports (one per module).

#### Named Exports
Named exports look like this:
```
//------ helpers.js ------

export const greeting = "Hello!";

export function add(num1, num2) {
    return num1 + num2;
}
```

```
//------ main.js ------

// Import the whole module and store it in a variable named 'helpers'

import * as helpers from './helpers.js';

helpers.add(1, 3) // returns 4

console.log(helpers.greeting) // logs "Hello!"
```

#### Default Exports

Here we are only exporting one function as the default for this module. The default export uses a private variable `greeting` that is only accessible inside the module. 

```
//------ greetUser.js ------

const greeting = "Hello";

export default function(name) {
    console.log(`${greeting} ${name}!`) ;
}
```

Then to import the module:

```
//------ main.js ------

// Import the default export and store it in a variable named 'greetMe'

import greetMe from './greetUser.js';

greetMe("Billy");  // console logs "Hello Billy!"

```


### Module Bundlers

One of the most important things that modules do is allow you to split your JavaScript into multiple files, and manage the dependencies between those files. Although this helps us stay organized while we are writing code, we generally want to bundle our code up again for the browser. 

This is where tools called module bundlers come in. One popular one you may have heard of is called Webpack. It looks at your application, identifies all of its _dependencies_ (what files rely on other files), and then mushes them together in one or more bundles. 

Bundlers like Webpack will start at the entry point you determine in your configuration file and use the import statements to understand what modules need to be bundled in where. 



