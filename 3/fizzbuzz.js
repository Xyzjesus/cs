function* fizzbuzz(start = 1n, step = 1n, limit = 100n) {
  let num = start;
  while (num <= limit) {
    let output = "";
    if (num % 3n === 0n) output += "Fizz";
    if (num % 5n === 0n) output += "Buzz";
    yield output || num; // Возвращаем "Fizz", "Buzz", "FizzBuzz" или число
    num += step;
  }
}

const startValue = 1n;
const stepValue = 1n;
const limitValue = 100n;
const myFizzBuzz = fizzbuzz(startValue, stepValue, limitValue);

for (let value of myFizzBuzz) {
  console.log(value.toString());
}
