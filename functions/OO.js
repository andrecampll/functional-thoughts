class Pokemon {
  constructor(name, type, trainer) {
    this.name = name;
    this._type = type;
    this._trainer = trainer;
  }

  get trainer() {
    return `${this.name}'s trainer is ${this._trainer}`;
  }

  set trainer(newTrainer) {
    this._trainer = newTrainer.toUpperCase();
  }
}

Pokemon.prototype.attack = function() {
  console.log(`${this.name} is attacking`);
}

Object.defineProperty(Pokemon.prototype, 'type', {
  get: function() {
    return this._type;
  },
});

const pokemon = new Pokemon('Charmander', 'Fire', 'Ash');

pokemon.trainer = 'red';
pokemon.attack();

console.log(pokemon.type);

// console.log(pokemon.trainer);