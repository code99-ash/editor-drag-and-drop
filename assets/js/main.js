import { Rectangle, Selection } from "./shapes.js";
import { TmpCanvas } from "./canvas.js";

// let canvas = document.querySelector('#canvas');
// let ctx = canvas.getContext('2d');
// let gridSize = 50;

// let cvsOffset = {
//     left: canvas.offsetLeft,
//     top: canvas.offsetTop,
// }

// let shapes = {};
// let stack = [] // for rearangement
// let selection;
// let intersection;
// let mousedown = false;

// function addShape(instance) {
//     shapes[instance['key']] = instance
//     stack.push(instance['key'])
// }

// function getSelection(e) {
//     mousedown = true;
//     const {clientX, clientY} = e;
//     let mouseX = clientX - cvsOffset.left;
//     let mouseY = clientY - cvsOffset.top;

//     let intersections = findSelectedShape(mouseX, mouseY);
//     if(intersections.length == 0) return;

//     intersection = intersections[intersections.length - 1]
//     // console.log(intersection)
//     selection = new Selection({
//         ctx, 
//         x: intersection.x, 
//         y: intersection.y,
//         width: intersection.width,
//         height: intersection.height
//     })
//     // selection.draw()

// }

// function findSelectedShape(mouseX, mouseY) {
//     let intersections = new Array()
//     ctx.clearRect(0,0, canvas.width, canvas.height);

//     for (const shape in shapes) {
//         if(shapes[shape] instanceof Rectangle) {

//             let newRect = new Rectangle({...shapes[shape]})

//             ctx.beginPath()
//             let {x, y, width, height} = shapes[shape];
//             ctx.rect(x, y, width, height)

//             if(ctx.isPointInPath(mouseX, mouseY)) {
//                 intersections.push(newRect)
//             }
//         }
//     }
//     return intersections
// }

// // function resizeSelected(e) {
// //     console.log(intersection)
// //     // intersection.width += 20;
// //     const {clientX, clientY} = e;
// //     let mouseX = clientX - cvsOffset.left;
// //     let mouseY = clientY - cvsOffset.top;

// //     let intersections = new Array();

// //     // ctx.clearRect(0,0, canvas.width, canvas.height);

// //     for (const shape in shapes) {
// //         if(shapes[shape] instanceof Rectangle) {

// //             if(intersection.key !== shape) {
// //                 ctx.beginPath()
// //                 let {x, y, width, height} = shapes[shape];
// //                 ctx.rect(x, y, width, height)

// //             }else {
// //                 let {x, y, width} = intersection
// //                 intersection.height += 50  

// //                 ctx.fillStyle = intersection.fill;
// //                 ctx.fillRect(x, y, width, intersection.height)

// //                 // console.log(shapes[shape])
// //                 shapes[shape] = intersection
// //                 // console.log(shapes[shape])

// //                 selection = new Selection({
// //                     ctx, x, y, width,
// //                     height: intersection.height,
// //                 })
// //                 selection.draw()
// //             }
// //         }
// //     }
// // }


// canvas.width = window.innerWidth/2;
// canvas.height = window.innerHeight/2;
// canvas.style.backgroundColor = '#ddd';

// let rect1 = new Rectangle({ctx, x: 33, y: 20});
// let rect2 = new Rectangle({ctx, x: 53, y: 50, width: 250});

// addShape(rect1)
// addShape(rect2)

// console.log('Shapes', shapes)
// // console.log('stack', stack)
// // console.log(shapes[rect1.key] instanceof Rectangle)

// // canvas.addEventListener('mousedown', getSelection)
// // canvas.addEventListener('mouseup', resizeSelected)

// function getResizeHandle(mouseX, mouseY) {
//     const shape = selection.selectedShape;
//     const selectionShape = selection.selectionShape;

