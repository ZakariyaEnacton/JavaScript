var name = "EnactOn" // access everywhere in the code

console.log('Line number 3', name);

function myFunction() {
    var name = "Enacton Pvt Ltd." // access only in this myFunction()
    console.log('Line number 6', name);
    myFunctionTwo();

    function myFunctionTwo() {
        var name = "EnactSoft" // access only in myFunctionTwo()
        console.log("Line number 12", name);
    }
}

myFunction();