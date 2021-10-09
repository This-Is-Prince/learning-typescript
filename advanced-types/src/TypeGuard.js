"use strict";
// type Admin = {
//   name: string;
//   privileges: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };
// type Combinable = string | number;
// type Numeric = number | boolean;
// type Universal = Combinable & Numeric;
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }
// // printEmployeeInformation({
// //   name: "Prince",
// //   startDate: new Date(),
// //   privileges: ["Prince", "Kumar"],
// // });
// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }
// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading Cargo ..." + amount);
//   }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   //   if ("loadCargo" in vehicle) {
//   //     vehicle.loadCargo(1000);
//   //   }
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }
// useVehicle(v1);
// useVehicle(v2);
