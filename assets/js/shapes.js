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
        this.color = 'blue'
        this.borderRadius = 2
        this.handleSize = 12 
        this.borderSize = 4
        this.handles = []
        this.draw()
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, this.width, this.height)
        this.ctx.lineWidth = this.borderSize;
        this.ctx.strokeStyle = 'blue';
        this.ctx.stroke()

        this.customizeHandlers()
    }

    customizeHandlers() {
        this.customizeCornerHandles()

    }

    customizeCornerHandles() {
        let dimen = [
            {
                type: 'top-left',
                x: this.x - this.handleSize / 2, 
                y: this.y - this.handleSize / 2
            },
            {
                type: 'top-right',
                x: this.x + this.width - this.handleSize / 2,
                y: this.y - this.handleSize / 2
            },
            {
                type: 'bottom-left',
                x: this.x - this.handleSize / 2,
                y: this.y + this.height - this.handleSize / 2,
            },
            {
                type: 'bottom-right',
                x: this.x + this.width - this.handleSize / 2,
                y: this.y + this.height - this.handleSize / 2
            }
        ]

        dimen.forEach(dim => {
            let box = new Rectangle({
                ctx: this.ctx,
                width: this.handleSize,
                height: this.handleSize,
                fill: this.color,
                x: dim.x,
                y: dim.y
            })
            this.handles.push({type: dim.type, target: box})
        })
        // console.log(this.handles)
    }

    // draggingTopLeft(e)
}