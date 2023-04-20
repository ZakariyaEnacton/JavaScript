function personInfo() {
  let firstName = "Muhammad Zakariya";
  let lastName = "Bombaywala";

  function fullName() {
    return `Person full name is : ${firstName} ${lastName} `;
  }

  return fullName;
}

var info = personInfo();
console.log(info());
