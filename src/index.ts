// Write Function Code Here
function showTypes<T = void, S = void, W = void>(
  val1?: T,
  val2?: S,
  val3?: W
): string {
  let result = "";
  result = typeof val1 === "string" ? `${val1}` : "Nothing";
  result += typeof val2 === "number" ? ` - ${val2}` : " - Nothing";
  result += typeof val3 === "boolean" ? ` - ${val3}` : " - Nothing";

  return result;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
