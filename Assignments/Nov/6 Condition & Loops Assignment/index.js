const person = { name: "John", age: 25, gender: "Male" };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
