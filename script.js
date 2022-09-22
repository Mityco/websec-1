function isValid(input) {
    if(input.value.length < Number.EPSILON) {
        input.style.backgroundColor = "rgb(243, 247, 2)";
        return false;
    }
    return true;
}

function calculate() {
    let userChoice = document.getElementById("userChoice").value;
    let firstInputBox = document.getElementById("firstComponent");
    let secondInputBox = document.getElementById("secondComponent");
    firstInputBox.style.backgroundColor = "rgb(187, 255, 195)";
    secondInputBox.style.backgroundColor = "rgb(187, 255, 195)";
    let resultBox = document.getElementById("resultBox");
    if(!isValid(firstInputBox) || !isValid(secondInputBox)) {
        resultBox.innerHTML = "Ошибка! Все поля должны быть заполнены!";
        return;
    }
    let firstComponent = parseFloat(firstInputBox.value);
    let secondComponent = parseFloat(secondInputBox.value);
    let result;
    switch(userChoice) {
        case "+":
            result = firstComponent + secondComponent;
            break;
        case "-":
            result = firstComponent - secondComponent;
            break;
        case "*":
            result = firstComponent * secondComponent;
            break;
        case "/":
            if(Math.abs(secondComponent) < Number.EPSILON) {
                secondInputBox.style.backgroundColor = "rgb(243, 247, 2)";
                resultBox.innerHTML = "Ошибка! На ноль делить нельзя!";
                return;
            }
            else {
                result = firstComponent / secondComponent;
            }
            break;
    }
    resultBox.innerHTML = firstComponent + " " + userChoice + " " + secondComponent + " = " + result;
}