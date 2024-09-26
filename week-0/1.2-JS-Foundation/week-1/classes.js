class Car {
  constructor(brand, doors, color) {
    this.brand = brand;
    this.doors = doors;
    this.color = color;
  }

  static typeOf() {
    console.log("Car Class");
  }

  describe() {
    console.log(`${this.brand} of ${this.color} color with ${this.doors}`);
  }
}

// instance of a Car class.
const ferrari = new Car("ferrari", 2, "red");
ferrari.describe();

// invoking a static method
Car.typeOf();
