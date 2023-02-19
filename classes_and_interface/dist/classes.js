"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //name: string
        this.employees = [];
        //this.name = n
    }
    static newEmployee(name) {
        console.log(name);
    }
    addEmployee(employee) {
        //this.id = ''
        this.employees.push(employee);
    }
    fetchEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT-DEPARTMENT');
        this.admins = admins;
    }
    describe() {
        console.log(`Department Id ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReports(value);
    }
    constructor(id, reports) {
        super(id, 'Account-Department');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log(`Department Id ${this.id}`);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d1', ['string']);
        return this.instance;
    }
    addEmployee(employee) {
        if (employee === 'Max') {
            return;
        }
        this.employees.push(employee);
    }
    addReports(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    fetchReport() {
        console.log(this.reports);
    }
}
const accounting = AccountingDepartment.getInstance();
console.log(accounting);
//d.describe()
//const d = new Department('d1','Department')
//d.describe()
//Department.prototype.people = 'test'
// Department.newEmployee('Ryan')
// const accounting = new AccountingDepartment('d1',[])
// //accounting.addReports('Files')
// //accounting.addReports('Test')
// //accounting.fetchReport()
//  accounting.addEmployee('Max')
//  accounting.addEmployee('John')
// // accounting.addEmployee('Sneha')
// // //accounting.employees[2] = 'Priya'
//  accounting.fetchEmployee()
// // // console.log(accounting)
// //  accounting.describe()
//  console.log(accounting)
// const newAccounting = {name: 'test', describe: accounting.describe}
// newAccounting.describe()
