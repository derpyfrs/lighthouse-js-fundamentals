var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(lala){
  results = Math.sqrt(lala.x * lala.x + lala.y * lala.y)
  console.log(results);
  return results
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);