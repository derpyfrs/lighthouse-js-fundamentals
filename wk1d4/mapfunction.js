var words = ["ground", "control", "to", "major", "tom"];

function map(arr, cb) {
  var list = [];
  for (var i = 0; i < arr.length; i++) {
    list.push(cb(arr[i]));
  }
  return list;
}

console.log(map(words, function(word){
    return word.length;
  })
)