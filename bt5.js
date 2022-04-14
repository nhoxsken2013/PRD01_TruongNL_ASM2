const array = [1, 2, 3, 4];

function isEvenNumber(number) {
  if (number % 2 == 0) 
    return true;
  else 
    return false;
}

function multipleTwoEvenNumber(number) {
  if (isEvenNumber(number) == true) 
    return number * 2;
  else 
    return number;
}

function sumArray(array) {
  return array.reduce((accumulate, currentValue) => {
    return accumulate + multipleTwoEvenNumber(currentValue);
  });
}

console.log(sumArray(array));
