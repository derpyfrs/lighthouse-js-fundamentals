function countLetters(userInput) {
  var noSpaces = userInput.split(" ").join("").toLowerCase();
  var counter = {};

  for (var i = 0; i < noSpaces.length; i++) {
    if ( counter[noSpaces[i]] === undefined) {
      counter[noSpaces[i]] = 1;
  }
    counter[noSpaces[i]] += 1;
}
  return counter;

}

console.log(countLetters("lighthouse in the house"));