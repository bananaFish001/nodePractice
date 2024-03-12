class Employee  {
    constructor(name, des) {
        this.name = name;
        this.des = des;
    }

    info() {
        console.log(`My name is ${this.name} and I am ${this.des}`);
    }
}

module.exports = Employee;
