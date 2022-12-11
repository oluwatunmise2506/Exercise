
function subtractNumbers()
{
 let firstNumber = document.getElementById("firstNumber").value
 let secondNumber = document.getElementById("secondNumber").value
 if (secondNumber > firstNumber) {
    alert("First number must be greater than second number")
    return;
    
 } else {
    let result = firstNumber - secondNumber

    document.getElementById("showAnswer").innerHTML ="the answer is " + result
 }
 
 }