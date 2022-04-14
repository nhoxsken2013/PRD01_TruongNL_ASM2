const array = [1, 2, 3, 4];

function isEvenNumber(number) {
  if (number % 2 == 0) 
    return true;
  return false;
}

// thay oi o day dat ten lam sao cho hop ly
// hay la minh tach 2 ham nho roi bo vao vay
function getNumberAfterCaculate(number) {
  if (isEvenNumber(number) == true) 
    return number / 2;
  else 
    return number * 2;
}

function sumArray(array) {
  return array.reduce((accumulate, currentValue, currentIndex) => {
    if (currentIndex == 1) {
      accumulate = getNumberAfterCaculate(accumulate);
    }
    return accumulate + getNumberAfterCaculate(currentValue);
  });
}

console.log(sumArray(array));
