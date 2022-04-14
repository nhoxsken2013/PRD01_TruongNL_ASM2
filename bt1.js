const array = [1, 2, 3, 4];

function isEvenNumber(number) {
  if (number % 2 == 0) return true;
  return false;
}

function multipleTwoEvenNumber(numbers) {
  return numbers.map((number) => {
    if (isEvenNumber(number) == true) {
      number = number * 2;
    }
    return number;
  });
}
console.log(multipleTwoEvenNumber(array));
