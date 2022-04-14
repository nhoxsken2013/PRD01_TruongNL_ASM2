const animals = [
  {
    name: "cat",
    size: "small",
    weight: 5,
  },
  {
    name: "dog",
    size: "medium",
    weight: 10,
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000,
  },
];

function isHaveLetterT(word) {
  return word.includes("t");
}

function getInfoOfAnimals(animals) {
  return animals.map((animal) => {
    return `name: ${animal.name} - size: ${animal.size} - weight: ${animal.weight}kg `;
  });
}

function getInfoAnimalsHaveLetterT(animals) {
  return animals.map((animal) => {
    if (isHaveLetterT(animal) == true) {
      return getAnimalsHaveLetterT(animal);
    }
  });
}

console.log(getAnimalsHaveLetterT(animals));
