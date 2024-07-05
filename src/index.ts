function printInConsole(...arr: (number | string | boolean)[]): string {
  for (let i = 0; i < arr.length; i++) {
    console.log(`The Value Is ${arr[i]} And Type Is ${typeof arr[i]}`);
  }
  return "Done";
}

console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
