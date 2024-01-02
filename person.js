class Person {
  constructor(firstName, lastName, age, department, email, mobile, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.department = department;
    this.email = email;
    this.mobile = mobile;
    this.city = city;
  }
  getPersonDetails() {
    return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            department: ${this.department}
            email: ${this.email}
            mobile: ${this.mobile}
            city: ${this.city}`;
  }
}
let person1 = new Person(
  "chandru",
  "vijayakumar",
  24,
  "Software Engineer",
  "chandruvijayakumar@gmail.com",
  6381951562,
  "Coimbatore"
);
let person2 = new Person(
  "jeeva",
  "vijayakumar",
  21,
  "Architecture",
  "jeevavijayakumar@gmail.com",
  6383317311,
  "Delhi"
);

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());
