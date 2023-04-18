var user = ["Jhon", "David", "Tim", "Sam", "Mitchel"];

// console.log(user.slice(2, 4)); // splice(strtIndex,endIndex(exclusive))

// here take the value from index one to index three and change with "Hello"  o/p : ['Jhon','Hello','Mitchel'] 
user.splice(1, 3, "Hello") // splice(index, count, value) 

console.log(user)