var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// students.sort(function(list1,list2){
//   return list1.age - list2.age;
// })

function compare(a,b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return a.age - b.age;
  }
}

students.sort(compare);

console.log(students)