class Animal {
  constructor(name, legCount, speaks) {
    (this.name = name), (this.legCount = legCount), (this.speaks = speaks);
  }

  // static method
  static myType() {
    console.log("Animal");
  }

  speak() {
    return `Hi im a ${this.name} and i ${this.speaks}`;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs.`;
  }
}

let dog = new Animal("doggie", 4, "bhow bhow"); // creates dog object

console.log(dog.speak());
console.log(dog.describe());

Animal.myType();
