const canvas = document.querySelector(".mycanvas");
//gives the viewport width

const width = (canvas.width = window.innerWidth);
// gives the viewport height    
// As a result the canvas now has the total width and the height of the browser window 
const height = (canvas.height = window.innerHeight);


// creating the drawing area i.e, the context

const ctx = canvas.getContext("2d");  //the template is now ready
// the ctx variable contains CanvasRenderingContext2D object 

ctx.fillStyle = "rgb(256,256,256)";
ctx.fillRect(0,0,width,height)
