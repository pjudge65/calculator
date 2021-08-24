

function add(num1, num2){
    return Number(num1) + Number(num2);

}

function subtract(num1, num2) {
    return num1 - num2;

}

function multiply(num1, num2) {
    return num1 * num2;

}

function divide(num1, num2){
    return num1 / num2;

}

function operate(operator, num1, num2){
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            /*if (num2 == 0) {
                alert("You are attempting the impossible. Please try again")
                return 0;
            } */
            return divide(num1, num2);
            break;   
    }
}

function populateDisplay() {
    
    const displayBox = document.querySelector("#output");
    //number that we're currently creating through clicking the number buttons
    let currentNumInput = "";
    //number to be stored once the first number has been created and the operator button been chosen
    let firstNum = "";
    //operator to be sent to the operate function after first number is created. 
    //Once operator button is clicked, signals that the first number is complete
    let currentOperator = "";
    isSecondNum = false;


    const numberButtonsDiv = document.querySelector(".numberButtons");
    //select all the buttons within numberButtonsDiv
    const numberButtons = numberButtonsDiv.querySelectorAll('button');

    //adding event listener for each number button to change the display number to the buttons' text content
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            currentNumInput += button.textContent;
            console.log(`currentNumInput: ${currentNumInput} ------ firstNum: ${firstNum} ------ currentOperator: ${currentOperator} ------ isSecondNum: ${isSecondNum}`);
            displayBox.textContent = currentNumInput;
            //displayBox.textContent = button.textContent;

        
        });
        
    });


    const periodButton = document.querySelector("#dot");

    periodButton.addEventListener("click", () => {
        if (currentNumInput.indexOf(".") == -1) {
        currentNumInput += periodButton.textContent;
        console.log(`currentNumInput: ${currentNumInput} ------ firstNum: ${firstNum} ------ currentOperator: ${currentOperator} ------ isSecondNum: ${isSecondNum}`);
        displayBox.textContent = currentNumInput;
        }
    });

    const backspaceButton = document.querySelector("#backspace");

    backspaceButton.addEventListener("click", () => {
        if (currentNumInput != "00000" || currentNumInput != "") {
            currentNumInput = currentNumInput.substr(0, currentNumInput.length -1);
            displayBox.textContent = currentNumInput;
            if (currentNumInput.length===0) {
                displayBox.textContent = "00000";
            }
        }
    });






    const operatorButtonsDiv = document.querySelector(".operatorButtons");
    const operatorButtons = operatorButtonsDiv.querySelectorAll('button');

    operatorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (isSecondNum == true) {
                console.log("ISSECONDNUM = TRUE");
                console.log(`currentNumInput: ${currentNumInput} ------ firstNum: ${firstNum} ------ currentOperator: ${currentOperator} ------ isSecondNum: ${isSecondNum}`);
                firstNum = operate(currentOperator, firstNum, currentNumInput);
                displayBox.textContent = Math.round(firstNum * 1000000)/1000000;
                currentNumInput = "";
                currentOperator = button.textContent;
            }
            else {
                firstNum = currentNumInput;
                currentNumInput = "";
                currentOperator = button.textContent;
                isSecondNum = true;
                console.log("ISSECONDNUM = FALSE");
                console.log(`currentNumInput: ${currentNumInput} ------ firstNum: ${firstNum} ------ currentOperator: ${currentOperator} ------ isSecondNum: ${isSecondNum}`);
            }
        });
    });






    const equalButton = document.querySelector("#equals");
    equalButton.addEventListener("click", () => {


        if (!currentOperator) {
            if (!currentNumInput) {
                displayBox.textContent = "0";
            }
            else {
                displayBox.textContent = currentNumInput;
            }
            

        }
        else if (currentOperator && !currentNumInput) {
            displayBox.textContent = firstNum;
        }
        else {
            if (currentOperator == "/" && currentNumInput == "0") {
                alert("Don't break the Universe Please!");
            }
            else {
                displayBox.textContent = Math.round(operate(currentOperator, firstNum, currentNumInput) * 100000000)/100000000;
            }
        }
        firstNum = "";
        currentNumInput = "";
        currentOperator = "";
        isSecondNum = false;
        console.log(`currentNumInput: ${currentNumInput} ------ firstNum: ${firstNum} ------ currentOperator: ${currentOperator} ------ isSecondNum: ${isSecondNum}`);

    })

    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", () => {
        displayBox.textContent = "00000";
        currentNumInput = "";
        firstNum = "";
        currentOperator = "";
        isSecondNum = false;
        console.log(`currentNumInput: ${currentNumInput} ------ firstNum: ${firstNum} ------ currentOperator: ${currentOperator} ------ isSecondNum: ${isSecondNum}`);
    });








}

populateDisplay();

/* FOR populateDisplay() we need to figure out how to concatenate the numbers so that "23" is displayed when you hit "2" and "3" instead of one then the other.

//FUNCTION CLEAR RUN WHEN THE CLEAR BUTTON IS HIT 
//------------------------------------------------
//Clears the display to 0000000 [COMPLETE IN populateDisplay()]
//            AND 
//clears out any temporary num and/or operator values stored



/*for the main function we need:
- a temp val for num1 that concatenates for every button press UNTIL it hits the operater
- temp val for operator
- temp val for num2 that is concatenated for every button press UNTIL EITHER 
-        = is hit      OR   another operator is hit THEN
                            store the value of operate into num1 then keep going until = is hit
-  Access the clear button so that when it's hit, num1, num2, and operator reset to nothing (0?)




*/