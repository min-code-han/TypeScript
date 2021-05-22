/**
 * Let's make a calculator 🧮
 */
function calculate(name: string, a: number, b: number) {
  if (name === 'add') {
    return a + b;
  }
  if (name === 'substract') {
    return a + b;
  }
  if (name === 'multiply') {
    return a * b;
  }
  if (name === 'divide') {
    return a / b;
  }
  if (name === 'remainder') {
    return a % b;
  }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
