class Quadrilateral {

  constructor(side1, side2, side3, side4) {
    this.side1 = side1,
      this.side2 = side2,
      this.side3 = side3,
      this.side4 = side4
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4
  }

}

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    //Must inherit all the sides from the superclass, because a rectangle 
    //still has 4 sides. Since side1 and side 3 are the same (and side2 and side4 are the same), set the sides accordingly
    super(side1, side2, side1, side2)
  }

  getArea() {
    return this.side1 * this.side2
  }

}

//extending from rectangle means that you inherit what qua
class Square extends Rectangle {
  constructor(side1) {
    //taking two sides from the rectangle class (the rectangle's constructor) and establishing that they will be of the same value
    //because its a square lol
    super(side1, side1)
  }

  getDiagonal() {
    return this.side1 * Math.sqrt(2);
  }

}


/* Be creative with this one! */


class Person {
  #socialSecurity

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
