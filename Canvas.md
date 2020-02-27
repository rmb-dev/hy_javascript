# HTML 5 Canvas

HTML5 saw the introduction of the canvas element. The canvas element is a container for graphics, which are created through JavaScript. It is used often for browser games, but also for graphs and animations. 

<a href="https://davidwalsh.name/canvas-demos" target="_blank">Check out some cool examples of canvas</a>

### Getting Started

To get started we need to add a `<canvas>` element to our HTML. The `canvas` element has an opening tag, and a closing tag. It has two optional attributes, height and width. If neither are specified, the canvas will default to 300px x 150px. You can control the size of your canvas in CSS, but the canvas will only scale from the size set from width and height attributes. If you don't keep the same aspect ratio, this may cause the canvas to look distorted.

It's a good idea to add an id to the canvas element, because we will need this in our JavaScript.

`<canvas height="500" width="500" id="canvas"></canvas>`

<div class="accessibility">
    <h4>Fallbacks</h4>
    <p>With canvas you can provide a fallback for screenreaders by adding text or another element (img with alternative text may be best) between the opening tag and closing tag.</p>
</div>

### Drawing on the Canvas

Before we can begin drawing on the canvas, a rendering context is required. We will use the `getContext()` method to get the context. getContext() takes one parameter, the type of the context. <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext" target="_blank">There are a few options we have, check them all out here,</a> but the ones you are likely to see in the wild are '2d' or 'webgl' (which will create a 3d rendering context). We're going to stick to 2d for now.

The canvas' grid or coordinate space is 1px x 1px. Meaning one unit on the grid corresponds to 1px. The default origin of the grid is in the top, left corner (0,0). The horozontal axis is the x axis and the vertical axis is y.

The methods to draw on the canvas live inside of the context.

```js
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
// this will be where we add all of our drawing methods
ctx.drawMethodHere();
```

### Path Drawing Functions
#### Rectangles:
`fillRect(x, y, width, height)`
- Draws a filled rectangle.

`strokeRect(x, y, width, height)`
- Draws a rectangular outline.

`clearRect(x, y, width, height)`
- Clears the specified rectangular area, making it fully transparent.

#### Paths and Lines:
`beginPath()`
- Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.

`closePath()`
- Closes the path so that future drawing commands are once again directed to the context. This is not needed if you use the fill() method.

`stroke()`
- Draws the shape by stroking its outline. We must use closePath() method in conjunction with this method.

`fill()`
- Draws a solid shape by filling the path's content area.

`lineTo(x, y)`
- Draws a line from the current position, to the position specified by the x and y arguments

`moveTo(x, y)`
- Moves the pen to the coordinates, so we can continue the drawing, unattached.
- *hot tip*: if you want to see the lines connect, it can be helpful to comment out your moveTo() lines 

#### Drawing a triangle with paths
```js
const canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(100, 0);
ctx.fill();
```

<img src="https://hychalknotes.s3.amazonaws.com/Screen%20Shot%202017-10-24%20at%204.50.29%20PM.png" alt="Image of canvas grid" style="width: 550px;">

With the grid lines and coordinates the above would look something like this:
<img src="https://hychalknotes.s3.amazonaws.com/triangleOnGrid-new.png" alt="Image of canvas grid" style="width: 550px;">

What this code is going to do is begin drawing a path, move the "pen" to the coordinate(100, 100), draw a line to coordinate(200, 100) which is 100px to the right of the first point, but on the same y axis. The next thing it will do is move to the coordinate(100, 0), which is back to the original x axis point, but up to the 0 point on the y axis.

Let's try using the stroke() method instead of fill:
```js
const canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(100, 0);
ctx.stroke();
```
Since we haven't closed the path yet, our triangle will be open. 

<img src="https://hychalknotes.s3.amazonaws.com/Screen%20Shot%202017-10-24%20at%205.42.04%20PM.png" alt="Image of canvas grid with open triangle path" style="width: 550px;">

Let's go ahead and add closePath() method to the above code.

```js
const canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(100, 0);
ctx.closePath();
ctx.stroke();
```
<img src="https://hychalknotes.s3.amazonaws.com/Screen%20Shot%202017-10-24%20at%205.42.29%20PM.png" alt="Image of canvas grid with closed paths" style="width: 550px;">

#### Circles and Arcs:

`arc(x, y, radius, startAngle, endAngle, anticlockwise)`
- Draws an arc which is centered at (x, y) position with **radius (r)** starting at **startAngle** and ending at **endAngle** going in the given direction indicated by **anticlockwise** (defaulting to clockwise).
    - x and y are coordinates on the canvas grid, , expressed as numbers (example: (100, 200))
    - radius is the arc's radius, expressed as a number
    - startAngle and endAngle are expressed in **radians** (number)
    - anticlockwise is an optional argument which is a **boolean** anticlockwise = true

