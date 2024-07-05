function calculate(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(calculate(10, 20)); // 30
//console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2