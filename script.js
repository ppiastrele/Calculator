//calculator parameters
let firstNumber = null;
let secondNumber = null;
let res = false;

//clicar function receive the document pointer of the button clicked
function clicar(button){
    //if result is on disply than delete it and start a new operation with a textContent
    if(res){
        res = false;
        firstNumber = null;
        secondNumber = null;
        display.textContent = button.textContent;
        history.textContent = button.textContent;
    }
    else if(display.textContent.length < 14){
        //check if the display already has a number in it
        if(display.textContent !== '' && !displaySignal()){
            //if it has, simply concatenate the buttons textContent
            display.textContent += button.textContent;
            history.textContent += button.textContent;
        }
        //check if there is a signal for negative first number
        else if(history.textContent === '-'){
            display.textContent += button.textContent;
            history.textContent += button.textContent;
        }
        //check if there is a signal for negative second number
        else if(display.textContent === '-' && (history.textContent.includes(' + -') || history.textContent.includes(' - -') || history.textContent.includes(' * -') || history.textContent.includes(' / -') ) ){
            display.textContent += button.textContent;
            history.textContent += button.textContent;
        }
        //check if has a signal at all
        else if(displaySignal()){
            display.textContent = button.textContent;
            history.textContent += button.textContent;
        }
        //if it hasn't substitute the textContent for the buttons textContent
        else{
            display.textContent = button.textContent;
            history.textContent = button.textContent;
        }
    }
}

//ponto function receive the document pointer of the button clicked
function ponto(button){
    //if result is on disply than delete it and start a new operation with a textContent
    if(res){
        res = false;
        firstNumber = null;
        secondNumber = null;
        display.textContent = button.textContent;
        history.textContent = button.textContent;
    }
    //check if the display already has a dot in it
    else if(!hasDot()){
        if(display.textContent.length < 13)
        {
            //if it doesn't than add it if the display already has number
            if(display.textContent !== '' && display.textContent !== '+' && display.textContent !== '-' && display.textContent !== '*' && display.textContent !== '/'){
                display.textContent += button.textContent;
                history.textContent += button.textContent;
            }
             //check if there is a signal for negative first number
            else if(history.textContent === '-'){
                display.textContent += button.textContent;
                history.textContent += button.textContent;
            }
            //check if there is a signal for negative second number
            else if(display.textContent === '-' && (history.textContent.includes(' + -') || history.textContent.includes(' - -') || history.textContent.includes(' * -') || history.textContent.includes(' / -') ) ){
            display.textContent += button.textContent;
            history.textContent += button.textContent;
            }
            //or substitute the operator for textContent
            else if(display.textContent === '+' || display.textContent === '-' || display.textContent === '*' || display.textContent === '/'){
                display.textContent = button.textContent;
                history.textContent += button.textContent;
            }
            //or substitute the nothing for textContent
            else{
                display.textContent = button.textContent;
                history.textContent = button.textContent;
            }
        }
    }
}

//operar function receive the document pointer of the button clicked
function operar(button){
    //check if the display is empty  or if it only has a dot or if only has a signal or if result is on siplay
    if(history.textContent !== '' && display.textContent !== '.' && display.textContent !== '-.' && !displaySignal() && !res){
        //check if display already has an operator
        if(!hasOperator()){
            //if it doesn't than add the button textContent to the display and put the first number inside firstNumber
            firstNumber = display.textContent;
            display.textContent = button.textContent;
            history.textContent += ` ${button.textContent} `;
        }
    }
    //situation to add minus signal before first number
    else if(button.textContent === '-' && history.textContent === '' ){
        display.textContent = button.textContent;
        history.textContent = `-`;
    }
    //situation to add minus signal before second number
    else if(button.textContent === '-' && displaySignal() && history.textContent !== '-'){
        if(!history.textContent.includes(' + -') && !history.textContent.includes(' - -') && !history.textContent.includes(' / -') && !history.textContent.includes(' * -')){
            display.textContent = `-`;
            history.textContent += `-`;
        }
    }
    //situation where - is clicked with result on display to start a new operation with a negative number
    else if(button.textContent === '-' && res){
        res = false;
        firstNumber = null;
        secondNumber = null;
        display.textContent = button.textContent;
        history.textContent = button.textContent;
    }
}

//operates and show the result
function result(button){
    //check if the first number was added and if the display is not an opratin which garantees that we have the second number on display
    if(resultReady()){
        
        //stores the second number
        secondNumber = display.textContent;
        let n = null;

        //check the opration used
        if(history.textContent.includes(' + ')){
            n = Number(firstNumber) + Number(secondNumber);
            console.log(`${firstNumber} + ${secondNumber} = ${n}`);
        }
        else if(history.textContent.includes(' - ')){
            n = Number(firstNumber) - Number(secondNumber);
            console.log(`${firstNumber} - ${secondNumber} = ${n}`);
        }
        else if(history.textContent.includes(' * ')){
            n = Number(firstNumber) * Number(secondNumber);
            console.log(`${firstNumber} * ${secondNumber} = ${n}`);
        }
        else if(history.textContent.includes(' / ')){
            n = Number(firstNumber) / Number(secondNumber);
            console.log(`${firstNumber} / ${secondNumber} = ${n}`);
        }
        
        //check if the string has an 'e' of error in it or if the result it too big
        if(!String(n).includes('e') && n < 100000000000000){
            //if not it trims the string for disply purposes and shows it
            n = String(n).substring(0, 15);
            display.textContent = n;
        }
        else{
            //if it does display error
            display.textContent = 'error';
        }
        
        //reset the calculator parameters for safety
        res = true;
        firstNumber = null;
        secondNumber = null;
        n = null;

    }
}

//cleans the display, history and calculator parameters
function clean(button){
    res = false;
    firstNumber = null;
    secondNumber = null;
    display.textContent = '';
    history.textContent = '';
}


//check if history string has an operator already
function hasOperator(){
    if(history.textContent.includes(' - ') || history.textContent.includes(' + ') || history.textContent.includes(' * ') || history.textContent.includes(' / ')){
        return true;
    }
    else{
        return false;
    }
}

//check if display string has a dot already
function hasDot(){
    if(display.textContent.includes('.')){
        return true;
    }
    else{
        return false;
    }
}

//check if the display has only an operator in it
function displaySignal(){
    if(display.textContent === '+' || display.textContent === '-' || display.textContent === '*' || display.textContent === '/'){
        return true; 
    }
    else{
        return false;
    }
}

//check if all the conditions to finish calculations exist
function resultReady(){
    return firstNumber !== null && display.textContent !== '' &&
     display.textContent !== '+' && display.textContent !== '-' &&
      display.textContent !== '*' && display.textContent !== '/' &&
       display.textContent !== '.' && display.textContent !== '-.';
} 
