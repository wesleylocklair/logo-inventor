class Triangle {
    constructor(shapecolor, textcolor, textcontent) {
        this.shapecolor = shapecolor;
        this.textcolor = textcolor;
        this.textcontent = textcontent;
    }
        render() {
            return  `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 280,200 10,200" fill="${this.shapecolor}" />
            <text x="145" y="150" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.textcontent}</text>
          </svg>`
        }
    }


class Square {
    constructor(shapecolor, textcolor, textcontent) {
        this.shapecolor = shapecolor;
        this.textcolor = textcolor;
        this.textcontent = textcontent;
    }
        render() {
            return  `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" x="10" y="10" fill="${this.shapecolor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.textcontent}</text>
  </svg>`
        }
    }


class Circle {
    constructor(shapecolor, textcolor, textcontent) {
        this.shapecolor = shapecolor;
        this.textcolor = textcolor;
        this.textcontent = textcontent;
    }
        render() {
            return  `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 280,200 10,200" fill="${this.shapecolor}" />
            <text x="145" y="150" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.textcontent}</text>
          </svg>`
        }
    }


    module.exports = Triangle;
    module.exports = Circle;
    module.exports = Square;