`arcTo(x1, y1, x2, y2, radius)`
- Draws an arc with the given control points and radius, connected to the previous point by a straight line.



<a href="https://www.w3schools.com/tags/canvas_arc.asp" target="_blank">W3Schools has a good article for understanding canvas circles!</a>



**Note**:

The conversion from degrees to radians is below: 

__radians = (Math.PI/180)*degrees__

#### Styling

`fillStyle = color`
- Sets the style used when filling shapes
- can use CSS color values (keyword, hexcodes and rgba), gradients, or patterns

`strokeStyle = color`
- Sets the style for shapes' outlines
- can use CSS color values (keyword, hexcodes and rgba), gradients, or patterns

Once the fillStyle or strokeStyle have been set, the style will continue for all shapes and paths declared afterward, until this is overridden.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors" target="_blank">Learn how to create gradients, patterns, shadows, and line styling here.</a>

#### Adding Text

`fillText(text, x, y [, maxWidth])`
- Fills a given text at the given (x,y) position
- Maximum width is optional, text will fit within the max width you provide
- Text is a string, x and y are number coordinates, and maxwidth is a number (no units needed - it will be pixels)

`strokeText(text, x, y [, maxWidth])`
- Strokes a given text at the given (x,y) position
- Maximum width is optional, text will fit within the max width you provide
- Text is a string, x and y are number coordinates, and maxwidth is a number (no units needed - it will be pixels)

You can style the text with:
`font`
- Same syntax as CSS font property (size and fontfamily)
- default is 10px sans-serif 

`textAlign`
- Options are: start (default), end, left, right or center

`textBaseline`
- Options are: top, hanging, middle, alphabetic (default), ideographic, bottom

`direction`
- Options are: ltr (left to right), rtl (right to left)


```js 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.font = '50px sans-serif';
ctx.textAlign = 'center';
ctx.fillText('hello!', 250, 100);
```

![](https://hychalknotes.s3.amazonaws.com/Screen%20Shot%202017-10-26%20at%2012.08.08%20PM.png)

#### Adding Images
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images" target="_blank">You can add images to your canvas</a>

### Using events and canvas together
Canvas is really great for creating interactive experience. Let's look at how to create a circle on the page on click of the canvas. 

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('click', () => {
    const radians = (Math.PI/180)*360;
    ctx.beginPath();
    ctx.fillStyle = 'darkcyan';
    ctx.arc(100, 100, 20, 0, radians);
    ctx.fill();
});
```

*Hint* don't forget to actually _click_ the canvas, like I did!

<img src="https://hychalknotes.s3.amazonaws.com/canvasOnClick.gif" target="_blank" width="500">

This is fun, but wouldn't it be really cool if the circles showed up in random spots on the canvas? Or even better where the user clicks?

To do this, we need to find out _the location_ of where the user has clicked. Let's look at the event in the console.

```js 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('click', (e) => {
    console.log(e);
});
```

We will tap into the offsetX and offsetY properties on the event to tell our circle where to go!

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('click', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    const radians = (Math.PI/180)*360;
    ctx.beginPath();
    ctx.fillStyle = 'darkcyan';
    ctx.arc(x, y, 20, 0, radians);
    ctx.fill();
});
```

<img src="https://hychalknotes.s3.amazonaws.com/Screen%20Recording%202017-10-26%20at%2002.44%20PM.gif" target="_blank" width="500">

This is cool, but what if instead of on `click`, we said on `mousemove`.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    const radians = (Math.PI/180)*360;
    ctx.beginPath();
    ctx.fillStyle = 'darkcyan';
    ctx.arc(x, y, 20, 0, radians);
    ctx.fill();
});
```
<img src="https://hychalknotes.s3.amazonaws.com/canvasMousemove.gif" target="_blank" width="500">

But what if the colour changed every time we had a new circle?
```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let getRandomColor = () => {
    let rgb = `rgb(` + Math.floor(Math.random()*256)+','+ Math.floor(Math.random()*256)+','+ Math.floor(Math.random()*256)+')'
    return rgb;
}

canvas.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    const radians = (Math.PI/180)*360;
    ctx.beginPath();
    ctx.fillStyle = getRandomColor();
    ctx.arc(x, y, 20, 0, radians);
    ctx.fill();
});
```

<img src="https://hychalknotes.s3.amazonaws.com/canvasMousmoveRandomColor.gif" target="_blank" width="500">

### Exercise:
Create Paint! <a href="https://hychalknotes.s3.amazonaws.com/canvas-ANSWER.html.zip" target="_blank">See the answer here</a>.

<a href="https://hychalknotes.s3.amazonaws.com/canvas-start.html.zip" download>Starter files can be found here.</a>

<a href="https://hychalknotes.s3.amazonaws.com/canvas-ANSWER.html.zip" download>Answer key can be found here.</a>





