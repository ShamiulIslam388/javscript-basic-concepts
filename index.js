// oop in javascript

// create a class
class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// create an ingeritence
class Type extends Player {
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
  }
  play() {
    console.log(
      `${this.name} is ${this.age} years old ${this.country} ${this.type} player`
    );
  }
}

const masrafi = new Player("Masrafi", 38);
const shakib = new Player("Shakib", 32);

const bdCricketer = new Type("Masrafi", 38, "Cricket", "Bangladesh");
console.log(bdCricketer.play());
const argFootballer = new Type("Messi", 37, "Football", "Argentina");
console.log(argFootballer.play());
