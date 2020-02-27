# Gulp

### What the heck is it?
Gulp is a build tool. Gulp is the work truck, where we keep our tool belt. It helps us use all the tools in our tool belt in a more effective and mobile way. Instead of managing multiple apps to provide tooling for our individual projects, Gulp can provide an automated workflow. 

When working on a team, having a standard automation system for working on the project can reduce frustration related to getting a system up to speed with another, and installing required tools.

#### Some things we can use Gulp to do

* Validate and compress your JavaScript
* Launch a local web server for development
* Convert Jade and HAML to HTML
* Remove unused CSS from your files
* merge multiple CSS files into one
* Compress images for smallest size
* Automatically inject SVG code into your project

### Why not just use Prepros?
Gulp works to save you time and maintain a consistent workspace. When working on a team, every member must take the time to set up file output paths and they may not have tools.  With Gulp, one tool needs to be installed on the computer, and a couple simple commands are run to have everyone within the same environment.

Gulp also allows for much more custom setups that are tailored towards your website.

So, while it's a little more work to learn and get setup initially - it's worth it in a long run. Plus, it's free!

### How it works
Gulp runs on the Node runtime and uses open source packages that we need to install on our system to run. To accomplish this, we need to use the command line to download and execute JavaScript on our system.

For this lesson, download the starter project at <a href="https://hychalknotes.s3.amazonaws.com/hygulptest.zip" download>hygulptest.zip</a>. The project is split into two folders - `dev` which is where we'll write our Sass and ES6, and `public` where we will compile our code to browser readable code. This will be useful because when we make our sites live, we will push **just** the `public` folder.

### Installing Gulp on your system

