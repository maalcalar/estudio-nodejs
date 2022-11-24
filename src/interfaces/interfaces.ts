interface iParams {
  arg: string
}

interface iGoodbye {
  name?: string
}

interface iGreeter {
  sayHello: (name?: string) => string;
  sayGoodbye: (opts: iGoodbye) => string;
}

export {
  iParams,
  iGoodbye,
  iGreeter
}