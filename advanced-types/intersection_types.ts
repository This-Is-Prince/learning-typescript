/**
 * INTERSECTION TYPE
 */

/**
 * 1. way
 */
// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

/**
 * 2. way
 */
// interface Admin {
//     name: string;
//     privileges: string[];
// }

// type Employee = {
//     name: string;
//     startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;
/**
 * 3. way
 */
// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// type ElevatedEmployee = Admin & Employee;

/**
 * 4. way
 */
// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "Prince",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };
// console.log(e1);

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;
