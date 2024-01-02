## 1.Class Movie
##### /*a.Write a constructor for the class Movie, 
###### which takes a String representing 
+ the title of the movie, 
+  a String representing the studio, 
+   a String representing  the rating as its arguments, 
+    sets the respective class properties to these values.*/

+ class Movie {
+  constructor(title, studio, rating = "PG") {
 +   this.title = title;
  +  this.studio = studio;
   + this.rating = rating;
+  }
#### Write a method getPG, which takes an array of base type Movie as its argument, 
+  returns a new array of only those movies in the input array with a rating of 
  ### "PG"
 + You may assume the input array is full of Movie instances.
 + The returned array need not be full.
+ + + + + + + + + + + + + 
  
 + static getPG(input) {
  +  let val = input.filter((Movie) => Movie.rating === "PG");
   + return val;
+  }
+ }
+ let ListOfMovies = [
+  new Movie("Sing 2", "Illumination", "PG"),
 + new Movie("The Impossible", "Telecinco Cinema", "R"),
  + new Movie("Pretty Woman", "Disney studios", "PG"),
+  new Movie("200 Pounds Beauty", "Colorpix Studio", "PG"),
 + new Movie("Hunger", "B&W Studio.", "PG"),
+ ];

#### Write a piece of code that creates an instance of the class Movie with the title
### the class Movie with the title “Casino Royale”, 
### the studio “Eon Productions”, 
### the rating “PG­13”*/

+ console.log(Movie.getPG(ListOfMovies));

+ let CasinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");
+ console.log(CasinoRoyale);

+ /****************************************************************************************************************************************

## 2.Circle
+ class Circle {
 + constructor(radius = 1.0, color = "red") {
  +  this._radius = radius;
   + this._color = color;
 + }

 + get radius() {
  +  return this._radius;
 + }

 + set radius(radius) {
  +  this._radius = radius;
+  }

+ get color() {
  +  return this._color;
 + }

  + set color(color) {
  +  this._color = color;
 + }

 + toString() {
  +  return `Circle [radius = ${this._radius} , color = ${this._color}]`;
 + }

 + getArea() {
  +  return Math.PI * Math.pow(this._radius, 2);
 + }

 + getCircumference() {
  +  return 2 * Math.PI * this._radius;
 + }
+ }

+ const circle1 = new Circle(2, "Blue");
+ const circle2 = new Circle(5, "Lavander");

+ console.log(circle1.toString());
+ console.log("Area:", circle1.getArea());
+ console.log("Circumference:", circle1.getCircumference());

+ console.log(circle2.toString());
+ console.log("Area:", circle2.getArea());
+ console.log("Circumference:", circle2.getCircumference());

/****************************************************************************************************************************************

## 3.Person

+ class Person {
  + constructor(firstName, lastName, age, department, email, mobile, city) {
    + this.firstName = firstName;
    + this.lastName = lastName;
    + this.age = age;
    + this.department = department;
    + this.email = email;
    + this.mobile = mobile;
    + this.city = city;
  }
 + getPersonDetails() {
  +  return `Name: ${this.firstName} ${this.lastName}
       +     age: ${this.age}
         +   department: ${this.department}
         +   email: ${this.email}
         +   mobile: ${this.mobile}
         +   city: ${this.city}`;
+  }
+}
+ let person1 = new Person(
 + "chandru",
 + "vijayakumar",
 + 24,
 + "Software Engineer",
 + "chandruvijayakumar@gmail.com",
 + 6381951562,
 + "Coimbatore"
+ );
+ let person2 = new Person(
  + "jeeva",
 + "vijayakumar",
+  21,
+  "Architecture",
 + "jeevavijayakumar@gmail.com",
 + 6383317311,
 + "Delhi"
+ );

+ console.log(person1.getPersonDetails());
+ console.log(person2.getPersonDetails());

/****************************************************************************************************************************************
## 4.UberPrice
+ class UberPrice {
 + constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
 +   this.distance = distance;
 +   this.duration = duration;
 +   this.baseFare = baseFare;
 +   this.costPerMile = costPerMile;
 +   this.costPerMinute = costPerMinute;
 + }

 + totalPrice() {
  +  return (
   +   this.baseFare +
    +  this.distance * this.costPerMile +
     + this.duration * this.costPerMinute
   + );
 + }
+ }

const myUber = new UberPrice(29, 23, 77, 92, 31, 56);
console.log("Uber Price is = ", myUber.totalPrice());
