// Type annotation
let apples: number = 5;

// cannot re-assign with different type
apples = 10;

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

// Array of specific types
let colors: string[] = ['red', 'green', 'blue'];
let nyNumber: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  // this function just logging the number so we need to put void keyword
  console.log(i);
};

// When to use annotations
// 1) Functions that returns the 'any' type
const json = '{"x":10,"y":20}';
const coordinate: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// Variable whose type cannot be inferred correctly
let numbers = [-2, -4, 6];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
