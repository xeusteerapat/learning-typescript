const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

// nested Array
const carByMake: string[][] = [['f150'], ['corola'], ['camaro']];

// Help with inference when extractng values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100) ts will yell at us

// Array methods
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2020-04-01'];
importantDates.push('2020-10-22');
importantDates.push(new Date());
// importantDates.push(2020) error
