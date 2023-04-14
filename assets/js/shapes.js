export class Rectangle {
    constructor({ctx, x, y, width, height, key, fill}) {
        this.key = key ?? new Date().getTime().toString() + Math.random()*10000
        this.ctx = ctx
        this.x = x ?? 50;
        this.y = y ?? 50;
        this.width = width ?? 100;
        this.height = height ?? 100;
        this.fill = fill ?? '#555';
        this.hidden = false;
        this.draw()
    }

    draw() {
        this.ctx.fillStyle = this.fill;
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}

export class Selection {
    constructor({ctx, x, y, width, height}) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.selectedShape = {
            type: 'rectangle',
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            color: 'blue'
        }
        this.selectionShape = {
            borderWidth: 2,
            borderColor: 'red',
            resizeHandleSize: 8,
            resizeHandleColor: 'white'
        }

        this.drawShape(this.selectedShape)
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, this.width, this.height)
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = 'blue';
        this.ctx.stroke()
    }

    customizeHandlers() { }

    // selectionHandler() {
    //     this.selectedShape = {
    //         type: 'rectangle',
    //         x: this.x,
    //         y: this.y,
    //         width: this.width,
    //         height: this.height,
    //         color: 'blue'
    //     }
    //     this.selectionShape = {
    //         borderWidth: 2,
    //         borderColor: 'red',
    //         resizeHandleSize: 8,
    //         resizeHandleColor: 'white'
    //     }

    //     this.drawShape(this.selectedShape)
    // }

    drawShape(shape) {
        // Draw the shape
        this.ctx.fillStyle = shape.color
        this.ctx.fillRect(shape.x, shape.y, shape.width, shape.height)

        // Draw the selection shape
        this.ctx.strokeStyle = this.selectedShape.borderColor
        this.ctx.lineWidth = this.selectedShape.borderWidth
        this.ctx.strokeRect(
            shape.x - this.selectedShape.borderWidth,
            shape.y - this.selectedShape.borderWidth,
            shape.width + this.selectedShape.borderWidth * 2,
            shape.height + this.selectedShape.borderWidth * 2
        )

        // Draw the resize handles
        this.ctx.fillStyle = this.selectedShape.resizeHandleColor
        this.ctx.fillRect( 
            shape.x - this.selectionShape.resizeHandleSize / 2,
            shape.y - this.selectedShape.resizeHandleSize / 2,
            this.selectionShape.resizeHandleSize,
            this.selectionShape.resizeHandleSize
        )
        this.ctx.fillRect( 
            shape.x - this.selectionShape.resizeHandleSize / 2 + shape.width,
            shape.y - this.selectedShape.resizeHandleSize / 2,
            this.selectionShape.resizeHandleSize,
            this.selectionShape.resizeHandleSize
        )
        this.ctx.fillRect( 
            shape.x - this.selectionShape.resizeHandleSize / 2,
            shape.y - this.selectedShape.resizeHandleSize / 2 + shape.height,
            this.selectionShape.resizeHandleSize,
            this.selectionShape.resizeHandleSize
        )
        this.ctx.fillRect( 
            shape.x - this.selectionShape.resizeHandleSize / 2 + shape.width,
            shape.y - this.selectedShape.resizeHandleSize / 2 + shape.height,
            this.selectionShape.resizeHandleSize,
            this.selectionShape.resizeHandleSize
        )
    }
}