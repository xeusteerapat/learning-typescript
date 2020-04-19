const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    long: 15
  },

  setAge(age: number): void {
    this.age = age;
  }
};

// Destructuring
const { age }: { age: number } = profile;
const {
  coords: { lat, long }
}: { coords: { lat: number; long: number } } = profile;
