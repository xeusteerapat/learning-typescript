class Vehicle2 {
  // we need to remove drive method to allow child class use drive() method

  constructor(public color: string) {}

  public honk() {
    console.log('Beep Beep!');
  }

  protected break(): void {
    console.log('Stop!');
  }
}

class Car2 extends Vehicle2 {
  constructor(public wheel: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('Vroom Vroom!');
  }

  startDriving(): void {
    this.drive();
    this.break();
  }
}

const car3 = new Car2(4, 'Yellow');
// we cannot use car3.break() outside child class bcuz it protected

const vehicle2 = new Vehicle2('Green');
vehicle2.honk();

const vehicle3 = new Vehicle2('Blue');
console.log(vehicle3.color);

// const car2 = new Car2();
// car2.startDriving();
// car2.honk();