//     if (
//         mouseX > shape.x - selectionShape.resizeHandleSize / 2 && 
//         mouseX < shape.x + selectionShape.resizeHandleSize / 2 && 
//         mouseY > shape.y - selectionShape.resizeHandleSize / 2 && 
//         mouseY < shape.y + selectionShape.resizeHandleSize / 2
//     ) {
//         return 'top-left';
//     } else if (
//         mouseX > shape.x - selectionShape.resizeHandleSize / 2 + shape.width && 
//         mouseX < shape.x + selectionShape.resizeHandleSize / 2 + shape.width && 
//         mouseY > shape.y - selectionShape.resizeHandleSize / 2 && 
//         mouseY < shape.y + selectionShape.resizeHandleSize / 2
//     ) {
//         return 'top-right';
//     } else if (
//         mouseX > shape.x - selectionShape.resizeHandleSize / 2 && 
//         mouseX < shape.x + selectionShape.resizeHandleSize / 2 && 
//         mouseY > shape.y - selectionShape.resizeHandleSize / 2 + shape.height && 
//         mouseY < shape.y + selectionShape.resizeHandleSize / 2 + shape.height
//     ) {
//         return 'bottom-left';
      
//     } else if (
//         mouseX > shape.x - selectionShape.resizeHandleSize / 2 + shape.width && 
//         mouseX < shape.x + selectionShape.resizeHandleSize / 2 + shape.width && 
//         mouseY > shape.y - selectionShape.resizeHandleSize / 2 + shape.height && 
//         mouseY < shape.y + selectionShape.resizeHandleSize / 2 + shape.height
//     ) {
//         return 'bottom-right';
//     } else {
//         return null;
//     }
// }

// function resizeShape(event) {
//     // Get the mouse position relative to the canvas
//     const mouseX = event.clientX - canvas.offsetLeft;
//     const mouseY = event.clientY - canvas.offsetTop;
//     console.log('moving mouse', {mouseX, mouseY})

//     // check if the mouse is over a resize handle
//     const resizeHandle = getResizeHandle(mouseX, mouseY)
//     let selectedShape = selection.selectedShape;

//     switch (resizeHandle) {
//         case 'top-left':
//           selectedShape.x = mouseX;
//           selectedShape.y = mouseY;
//           selectedShape.width += selectedShape.x - mouseX;
//           selectedShape.height += selectedShape.y - mouseY;
//           break;
//         case 'top-right':
//           selectedShape.y = mouseY;
//           selectedShape.width = mouseX - selectedShape.x;
//           selectedShape.height += selectedShape.y - mouseY;
//           break;
//         case 'bottom-left':
//           selectedShape.x = mouseX;
//           selectedShape.width += selectedShape.x - mouseX;
//           selectedShape.height = mouseY - selectedShape.y;
//           break;
//         case 'bottom-right':
//           selectedShape.width = mouseX - selectedShape.x;
//           selectedShape.height = mouseY - selectedShape.y;
//           break;
//       }
    
//       // Redraw the canvas
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       selection.drawShape(selectedShape);
// }

// canvas.addEventListener('mousedown', (event) => {
//     getSelection(event)
//         // Get the mouse position relative to the canvas
//     const mouseX = event.clientX - canvas.offsetLeft;
//     const mouseY = event.clientY - canvas.offsetTop;

//     // Check if the mouse is over a resize handle
//     const resizeHandle = getResizeHandle(mouseX, mouseY);
//     if (resizeHandle) {
//         // Add a mousemove event listener to the canvas
//         canvas.addEventListener('mousemove', resizeShape);
        
//         // Add a mouseup event listener to the canvas
//         canvas.addEventListener('mouseup', function() {
//         // Remove the mousemove event listener from the canvas
//         canvas.removeEventListener('mousemove', resizeShape);
//         });
//     }

// })

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d')

const cvs = new TmpCanvas({ctx})

// Style canvas
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;
canvas.style.backgroundColor = '#ddd';

let rect1 = new Rectangle({ctx, x: 10, y: 20, width: 100, height: 120, fill: 'red'});
cvs.appendShape(rect1)

canvas.addEventListener('mousedown', (e) => {
    cvs.getSelection(e.clientX, e.clientY)
})