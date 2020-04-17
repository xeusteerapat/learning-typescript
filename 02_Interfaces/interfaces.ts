interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true
};

const oldToyota = {
  name: 'Toyata',
  year: 2003,
  broken: false
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Is broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);
printVehicle(oldToyota);
