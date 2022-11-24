const parameter = (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
  console.log("target", target);
  console.log("propertyKey", propertyKey);
  console.log("parameterIndex", parameterIndex);
}

export class Person {
  name: String;
  occupation: String;

  constructor(name: string) {
    this.name = name;
  }

  setOccupation(@parameter occupation: string, @parameter job: string) {
    this.occupation = occupation
  }
}