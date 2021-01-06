class Pokemon {
  constructor(name, type, trainer) {
    this.name = name;
    this.type = type;
    this._trainer = trainer;
  }

  get trainer() {
    return `${this.name}'s trainer is ${this._trainer}`;
  }

  set trainer(newTrainer) {
    this._trainer = newTrainer.toUpperCase();
  }
}

const pokemon = new Pokemon('Charmander', 'Fire', 'Ash');

pokemon.trainer = 'red';

console.log(pokemon.trainer);