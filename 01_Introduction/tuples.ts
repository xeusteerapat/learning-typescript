// Normal object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// color, carbonation is true, and sugar content is 40
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Or use type alias for reuse tuple and order is MATTER
type Drink = [string, boolean, number];

const cola: Drink = ['brown', true, 30];
const sprite: Drink = ['clear', true, 50];
const coffee: Drink = ['black', false, 0];
console.log(coffee);
