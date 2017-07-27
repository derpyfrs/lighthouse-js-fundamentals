// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  i = 0;
  arr.forEach(function(name) {

    if (name === "Waldo") {
      found(i);
    }
    i++;
  });
}

function actionWhenFound(derp) {
  console.log("Found him at index " + derp + " !");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);