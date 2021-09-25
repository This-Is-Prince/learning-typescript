"use strict";
// class Department {
//   // name:string = "Information Technology" //we can specify datatype or datatype inferred
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
// }
// let accounting = new Department("Accounting");
// console.log(accounting);
// 2.Constructor Functions & The "this" keyword
// class Department {
//   // name:string = "Information Technology" //we can specify datatype or datatype inferred
//   //  name: string;
//   public name: string; // by default variables are public
//   private employees: string[] = [];
//   constructor(n: string) {
//     this.name = n;
//   }
//   //   describe() {
//   //     console.log("Department: " + this.name);
//   //   }
//   describe(this: Department) {
//     console.log("Department: " + this.name);
//   }
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// let accounting = new Department("Accounting");
// accounting.addEmployee("Prince");
// accounting.addEmployee("Prince Kumar");
// // accounting.employees[2] = "Kumar Prince"; // Error if employees is private
// // console.log(accounting);
// accounting.describe();
// accounting.printEmployeeInformation();
// // const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// // accountingCopy.describe();
// 3.ShortHand Initialization
// class Department {
//   private employees: string[] = [];
//   constructor(private readonly id: string, public name: string) {}
//   describe(this: Department) {
//     console.log("Department: " + this.name);
//   }
//   addEmployee(employee: string) {
//     //   this.id='d2' // Error bcoz id is readonly
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// const accounting = new Department("d1", "accounting");
// accounting.addEmployee("Prince");
// accounting.addEmployee("Prince Kumar");
// accounting.addEmployee("Kumar Prince");
// accounting.describe();
// accounting.printEmployeeInformation();
// 4.Inheritance
// class Department {
//   protected employees: string[] = [];
//   constructor(private readonly id: string, public name: string) {}
//   describe(this: Department) {
//     console.log("Department: " + this.name);
//   }
//   addEmployee(employee: string) {
//     //   this.id='d2' // Error bcoz id is readonly
//     this.employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends Department {
//   constructor(id: string, public admins: string[]) {
//     super(id, "IT");
//   }
// }
// class AccountingDepartment extends Department {
//   private lastReport: string;
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No Report Found...");
//   }
//   set mostsRecentReport(value: string) {
//     if (!value) {
//       throw new Error("Please pass in a valid value!");
//     }
//     this.addReport(value);
//   }
//   constructor(id: string, public reports: string[]) {
//     super(id, "IT");
//     this.lastReport = reports[0];
//   }
//   //  overriding
//   addEmployee(name: string) {
//     if (name === "Prince") {
//       return;
//     }
//     this.employees.push(name);
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }
//   printReports() {
//     console.log(this.reports);
//   }
// }
// const it = new ITDepartment("d1", []);
// it.addEmployee("Prince");
// it.addEmployee("Prince Kumar");
// it.addEmployee("Kumar Prince");
// it.describe();
// it.printEmployeeInformation();
// const accounting = new AccountingDepartment("d2", []);
// // console.log(accounting.mostRecentReport);
// accounting.addReport("Something went wrong....");
// console.log(accounting.mostRecentReport);
// accounting.printReports();
// accounting.addEmployee("Prince");
// accounting.addEmployee("Prince Kumar");
// accounting.addEmployee("Kumar Prince");
// accounting.printEmployeeInformation();
class Department {
    id;
    name;
    employees = [];
    static fiscalYear = 2020;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    admins;
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    reports;
    lastReport;
    static instance;
    static getInstance() {
        if (this.instance) {
            return AccountingDepartment.instance;
        }
        else {
            AccountingDepartment.instance = new AccountingDepartment("D1", []);
            return AccountingDepartment.instance;
        }
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report Found...");
    }
    set mostsRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }
    //  overriding
    addEmployee(name) {
        if (name === "Prince") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("Prince Kumar");
console.log(employee1);
console.log(Department.fiscalYear);
