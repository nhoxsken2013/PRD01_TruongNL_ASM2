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

function getAnimalsHaveLetterT(animals) {
  return animals.filter((animal) => {
    if (isHaveLetterT(animal.name) == true)
      return `name: ${animal.name} 
            size: ${animal.size} 
            weight: ${animal.weight}`;
  });
}
console.log(getAnimalsHaveLetterT(animals));