Gulp takes advantage of a JavaScript framework called [NodeJS](https://nodejs.org/) that runs on our system and provides us with a tooling library in which to run apps from. One of the great features of Node, besides from a powerful tool to build apps, is the package manager tool.

In order to use the package manager and Gulp, we need to install Node on our system. Visit the [NodeJS](https://nodejs.org/) homepage, and click the 'Install' button to install Node on your system.

To see if Node is installed and what version you have, open your command line and type the following command.

```bash
$ node -v
```

Once you have Node installed, we can use NPM from our command line to install Gulp, and any packages we will need.

In terminal type the command 
	
```bash
$ sudo npm install gulp -g
```

Upon typing that command, you may be asked for your password. The reason is, that we are attempting to install the Gulp package globally on our system. If you begin to type your password, you won't see any characters being inputted. Rest easy, the characters are there but not shown. Press enter when done.

Before moving forward, let's break down what each portion of the command mean.

* `sudo` means 'Super-User DO'. Enables administrator access to the file system.
* `npm` is the command to work within the scope of NodeJS packages.
* `install` is the action to perform within the the scope of `npm`.
* `gulp` is the name of the package, or tool to install.
* `-g` is a flag, much like `-r`, that means globally. Gulp will be installed on the root of your system, and be available to all directories and projects.

If everything installed successfully with no errors, go ahead and navigate to where the downloaded example is saved via the command line.

### Installing Gulp in a project for the first time

_Note, this will cover installing Gulp in a project if it does not already have it installed. Below is how to use Gulp if it is already installed on a project._

Once we have Gulp installed on our system, we can move into automating our projects. 

Inside of the project folder, run the following command

```bash
$ npm init
```

When you type the command, you will be presented with the ability to create a 'package.json' file. Fill out the fields as best you can, and in the end, you will find a newly created file in your folder. The values in parentheses will be used as defaults, so you can just press enter to go through them.

#### package.json

The 'package.json' file contains information for your project. As we add more packages to our project, the file will also serve as a listing for those packages, telling our system what files are needed.

If we were to move our project to another computer, or work with another developer who wants to use the same build system, the `package.json` file will serve as a manifest.

### Creating a gulpfile

The engine of any project is often the Gulp file. It allows us to create tasks and automate our system. Every project will be different and use differing tasks, but ultimately the same file is used.

Within the command line (and within the same directory as the previous command), create a new file called `gulpfile.js`.

```bash
$ touch gulpfile.js
```

### Installing a gulp plugin

Even though we installed Gulp on our system, we also need to install it in our project folder. Run the following command:

```bash
$ npm install gulp --save-dev
```

**Note** You may have to type sudo before the command to give you system access.

Next, let's install a few Gulp plugins that will allow us to compile our Sass files into CSS, and then concatenate them all into one file.

In the command line, type the following

```bash
$ npm install gulp-sass gulp-concat --save-dev
```

Like before, we are utilizing the npm module tool to install plugins called `gulp-sass` and `gulp-concat` to our project. The `--save-dev` flag included on the command tells the system to add the plugins to our `package.json` file, essentially creating a manifest of our dependencies.

You'll also notice that a `node_modules` folder has been created in your directory. This folder contains all the required files to run the plugins. As we installed the above plugins, all their dependencies were installed in `node_modules`.

**Important**
If using Git, create a `.gitignore` file and include 'node_modules' as we **do not** want to include that in our version control. The plugins needed to run Gulp are stored in 'package.json' and can simply be installed again by typing `npm install`.

### Setting up a task

Within `gulpfile.js`, we can now set up the Gulp task, to convert our Sass files to CSS. Open up `gulpfile.js` in your favourite code editor and let's get coding. Gulp uses Node behind the scenes, so we can leverage ES6 features to write our file.

Every gulp file needs to include a link to the dependencies in order to run the plugins, so we can create variables that will link to the dependencies in the `node_modules` folder.

**gulpfile.js**

```js
'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
```

The require module automatically sets the path of plugins, so there is no need to set the directory path with `node_modules`. Using variables, we've mapped the plugins to names we can use in our file.

Once we've included our plugins, we can set up the task.

Below the variables, we'll create our `Sass` task.

```js
gulp.task('styles', () => {
  return gulp.src('./dev/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles/'))
});
```

#### Whoa. What?

In the block above, we've created a task called 'styles', this is our reference name. We can use this name in other tasks, or to call it individually. This task wrapper is used throughout Gulp to create different tasks.

```js
gulp.task('styles', () => {
  // The guts go here
});
```

Inside the task wrapper, we write what is essentially, our script for our tasks. We use the return keyword to utilize the output of our tasks, and use a built in Gulp method called `.src` to pass in our files. By placing an asterisks in the place of a filename, we are essentially saying, "Go find any file that has an extension of .scss".

Using './' means to start looking within the folder the file is in. So if the gulpfile is in the root of the project, it will start looking from there.

```js
gulp.task('styles', () => {
  return gulp.src('./dev/styles/**/*.scss')
});
```

Now, the beautiful part of Gulp. The pipes. If you're familiar with JavaScript, a pipe is a method that allows you to pass code from one process to another. We use pipes to utilize our plugins. When one plugin has completed, it gets passed to the next.

In our task, we're using `gulp.src()` to take files from a folder, than using `.pipe()` to call the `sass()` plugin on them, next we pipe them to the `concat()` plugin, and finally into a built in `dest` method that states where to put the files when the task is completed.

```js
gulp.task('styles', function() {
  return gulp.src('./dev/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles'))
});
```

The `sass()` and `concat()` calls, come from the variables we set above. Instead of referring to the plugins themselves, we are running the functions inside the plugins, we appending params to the variable names.

With all plugins, we can provide them options and data that helps them complete their task.

### Running the task

Now that we understand how to set up a task, the moment of truth. Running the task.

To run the task, first be sure that you are in the same directory as the `gulpfile.js`, and then run the following command in our terminal.

```bash
$ gulp styles
```

Your 'styles' task will run and compile the Sass to CSS. Congrats! 

One small problem though, it's a bit arduous to switch back and forth between code and the command line to compile Sass every time a change is made.

### Watching your files

Gulp has a built in watch method, that allows us to provide what files to watch for changes, then run an existing task.

Just like the `styles` task, we create a task wrapper and give it a name.

```js
gulp.task('watch', () => {
  // The guts goes here
});
```

Inside the wrapper, we provide the scripts to run. We use the `.watch()` method, and provide what files to watch for changes and can then pass in an array of tasks to run.

```js
gulp.task('watch', () => {
  gulp.watch('./dev/styles/**/*.scss', ['styles']);
});
```

Now, instead of running `gulp styles` whenever we want to compile our Sass, we can run `gulp watch`, and the gulpfile will watch our sass files for changes, and run the styles task when they are saved. Once complete, the watch task will get ready for the next save.


Gulp has a massive development community and has over 1400 plugins at the time of writing. Let's look at setting up a new task, and also updating an existing task with a new plugin.

### ES6

To leverage the power of ES6 in our projects, we can use a tool called [https://babeljs.io/](https://babeljs.io/) to 'transpile' our code from ES6 to browser-friendly ES5 JavaScript. Much like Sass, we need to run it through a tool that will convert it for us.

Let's set up a task that will handle our scripts and search for any *.js files within the js folder.

```js
gulp.task('scripts', () => {
  gulp.src('./dev/scripts/main.js')
});
```

Let's install the plugin to our project along with a 'preset', which defines which transformations to perform. We also want to install 'babel-core', which refers to the node API for babel.

```bash
$ npm install gulp-babel  @babel/core @babel/preset-env --save-dev
```

Now, let's import the gulp-babel plugin into our gulpfile.

```js
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
```

Next, we'll add it our 'scripts' task, which will tell us of any errors, convert our ES6 code to browser friendly code, concatenate any files together into one, and then put it in a destination folder.

```js
gulp.task('scripts', () => {
  gulp.src('./dev/scripts/main.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./public/scripts'))
});
```

```js
gulp.task('watch', function() {
  gulp.watch('./dev/styles/**/*.scss', ['styles']);
  gulp.watch('./dev/scripts/main.js', ['scripts']);
});
```

When we run the task, our ES6 will be converted to ES5 code and any errors will be displayed in the command line. **Note** If there is an error, Gulp will stop and exit. You will have to fix the error and rerun Gulp.

### Autoprefixer

When we're writing CSS, (or Sass), we're utilizing properties and values that may be not widely supported on older or newer browsers. We can always be sure to use vendor prefixes to turn them on, but that's a lot of work and knowing what to prefix is a job all on its own.

Luckily there's a library called [Autoprefixer](https://github.com/postcss/autoprefixer) that will do all the hard work for us. 

Install the [Gulp-Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) plugin to your project with the following command.

```bash
$ npm install gulp-autoprefixer --save-dev
```

Append a variable that points to the library to our setup variables.

```js
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
```

Modify the `styles` task to pipe the task into the autoprefixer plugin before completion.

```js
gulp.task('styles', () => {
  return gulp.src('./dev/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles'));
});
```

To ensure that you're targeting the right browsers, you can pass in a comma separated lists of browsers to support. 

```js
gulp.task('styles', () => {
  return gulp.src('./dev/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles'));
});
```

The above will support the last 2 versions of all browsers, Safari 5, IE 8 and 9 and Opera 12.1. 

_Note: If you are using Flexbox, Autoprefixer does not enable Flexbox support on older browsers._

A full list of values you can pass in can be found here at [Browserslist](https://github.com/ai/browserslist#queries).

### Browsersync

[Browsersync](http://www.browsersync.io/) is a tool that helps with cross-browser testing and development. When running, it creates a local server with an external IP address that devices on other browsers can visit and view the rendered site as well as live reload. 

Browsersync also watches for interactions on the site such as scrolls and button clicks and relays that to other browsers connected to the hosted IP.

Install browsersync within your app with the following command

```bash
$ npm install browser-sync --save-dev
```

At the top of our `gulpfile.js`, create references to browsersync, as well as a reference to a method inside of browsersync.

```js
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
```

We can now create a task for browsersync to run, and provide an object defining the settings needed. For now, we will define the base directory of our application from which to serve the files from. When using other tools such as MAMP for Wordpress, it's possible to mask an existing address using the [proxy property](http://www.browsersync.io/docs/options/#option-proxy).

```js
gulp.task('browser-sync', () => {
  browserSync.init({
    server: '.'  
  })
});
```

Running the below command will create a local server

```bash
$ gulp browser-sync
```

It's important however, to trigger a live reload with our files. We can add a reference to the browsersync reload method into our other tasks which will be called when they are changed. To stop browserSync, press `ctrl-c`

```js
gulp.task('styles', () => {
  return gulp.src('./dev/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
  return gulp.src('./dev/scripts/main.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./public/scripts'))
    .pipe(reload({stream: true}));
});
```

We can also update our watch task to watch our HTML files and reload when they are changed.

```js
gulp.task('watch', function() {
  gulp.watch('./dev/scripts/*.js', ['scripts']);
  gulp.watch('./dev/styles/*.scss', ['styles']);
  gulp.watch('*.html', reload);
});
```

So it all works, but the problem is that in order to reload the server, we need to have the server running. The next section will explain the importance of creating a consolidated task.

### Putting it all together.

At this point, we have four tasks that all serve a purpose. One for CSS, one for JavaScript and one that watches our files, one for browser-sync and one that runs the specific tasks.

However, we can make one master task that accomplishes all of these in one go. Right now, if we were to enter the project, we could run `gulp watch` and it would start the watch task, which would in turn wait for us to make a change to our files. As well, we wouldn't be able to run browser-sync because it's not running just yet.

However, what if we wanted the files to be compiled and checked immediately, and then watched for a change, all by simply typing `gulp`.

Within `gulpfile.js`, add a new task called 'default', but instead of adding a function, add an array.

```js
gulp.task('default', []);
```
Within that array, we can pass in our tasks in the order we want them run.

```js
gulp.task('default', ['browser-sync','styles', 'scripts', 'watch']);
```

Now when we run `gulp` in the command line, it will compile our sass, check our JS for errors and then watch our files for changes.

### Moving forward

The Gulp ecosystem is massive and developers are creating new tools and plugins everyday. Of course, each project will require it's own set of plugins and file structure.

To see what plugins are available for you use, check out the [Gulp Plugin Registry](http://gulpjs.com/plugins/)

### Gulp on an existing Project

The above example included installing Gulp on a project for the first time, however, what happens if you're working on a project that already has Gulp set up on it?

This is often the case when working on a team. One developer will have created a Gulpfile with all the tasks defined, and via Git, shared the files with the other team members.

The important files to look for in a project that utilizes Gulp are the following:

- package.json
- gulpfile.js

To install the needed tools to run Gulp, we simply use the terminal to navigate to the same directory as the 'package.json' file and type the following.

```bash
$ npm install
```

The above command will tell the system to read the 'package.json' file and install the needed dependencies. You can then run the necessary tasks defined in the gulpfile.

### Video explanation.

If you want to get a video explanation of the boilerplate, check out this <a href="https://www.youtube-nocookie.com/embed/_oeLWKrW-zY?rel=0&amp;showinfo=0">video</a>. 

