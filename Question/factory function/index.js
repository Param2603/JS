// Q-1: E-commerce Inventory Management:
// Question: Imagine you have an e-commerce site that sells electronics. You need a function that creates a product with properties like name, price, and category. Create a factory function called createProduct that returns an object for each product. Hint: Think of the factory function as a "blueprint" that creates different product objects with specified properties.

function createProduct (name,Price,category) {
    let product = {}
    product.name = name;
    product.price = Price;
    product.category = category;

    return product;
}
console.log("Q-1 Output")

let mobile = createProduct("Nothing",20000,"android")
console.log(mobile)

let computer = createProduct("lenovo",40000,"2016")
console.log(computer)

// Q-2: Student Report Card Generator:
// Question: Write a factory function createReportCard that generates a report card for each student with properties such as name, grade, and subject. This function should return an object for each student. Hint: Each student can have different grades, so think about how each object represents an individual student's information.

function createReportCard  (name,grade,subject){
    let object = {}
    object.name = name;
    object.grade = grade;
    object.subject = subject;

    return object;
}
console.log("Q-2 Output")

let paramData = createReportCard ("Param",90,"math")
console.log(paramData)

let dhruvData =  createReportCard ("Dhruv",85,"accounts")
console.log(dhruvData)

// Q-3: Car Rental Service:
// Question: Suppose you run a car rental service. Write a factory function createCar that creates a car object with properties like model, rentalRate, and availability. Use this to generate car instances for each vehicle in your fleet. Hint: Each car will have different values for these properties, so use a function that takes parameters for each property.

function createCar (model,rentalRate,availability){
    let car = {}
    car.model = model;
    car.rentalRate = rentalRate;
    car.availability = availability;

    return car;
}
console.log("Q-3 Output")

let audi = createCar ("Audi",35000,"2015")
console.log(audi)

let BMW = createCar ("BMW",40000,"2016")
console.log(BMW)

// Q-4: Library Book Generator:
// Question: Create a factory function createBook that generates a book object with properties such as title, author, ISBN, and availableCopies. Use this function to add books to a library inventory. Hint: Each book should have unique details, so think about how to pass these as arguments to the function.

function createBook (title,author,ISBN,availableCopies){
    let book = {}
    book.title = title;
    book.author = author;
    book.ISBN = ISBN;
    book.availableCopies = availableCopies;

    return book;
}

let book1 = createBook("War and Peace","Leo Tolstoy","978-0-06-112008-4",50)
console.log(book1)

let book2 = createBook ("!984","George Orwell","978-0-06-112008-4",100)
console.log(book2)

// Q-5: Employee Badge Creator:
// Question: Your company needs to generate badges for employees with properties like name, id, department, and position. Write a factory function createEmployeeBadge that returns an employee badge object. Hint: Use parameters in your factory function to create unique badge information for each employee.

function createEmployeeBadge (name, id, department, position){
    let employee
}