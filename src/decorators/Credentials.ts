interface iPCredentials {
  username: String
}

interface iProp {
  visible?: boolean
}

const Prop = (opts: iProp) => {
  return (target: Object, PropertyName: string) => {
    let value: any;
    const getter = () => {
      if(opts.visible) {
        return value;
      }
      return "******";
    }

    const setter = (newValue: any) => {
      value = newValue;
    }

    Object.defineProperty(target, PropertyName, {
      set: setter,
      get: getter
    });
  }
}

export class Credentials {
  @Prop({visible: true})
  username: String;
  @Prop({visible: false})
  password: String;

  constructor(args: iPCredentials) {
    this.username = args.username;
    this.password = "123456";
  }
}