let q1 = {
  code: `let obj = {
          name: 'Robert James',
          printInitials: function(){
              let print = () => {
                  console.log(this.name);
              };
              print();
            },
        };
      obj.printInitials();`,
  options: ["'Robert James'", "undefined", "null", "NaN"],
  answer: 1,
  userChoice: null,
};
let q2 = {
  code: `let obj = {
  name: "Robert James",
  printInitials: function () {
    function print() {
      console.log(this.name);
    }
    print();
  },
};
obj.printInitials();
`,
  options: ["'Robert James'", "undefined", "null", "NaN"],
  answer: 2,
  userChoice: null,
};
let q3 = {
  code: `let obj = {
  quote: "God is transcendental!",
  printQuotes: function () {
    console.log(this.quote);
  },
};
setTimeout(obj.printQuotes, 1000);`,
  options: ["God is transcendental!", "undefined", "null", "NaN"],
  answer: 2,
  userChoice: null,
};
let q4 = {
  code: `let obj = {
  quote: "God is transcendental!",
  printQuotes: function () {
    console.log(this.quote);
  },
};
setTimeout(() => obj.printQuotes(), 1000);`,
  options: ["God is transcendental!", "undefined", "null", "NaN"],
  answer: 1,
  userChoice: null,
};
let q5 = {
  code: `let obj = {
  items: ["burger", "pizza", "Sandwich"],
};
[item1, item2, item3] = obj.items;
 
console.log(item2);`,
  options: ['"burger"', '"pizza"', '"sandwich"', "undefined"],
  answer: 2,
  userChoice: null,
};
let q6 = {
  code: `let obj = {
  items: ["burger", "pizza", "Sandwich"],
};
[item1, ...someVar] = obj.items;
 
console.log(someVar);`,
  options: [
    `[ 'pizza', 'Sandwich' ]`,
    `[ 'burger', 'Sandwich' ]`,
    `['Sandwich', 'burger']`,
    "undefined",
  ],
  answer: 1,
  userChoice: null,
};
let q7 = {
  code: `class Animal {
  speak() {
    console.log("Uaaah!");
  }
}
class Human extends Animal {
  speak() {
    console.log("Hi there!");
    super.speak();
  }
}
new Human().speak();`,
  options: [
    `"Uaaah" will be printed`,
    `"Hi there!" will be printed`,
    `"Hi there!" followed by “Uaaah!” will be printed`,
    `"Uaaah!" followed by "Hi there!" will be printed`,
  ],
  answer: 3,
  userChoice: null,
};

