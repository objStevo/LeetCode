//The below three examples are identical

//Example 1
function Animals(name, age) {
    this.name = name;
    this.age = age;
  }
  Animals.prototype.sing = function () {
    return `${this.name} can sing`;
  };
  Animals.prototype.dance = function () {
    return `${this.name} can dance`;
  };
  
  function Cats(name, age, whiskerColor) {
    Animals.call(this, name, age);
    this.whiskerColor = whiskerColor;
  }
  Cats.prototype.whiskers = function () {
    return `I have ${this.whiskerColor} whiskers`;
  };
  
  Object.setPrototypeOf(Cats.prototype, Animals.prototype);
  const clara = Cats("Clara", 33, "purple");
  
  // Example 2
  class Animals {
      constructor(name, age) {
          this.name = name;
          this.age = age;
      }
      sing() {
          return `${this.name} can sing`;
      }
      dance() {
          return `${this.name} can dance`;
      }
  } 
  class Cats extends Animals {
      constructor(name, age, whiskerColor) {
          super(name, age);
          this.whiskerColor = whiskerColor;
      }
      whiskers() {
          return `I have ${this.whiskerColor} whiskers`;
      }
  }
  let clara = new Cats("Clara", 33, "indigo");
  
  //Example 3
  
  function Animals(name, age) {
      let newAnimal = Object.create(animalConstructor);
      newAnimal.name = name;
      newAnimal.age = age;
      return newAnimal;
  }
  let animalConstructor = {
      sing: function() {
          return `${this.name} can sing`;
      },
      dance: function() {
          return `${this.name} can dance`;
      }
  }
  function Cats(name, age, whiskerColor) {
      let newCat = Animals(name, age);
      Object.setPrototypeOf(newCat, catConstructor);
      newCat.whiskerColor = whiskerColor;
      return newCat;
  }
  let catConstructor = {
      whiskers() {
          return `I have ${this.whiskerColor} whiskers`;
      }
  }
  Object.setPrototypeOf(catConstructor, animalConstructor);
  const clara = Cats("Clara", 33, "purple");
  
