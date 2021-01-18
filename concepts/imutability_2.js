const person = {
  name: 'John Doe',
  height: 2.00,
  city: 'New York',
}

// Mutable Code
// Attribution by reference
// const newPerson = person;

// newPerson.name = 'Sam';
// newPerson.height = 1.70;

// changePerson(newPerson);
// console.log(newPerson);

//End

// Imutable Mode

// Passage by reference
function changePerson(person) {
  const newPerson = { ...person };

  newPerson.name = 'Sam';
  newPerson.height = 1.70;

  return newPerson;
}

const newPerson = changePerson(person);

console.log(newPerson, person);

// Object.freeze()
