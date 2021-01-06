function Pokemon(name, type, trainer = "Ash") {
  this.name = name;
  this.type = type;

  this.trainer = () => {
    return `${this.name}'s trainer is ${trainer}`;
  }
}

const charmander = new Pokemon('Charmander', 'Fire');

console.log(charmander.trainer());
