export class ShapeBucket {
    constructor() {
        this.shapes = new Object()
        this.history = new Array()
    }

    addShape(instance) {
        this.shapes[instance['key']] = instance
        this.history.push(instance['key'])
    }

    removeShape(key) {
        return delete this.shapes[key]
    }

    updateShape(instance) {
        this.shapes[instance[key]] = instance
    }
}