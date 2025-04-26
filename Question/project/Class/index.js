// Q-1 Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}

const person1 = new Person("Param", 20, "India");
const person2 = new Person("Arshil", 19, "India");

person1.displayDetails();
person2.displayDetails();

// Q-2 Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const myRectangle = new Rectangle(10, 5);

console.log(`Area: ${myRectangle.calculateArea()}`);
console.log(`Perimeter: ${myRectangle.calculatePerimeter()}`);


// Q-3 Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year); 
        this.doors = doors;
    }
    displayDetails() {
        super.displayDetails(); // Call the parent method
        console.log(`Number of Doors: ${this.doors}`);
    }
}
const myCar = new Car("Toyota", "2020", 2021, 4);

myCar.displayDetails();


// Q-4 Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

  
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }


    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

  
    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Balance: $${this.balance}`);
    }
}


const account1 = new BankAccount("123456789", 500);
const account2 = new BankAccount("987654321", 1000);

account1.deposit(200);
account1.withdraw(100);


account2.deposit(500);
account2.withdraw(300);

account1.displayAccountInfo();
account2.displayAccountInfo();


// Q-5 Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
   
    calculateArea() {
        console.log("Area calculation not defined for generic shape.");
    }
}


class Circle extends Shape {
    constructor(radius) {
        super(); 
        this.radius = radius;
    }

  
    calculateArea() {
        const area = Math.PI * this.radius * this.radius;
        console.log(`Area of Circle: ${area.toFixed(2)}`);
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super(); 
        this.base = base;
        this.height = height;
    }

  
    calculateArea() {
        const area = 0.5 * this.base * this.height;
        console.log(`Area of Triangle: ${area}`);
    }
}

const myCircle = new Circle(5);
myCircle.calculateArea();  


const myTriangle = new Triangle(10, 8);
myTriangle.calculateArea(); 


// Q-6 Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

  
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}


class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary); 
        this.department = department;
        this.bonus = bonus; 
    }
    calculateAnnualSalary() {
        return (this.salary * 12) + this.bonus;
    }


    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
        console.log(`Annual Salary (including bonus): $${this.calculateAnnualSalary()}`);
    }
}


const manager1 = new Manager("Param", 5000, "Marketing", 10000);
const manager2 = new Manager("Arshil", 7000, "IT", 10000);


manager1.displayDetails();
manager2.displayDetails();