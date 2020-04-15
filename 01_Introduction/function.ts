// Type annotation for a return value from a function
// always add annotation for arguments
const add = (a: number, b: number): number => {
  return a + b;
};

// Annotation for anonymous function
const divide = function (a: number, b: number): number {
  return a / b;
};

// no return value
const logger = (message: string): void => {
  console.log(message);
};

// never keyword
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring parameters with Annotation
const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
