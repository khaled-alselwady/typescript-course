// Create Enums + Function Here
function getInsaneScore(num: number) {
  return num - Game.Hard;
}
enum Game {
  Easy = 100,
  Medium = Easy - 20,
  Hard = Medium - Easy / 2,
  Insane = getInsaneScore(50),
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
