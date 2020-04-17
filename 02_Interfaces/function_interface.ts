interface Car {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const anotherCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printCar = (vehicle: Car): void => {
  console.log(vehicle.summary());
};

printCar(anotherCivic);
