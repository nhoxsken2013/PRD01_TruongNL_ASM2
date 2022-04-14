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

function isWeightMoreThanFifty(weight) {
  if (weight > 50) return true;
  else return false;
}

function printAnimalsMoreThanFifty(animals) {
  return animals.filter((animal) => {
    if (isWeightMoreThanFifty(animal.weight) == true)
      return `name: ${animal.name} 
            size: ${animal.size} 
            weight: ${animal.weight}`;
  });
}

console.log(printAnimalsMoreThanFifty(animals));
