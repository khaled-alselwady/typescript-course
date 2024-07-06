enum enTrueFalse {
  True = "True",
  False = "False",
}
type Compare = enTrueFalse | "Error";

function yesOrNo(val: number | string): Compare {
  if (typeof val !== "number") {
    return "Error";
  }

  return val > 10 ? enTrueFalse.True : enTrueFalse.False;
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
