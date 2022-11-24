import { iGreeter, iGoodbye } from './interfaces';

export class Greeter implements iGreeter {
  constructor() {}

  sayHello(name?: string) {
    return !name ? "Hello stranger" : `Hello ${name}`;
  }

  sayGoodbye(opts: iGoodbye) {
    return !opts.name ? "Goodbye stranger" : `Goodbye ${opts.name}`;
  };
}