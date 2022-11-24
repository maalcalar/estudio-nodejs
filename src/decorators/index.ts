// import { Car, Suv, Truck } from './Vehicles';
// import { Talking } from './Talking';
// import { Point } from './Point';
import { Credentials } from './Credentials';
// import { Person } from './Person';

// // Class Decorators
// const car = new Car();
// const suv = new Suv();
// const truck = new Truck();

// console.log(`type of Car class => ${car.type}, created at => ${car.createdAt}`);
// console.log(`type of Suv class => ${suv.type}, created at => ${suv.createdAt}`);
// console.log(`type of Truck class => ${truck.type}, created at => ${truck.createdAt}`);

// console.log(`Car randonNumber = ${car.randomNumber}`);
// console.log(`Suv randonNumber = ${suv.randomNumber}`);
// console.log(`Truck randonNumber = ${truck.randomNumber}`);

// console.log(`Car color = ${car.color}`);
// console.log(`Suv color = ${suv.color}`);
// console.log(`Truck color = ${truck.color}`);

// // Method Decorators
// const talking = new Talking({});
// console.log(talking.greeting());
// console.log(talking.goodbye());

// // Accessor Decorators
// const point = new Point(3, 2);

// // Property Decorators
const credentials = new Credentials({ username: "miguel.alcala" });
console.log(`username => ${credentials.username}`);
credentials.username = "maalcalar";
console.log(`username => ${credentials.username}`);
console.log(`password => ${credentials.password}`);
credentials.password = "walmart";
console.log(`password => ${credentials.password}`);

// Parameter Decorators
// const person = new Person("Miguel");
// person.setOccupation("developer", "Globant");