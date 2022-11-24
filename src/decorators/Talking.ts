interface iTalking {
  greeting: () => String
}

interface iPTalking {
  name?: String;
}

const enumerable = (value: boolean) => {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

const checker = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  console.log('target', target);
  console.log('propertyKey', propertyKey);
  console.log('descriptor', descriptor);
}

const specialGoodbye = (text: string) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const output = descriptor.value();
    descriptor.value = () => {
      return `${output} ${text}`;
    }
  }
}

export class Talking implements iTalking {
  name: String;

  constructor(args: iPTalking) {
    this.name = args.name;
  }

  greeting() {
    return 'Greetings stranger' + !this.name ? '.' : `, my name is ${this.name}.`;
  }

  @specialGoodbye('Hope not seing you again.')
  @checker
  goodbye() {
    return 'Have to go, bye stranger.';
  }
}