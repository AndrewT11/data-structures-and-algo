// a class will always have a constructor() which "create" the new instantiation of the class.
class Cookie {
    constructor(color) {
        this.color = color
    }
// These are our getters are setters. One will get the color you request. One will set the color of a cookie you select.
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}
 
let cookieOne = new Cookie('green')
let cookieTwo = new Cookie('blue')
