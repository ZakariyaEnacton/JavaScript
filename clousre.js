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

// reference clousre

function firstName(fname) {
  return function (lname) {
    return `My full name is : ${fname} ${lname}`;
  };
}

var myInfo = firstName("Muhammad Zakariya");
console.log(myInfo("Bombaywala"));


console.log(firstName(fname)(lname));
