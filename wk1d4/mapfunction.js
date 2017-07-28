var words = ["ground", "control", "to", "major", "tom"];

function map(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

console.log(map(words, function(word){
    return word.length;
  })
)