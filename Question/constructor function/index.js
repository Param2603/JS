// Q-1: Hotel Room Reservation System:
// Question: Suppose you’re building a reservation system for a hotel. Write a constructor function Room that creates a room object with properties like roomNumber, type, price, and isAvailable. Hint: Use the new keyword to create new room objects.
function Room (roomNumber,type,price,isAvailable){
    this.roomNumber = roomNumber;
    this.type = type;
    this.price = price;
    this.isAvailable = isAvailable;
}
console.log("Q-1. Output")

let room1 = new Room (108,"Duplex",3000,"Available")
console.log(room1)

let room2 = new Room (305,"Luxuary",4500,"Not-Available")
console.log(room2)

// Q-2: Online Course Management:
// Question: Design a constructor function Course that generates an object representing an online course with properties like title, instructor, duration, and studentsEnrolled. Hint: Use the this keyword to assign values to each property.
function Course (title, instructor, duration, studentsEnrolled){
    this.title = title;
    this.instructor = instructor;
    this.duration = duration;
    this.studentsEnrolled = studentsEnrolled;
}
console.log("Q-2. Output")

let course1 = new Course("Phython","Arshil","3 months",30)
console.log(course1)

let course2 = new Course("Java","Param","6 months",25)
console.log(course2)

// Q-3: Digital Wallet:
// Question: Create a constructor function Wallet that initializes a wallet object with properties like ownerName, balance, and currency. Include a method that allows the owner to add money to the wallet. Hint: Add methods inside the constructor to handle wallet operations.

function Wallet (ownerName, balance, currency){
    this.ownerName = ownerName;
    this.balance = balance;
    this.currency = currency;
}
console.log("Q-3. Output")

let wallet1 = new Wallet ("Param",5000,"$")
console.log(wallet1)

let wallet2 = new Wallet ("Arshil",4500,"$")
console.log(wallet2)

// Q-4: City Weather Tracker:
// Question: Write a constructor function Weather that creates a weather object with properties like city, temperature, humidity, and forecast. Create a method to update the forecast. Hint: Use the constructor to set initial values, and add a method to update properties.
function Weather (city, temperature, humidity, forecast){
    this.city = city;
    this.temperature = temperature;
    this.humidity = humidity;
    this.forecast = forecast;
}
console.log("Q-4. Output")

let ahmedabadData = new Weather ("Ahmedabad","30 C",)
console.log(ahmedabadData)

let jaipurData = new Weather ("Jaipur",)
console.log(jaipurData)

// Q-5: School Student Enrolment:
// Question: Write a constructor function Student that generates a student object with properties name, rollNumber, grade, and subjects. Add a method to add new subjects to the student’s subject list. Hint: Use the new keyword to create each student, and add a method to modify the object’s state.
function Student (name, rollNumber, grade, subjects){
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.subjects = subjects;
}
console.log("Q-5. Output")

let paramData = new Student ("Param",44,"A","Math")
console.log(paramData)

let arshilData = new Student ("Arshil",14,"A","")
console.log(arshilData)