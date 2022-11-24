import { iParams } from './interfaces';
import { Greeter } from './Greeter';

const fun = (args: iParams) => {
  console.log(args.arg);
}

fun({arg: "nothing to do"});


const greeter = new Greeter();
console.log(greeter.sayHello());
console.log(greeter.sayGoodbye({}));

console.log(greeter.sayHello("Miguel"));
console.log(greeter.sayGoodbye({name: "Miguel"}));