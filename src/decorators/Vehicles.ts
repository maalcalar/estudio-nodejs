function Vehicle(constructor: Function) {
  constructor.prototype.createdAt = new Date();
  // console.log("constructor", constructor);
  // console.log("constructor.prototype", constructor.prototype);
}

function setnumber(options: {
  number: Number
}) {
  return (constructor: Function) => {
    constructor.prototype.randomNumber = options.number;
  }
}

function color(color: string) {
  return (constructor: Function) => {
    constructor.prototype.color = color
  }
}

@color("red")
@setnumber({ number: 10 })
@Vehicle
class Car {
  type: string;
  createdAt: Date;
  randomNumber: Number;
  color: String;

  constructor() {
    this.type = "Car";
    this.randomNumber = Math.random();
  }

  getType() {
    return `${this.type}`;
  }
}

@color("blue")
@setnumber({ number: 5 })
@Vehicle
class Suv {
  type: string;
  createdAt: Date;
  randomNumber: Number = Math.random();
  color: String;

  constructor() {
    this.type = "Suv";
  }

  getType() {
    return `${this.type}`;
  }
}

@color("black")
@setnumber({ number: 1 })
@Vehicle
class Truck {
  type: string;
  createdAt: Date;
  randomNumber: Number;
  color: String;

  constructor() {
    this.type = "Truck";
  }

  getType() {
    return `${this.type}`;
  }
}

export {
  Car,
  Suv,
  Truck
}