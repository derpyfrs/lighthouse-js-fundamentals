function countLetters(userInput) {
  var noSpaces = userInput.toLowerCase();
  var counter = {};

  for (var i = 0; i < noSpaces.length; i++) {
   if( noSpaces[i] !== " ") {
    if ( counter[noSpaces[i]] === undefined) {
      counter[noSpaces[i]] = [];
    }
    counter[noSpaces[i]].push(i) ;
  }

}

  // for (var i = 0; i < noSpaces.length; i++) {
  //       if ( noSpaces.match(/[i]/)) {
  //     counter[noSpaces[i]] += " :" + [i+1 // correction for zero based position];
  //   }
  // }
  return counter;

}

console.log(countLetters("lighthouse in the house"));