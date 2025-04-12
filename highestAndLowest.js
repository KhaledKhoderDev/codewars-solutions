// 7Kyu problem Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// solution1:
function highAndLow(numbers) {
  let numArray = [];
  let current = '';

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== ' ') {
      current += numbers[i];
    } else {
      if (current !== '') {
        numArray.push(parseInt(current));
        current = '';
      }
    }
  }

  if (current !== '') {
    numArray.push(parseInt(current));
  }

  let max = numArray[0];
  let min = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > max) max = numArray[i];
    if (numArray[i] < min) min = numArray[i];
  }

  return max + ' ' + min;
}

console.log('output for first sloution');
console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5'));

// solutino2:

function highAndLow(numbers) {
  const numArray = numbers.split(' ').map(Number);

  const max = Math.max(...numArray);
  const min = Math.min(...numArray);

  return `${max} ${min}`;
}
console.log('output for second sloution');
console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5'));
