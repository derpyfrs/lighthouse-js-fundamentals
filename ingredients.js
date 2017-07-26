var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var index = 0
// Write a while loop that prints out the contents of ingredients:
while (index < 8) {
  console.log(ingredients[index]);
  index++;
}
// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[index]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length - 1; i >= 0 i--) {
  console.log(ingredients[i]);
}