// Create superclasses
class Point {
  x = 0;
  y = 0;

  setPos(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Animal {
  species = "";

  constructor(species: string) {
    this.species = species;
  }
}

// Create type that defines a constraint on the class applied
type GConstructor<T = {}> = new (...args: any[]) => T;

type Movable = GConstructor<{ setPos:(x: number, y:number) => void }>;
type Nameable = GConstructor<Point>

// Define Mixins
function MakeMovablePoint<TBase extends Movable>(Base: TBase) {
  return class MovablePoint extends Base {
    _movementLog = [];

    moveTo(x: number, y: number) {
      this.setPos(x, y);
      this._movementLog.push({
        x,
        y
      });
    }

    printMovementVectorResult() {
      let log = "";

      for (const step of this._movementLog) {
        log += `Moved ${step.x} step(s) in X axis and ${step.y} step(s) in Y axis\n`;
      }

      console.log(log);
    }
  }
}

function MakeNameablePoint<TBase extends Nameable>(Base: TBase) {
  return class NameablePoint extends Base {
    _name = "";

    setName(name: string) {
      this._name = name;
    }

    get name(): string {
      return this._name;
    }
  }
}

// Apply Mixins
const MovablePointMaker = MakeMovablePoint(Point);
const PointA = new MovablePointMaker();
PointA.moveTo(3, 6);
PointA.moveTo(-4, 2);
PointA.printMovementVectorResult();

const NameableMovableMaker = MakeNameablePoint(MovablePointMaker); // Question 1

const NameablePointMaker = MakeNameablePoint(Point);
const MovableNameablePointMaker = MakeMovablePoint(NameablePointMaker);
const PointB = new MovableNameablePointMaker();
PointB.setName("Point B")
console.log(PointB.name);
PointB.moveTo(1, 2);
PointB.moveTo(-2, 1);
PointB.printMovementVectorResult();

// const NameableAnimalMaker = MakeNameablePoint(Animal); // This is not possible