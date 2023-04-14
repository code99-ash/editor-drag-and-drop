import { Rectangle, Selection } from "./shapes.js";
import { ShapeBucket } from "./Shape.js";

export class TmpCanvas extends ShapeBucket {
    constructor({ctx}) {
        super();
        this.ctx = ctx
        this.offsets = {
            left: canvas.offsetLeft,
            top: canvas.offsetTop
        },
        this.mouseX = null
        this.mouseY = null
        this.intersection = null;
        this.selection = null
    } 

    setMousePosition(clientX, clientY) {
        this.mouseX = clientX - this.offsets.left
        this.mouseY = clientY - this.offsets.top;
    }

    findSelectedShape() {
        let intersections = new Array()
        this.ctx.clearRect(0,0, canvas.width, canvas.height)
        
        for(const shape in this.shapes) {
            let newRect = new Rectangle({...this.shapes[shape]})
            this.ctx.beginPath()

            let { x, y, width, height } = this.shapes[shape]
            this.ctx.rect(x, y, width, height)

            if(this.ctx.isPointInPath(this.mouseX, this.mouseY)) {
                intersections.push(newRect)
            }
        }
        return intersections[intersections.length - 1]
    }

    getSelection(clientX, clientY) {
        this.setMousePosition(clientX, clientY)
        this.intersection = this.findSelectedShape()

        this.selection = new Selection({
            ctx: this.ctx,
            x: this.intersection.x,
            y: this.intersection.y,
            width: this.intersection.width,
            height: this.intersection.height,
        })
    }

    appendShape(instance) {
        this.addShape(instance)
        console.log(this.shapes)
    }

}