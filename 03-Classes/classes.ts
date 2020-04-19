class Vehicle {
  drive(): void {
    console.log('Chugga Chugga!');
  }

  honk() {
    console.log('Beep Beep!');
  }
}

class Car extends Vehicle {
  // Overriding method
  drive(): void {
    console.log('Vroom Vroom!');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
