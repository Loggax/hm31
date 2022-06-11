//Minimum//

let a = +prompt('Введіть радіус кола');

class Circle {
    constructor(r) {
        this.r = r
    }

    get radius() {
        return console.log('Радіус дорівнює' + ' ' + this.r);
    }

    set radius(newRadius) {
        this.r = newRadius
    }

    get diametr() {
        return console.log('Діаметр кола дорівнює' + ' ' + this.r * 2)
    }

    get square() {
        return this.calcSquare();
    }

    calcSquare() {
        let circleSquare;
        circleSquare = this.r * this.r * 3.14;
        console.log('Площа кола дорівнює' + ' ' + circleSquare);
    }

    get length() {
        return this.calcLength();
    }

    calcLength() {
        let circleLength;
        circleLength = 2 * 3.14 * this.r;
        console.log('Довжина кола дорівнює' + ' ' + circleLength.toFixed(2));
    }
}

const circle = new Circle (a);

//Norma//

let kolir = prompt("Введи колір маркера. Для прикладу: green, red, pink, orange, blue, і т.д.");
let obyem = +prompt("Введи об'єм маркера");

class Marker {
  constructor(colour, amountOfInc){
      this.colour = colour,
      this.amountOfInc = amountOfInc
  }

  get symb() {
      return this.calcSymbols();
  }

  calcSymbols() {

      let symbol = prompt('Введіть речення!');
      let symbAmount = symbol.length;
      let needPercents = symbAmount * 0.5;
      let percentLeavs = this.amountOfInc - needPercents;

      if (needPercents > this.amountOfInc) {
        console.log('У вас недостатньо фарби!');
      } else {
        console.log(`%c ${symbol}`, `color : ${this.colour}`)
        console.log('У вас залишилось' + ' ' + percentLeavs + '%,' + ' ' + 'ви витратили' + ' ' + needPercents + '%.');
      }

  }

}

const marker = new Marker (kolir, obyem);

class AnotherMarker extends Marker {

  get ref() {
      return this.refuel();
  }

  refuel() {
      this.amountOfInc = 100;
  }

}

const blueMarker = new AnotherMarker ('Blue', 0);