let q8 = {
  code: `
class Human{
  speak() {
    console.log("Hi there!");
  }
}
console.log(Human === Human.prototype.constructor);`,
  options: ["'True'", `"False`, `undefined`, "null"],
  answer: 1,
  userChoice: null,
};
let q9 = {
  code: ` printHi();
    function printHi(name) {
    console.log("Hi");
    };
`,
  options: [
    `ReferenceError: Cannot access 'printHi' before initialization`,
    `“Hi” will be printed`,
    `undefined will be printed`,
    `Nan will be printed`,
  ],
  answer: 2,
  userChoice: null,
};
let q10 = {
  code: ` printHi();
    let printHi = function (name) {
    console.log("Hi");
    };
`,
  options: [
    `Uncaught ReferenceError: printHi is not defined`,
    `“Hi” will be printed`,
    `undefined will be printed`,
    `Nan will be printed`,
  ],
  answer: 1,
  userChoice: null,
};
let q11 = {
  code: `function printName() {
            let name = "Krishna Balaram";
            function printing() {
                console.log(name);
            }
            printing();
        }
        printName();
`,
  options: [
    `"undefined"`,
    `Krishna Balaram`,
    `ReferenceError: printName is not defined`,
    `NaN`,
  ],
  answer: 2,
  userChoice: null,
};
let q12 = {
  code: `let car1 = {
  name: "Mercedes",
  details: { make: "Nice make", model: 2020 },
};
let car2 = {};
Object.setPrototypeOf(car2, car1);
console.log(car2.name);`,
  options: [
    `undefined`,
    `"Mercedes"`,
    `ReferenceError: car2.name is not defined`,
    `NaN`,
  ],
  answer: 2,
  userChoice: null,
};
let q13 = {
  code: `let car1 = {
  name: "Mercedes",
  details: { make: "Nice make", model: 2020 },
};

console.log(car1?.detail?.model);//careful`,
  options: [
    `TypeError: Cannot read property 'model' of undefined`,
    `undefined`,
    `NaN`,
    `No output`,
  ],
  answer: 2,
  userChoice: null,
};
let q14 = {
  code: `let person = "Mark Twain";
console.log(true || person);`,
  options: [`“Mark Twain”`, `undefined`, `True`, `False`],
  answer: 1,
};
let q15 = {
  code: `let person = "";
console.log(person || "Mark Twain");`,
  options: [`False`, `True`, `undefined`, `“Mark Twain”`],
  answer: 4,
  userChoice: null,
};
let q16 = {
  code: `let person1 = {
  name: "Mark Twain",
  address: {
    st: "some street",
    ph: 1331321321,
  },
};
 
console.log(person1.printAddress?.());`,
  options: [
    `TypeError: person1.printAddress is not a function`,
    `undefined`,
    `{st:“Some street”,ph: 1331321321}`,
    `None`,
  ],
  answer: 2,
  userChoice: null,
};
let q17 = {
  code: `let person1 = {
  name: "Mark Twain",
  address: {
    st: "some street",
    ph: 1331321321,
  },
};
 
let person = {
  name: "Mark Twain",
  address: {
    st: "some street",
    ph: 1331321321,
  },
  printAdd: function () {
    console.log(this.address.ph);
  },
};
Object.setPrototypeOf(person, person1);//careful
person1.printAdd();`,
  options: [
    `1331321321`,
    `TypeError: person1.printAdd is not a function`,
    `undefined`,
    "False",
  ],
  answer: 2,
  userChoice: null,
};
let q18 = {
  code: `let prices = [1, 2, 3, "4", "5"];
console.log(prices.map((item) => +item * 2));`,
  options: [
    `[2, 4, 6, NaN, NaN]`,
    `[2, 4, 6, 8, 10]`,
    `TypeError: Cannot mix Number and other types, use explicit conversions`,
    `undefined`,
  ],
  answer: 2,
  userChoice: null,
};
let q19 = {
  code: `function doSomething() {
  let x = 5;
  setTimeout(() => console.log(x), 2000);
  x = 10;
}
doSomething();
`,
  options: [`5`, `10`, `undefined`, `NaN`],
  answer: 2,
  userChoice: null,
};
let q20 = {
  code: `let x = 10;
async function getDataFromServer(x) {
  await new Promise((resolve, rej) => {
    setTimeout(() => resolve((x = x ** 2)), 1000);
  }).then((x) => console.log(x));
}
getDataFromServer(2);`,
  options: [`100`, `20`, `16`, `4`],
  answer: 4,
  userChoice: null,
};
let q21 = {
  code: `let x = 10;
 
async function getDataFromServer(x) {
  return new Promise((resolve, rej) => {
    setTimeout(() => resolve((x = x ** 2)), 1000);
  });
}
getDataFromServer(10);
console.log(x);`,
  options: [`100`, `10`, `16`, `4`],
  answer: 1,
  userChoice: null,
};
let q22 = {
  title: "In Browser Environment, ",
  code: `let x = 10;
async function getDataFromServer() {
  return new Promise((resolve, rej) => {
    setTimeout(() => resolve((x = x ** 2)), 1000);
  });
}
x = 20;
x = 30;
await getDataFromServer();
console.log(x);`,
  options: [100, 400, 900, 200],
  answer: 3,
  userChoice: null,
};
let q23 = {
  code: `let obj = { name: "Abhijeet", job: "Full Stack Developer" };
Object.defineProperty(obj, "place", {
  value: "Hyderabad",
  writable: false,
  configurable: false,
});
obj.place = "Silicon Valley";
console.log(console.log(obj.place));`,
  options: [`"Silicon Valley"`, `"Hyderabad"`, `undefined`, `"Place"`],
  answer: 2,
  userChoice: null,
};
let q24 = {
  code: `let val;
console.log(val ?? "MEEE");`,
  options: [`undefined`, `“MEEE”`, `null`, `Empty String will be printed`],
  answer: 2,
  userChoice: null,
};
let q25 = {
  code: `let x = [];
console.log(Object.getPrototypeOf(x) !== Array.prototype);`,
  options: [`false`, `True`, `undefined`, `NaN`],
  answer: 1,
  userChoice: null,
};

let initialState = {
  currentQuestionNumber: 0,
  finalScore: 0,
  showResults: false,
  questions: [
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15,
    q16,
    q17,
    q18,
    q19,
    q20,
    q21,
    q22,
    q23,
    q24,
    q25,
  ],
};
let qArray = initialState.questions;
export default initialState;
export { qArray };
