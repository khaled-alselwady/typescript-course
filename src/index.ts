enum enYesNo {
  Yes = "Yes",
  No = "No",
}

type custom = enYesNo | "Error";

function isHeOld(age: number | string): custom | number {
  if (typeof age !== "number") {
    return "Error";
  }

  return age > 40 ? enYesNo.Yes : enYesNo.No;
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
