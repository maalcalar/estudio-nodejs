class StringChecker {
  constructor(){}

  checkString = (input) => {
    return (input.hayStack.split(input.openingTag)[1] || "").split(input.closingTag)[0];
  }
}

const params =
{
    hayStack:"This is just <needle>an example for JS Clasess</needle>, it's  really awsome.",
    openingTag:"<needle>",
    closingTag:"</needle>"
};

let sc = new StringChecker();

console.log(sc.checkString(params));