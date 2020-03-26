//get the divs with the specifc Ids of each calculator button
const num1 = document.querySelector('div#num1');
const num2 = document.querySelector('div#num2');
const num3 = document.querySelector('div#num3');
const num4 = document.querySelector('div#num4');
const num5 = document.querySelector('div#num5');
const num6 = document.querySelector('div#num6');
const num7 = document.querySelector('div#num7');
const num8 = document.querySelector('div#num8');
const num9 = document.querySelector('div#num9');
const num0 = document.querySelector('div#num0');
const numDot = document.querySelector('div#numDot');
const numMult = document.querySelector('div#numMult');
const numDiv = document.querySelector('div#numDiv');
const numAdd = document.querySelector('div#numAdd');
const numSub = document.querySelector('div#numSub');
const numEqual = document.querySelector('div#numEqual');
const cc =  document.querySelector('div#cc');

//get the divs of history, display
const history =  document.querySelector('div#history');
const display =  document.querySelector('div#display');

//watch for the click in each button
num1.addEventListener('click', function(){clicar(num1);});
num2.addEventListener('click', function(){clicar(num2);});
num3.addEventListener('click', function(){clicar(num3);});
num4.addEventListener('click', function(){clicar(num4);});
num5.addEventListener('click', function(){clicar(num5);});
num6.addEventListener('click', function(){clicar(num6);});
num7.addEventListener('click', function(){clicar(num7);});
num8.addEventListener('click', function(){clicar(num8);});
num9.addEventListener('click', function(){clicar(num9);});
num0.addEventListener('click', function(){clicar(num0);});
numDot.addEventListener('click', function(){ponto(numDot);});
numMult.addEventListener('click', function(){operar(numMult);});
numDiv.addEventListener('click', function(){operar(numDiv);});
numAdd.addEventListener('click', function(){operar(numAdd);});
numSub.addEventListener('click', function(){operar(numSub);});
numEqual.addEventListener('click', function(){result(numEqual);});
cc.addEventListener('click', function(){clean(cc);});

//watch for numeric keyboard clicks
document.addEventListener("keydown", function(){keydown(event);});
document.addEventListener("keyup", function(){keyup(event);})

//watch for screen touchs
document.addEventListener("touchstart", function(){touchStart(event);});
document.addEventListener("touchend", function(){touchEnd(event);});
//prevent menu opening from long touch
oncontextmenu = function(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
}


//execute culculator button functions with numeric key presses and change css style for visual feedback
function keydown(e){
    //check which key was pressed
    switch(e.keyCode){
        case 96:
            num0.classList.add('numpadClick');
            clicar(num0);
            break
        case 97:
            num1.classList.add('numpadClick');
            clicar(num1);
            break
        case 98:
            num2.classList.add('numpadClick');
            clicar(num2);
            break
        case 99:
            num3.classList.add('numpadClick');
            clicar(num3);
            break
        case 100:
            num4.classList.add('numpadClick');
            clicar(num4);
            break
        case 101:
            num5.classList.add('numpadClick');
            clicar(num5);
            break
        case 102:
            num6.classList.add('numpadClick');
            clicar(num6);
            break
        case 103:
            num7.classList.add('numpadClick');
            clicar(num7);
            break
        case 104:
            num8.classList.add('numpadClick');
            clicar(num8);
            break
        case 105:
            num9.classList.add('numpadClick');
            clicar(num9);
            break
        case 110:
            numDot.classList.add('numpadClick');
            ponto(numDot);
            break
        case 194:
            numDot.classList.add('numpadClick');
            ponto(numDot);
            break
        case 106:
            numMult.classList.add('numpadClick');
            operar(numMult);
            break
        case 111:
            numDiv.classList.add('numpadClick');
            operar(numDiv);
            break
        case 107:
            numAdd.classList.add('numpadClick');
            operar(numAdd);
            break
        case 109:
            numSub.classList.add('numpadClick');
            operar(numSub);
            break
        case 46:
            cc.classList.add('numpadClick');
            clean(cc);
            break
        case 13:
            numEqual.classList.add('numpadClick');
            result(numEqual);
            break
    }  
}

//remove css style with numpad click for visual feedback
function keyup(e){
    //check which key was pressed
    switch(e.keyCode){
        case 96:
            num0.classList.remove('numpadClick');
            break
        case 97:
            num1.classList.remove('numpadClick');
            break
        case 98:
            num2.classList.remove('numpadClick');
            break
        case 99:
            num3.classList.remove('numpadClick');
            break
        case 100:
            num4.classList.remove('numpadClick');
            break
        case 101:
            num5.classList.remove('numpadClick');
            break
        case 102:
            num6.classList.remove('numpadClick');
            break
        case 103:
            num7.classList.remove('numpadClick');
            break
        case 104:
            num8.classList.remove('numpadClick');
            break
        case 105:
            num9.classList.remove('numpadClick');
            break
        case 110:
            numDot.classList.remove('numpadClick');
            break
        case 194:
            numDot.classList.remove('numpadClick');
            break
        case 106:
            numMult.classList.remove('numpadClick');
            break
        case 111:
            numDiv.classList.remove('numpadClick');
            break
        case 107:
            numAdd.classList.remove('numpadClick');
            break
        case 109:
            numSub.classList.remove('numpadClick');
            break
        case 46:
            cc.classList.remove('numpadClick');
            break
        case 13:
            numEqual.classList.remove('numpadClick');
            break
    }  
}

//execute culculator button functions with numeric key presses and change css style for visual feedback
function touchStart(e){
    //check which key was pressed
    switch(e.target.id){
        case 'num0':
            num0.classList.add('numpadClick');
            break
        case 'num1':
            num1.classList.add('numpadClick');
            break
        case 'num2':
            num2.classList.add('numpadClick');
            break
        case 'num3':
            num3.classList.add('numpadClick');
            break
        case 'num4':
            num4.classList.add('numpadClick');
            break
        case 'num5':
            num5.classList.add('numpadClick');
            break
        case 'num6':
            num6.classList.add('numpadClick');
            break
        case 'num7':
            num7.classList.add('numpadClick');
            break
        case 'num8':
            num8.classList.add('numpadClick');
            break
        case 'num9':
            num9.classList.add('numpadClick');
            break
        case 'numDot':
            numDot.classList.add('numpadClick');
            break
        case 'numMult':
            numMult.classList.add('numpadClick');
            break
        case 'numDiv':
            numDiv.classList.add('numpadClick');
            break
        case 'numAdd':
            numAdd.classList.add('numpadClick');
            break
        case 'numSub':
            numSub.classList.add('numpadClick');
            break
        case 'cc':
            cc.classList.add('numpadClick');
            break
        case 'numEqual':
            numEqual.classList.add('numpadClick');
            break
    }  
}

//remove css style with numpad click for visual feedback
function touchEnd(e){
    //check which key was pressed
    switch(e.target.id){
        case 'num0':
            num0.classList.remove('numpadClick');
            break
        case 'num1':
            num1.classList.remove('numpadClick');
            break
        case 'num2':
            num2.classList.remove('numpadClick');
            break
        case 'num3':
            num3.classList.remove('numpadClick');
            break
        case 'num4':
            num4.classList.remove('numpadClick');
            break
        case 'num5':
            num5.classList.remove('numpadClick');
            break
        case 'num6':
            num6.classList.remove('numpadClick');
            break
        case 'num7':
            num7.classList.remove('numpadClick');
            break
        case 'num8':
            num8.classList.remove('numpadClick');
            break
        case 'num9':
            num9.classList.remove('numpadClick');
            break
        case 'numDot':
            numDot.classList.remove('numpadClick');
            break
        case 'numMult':
            numMult.classList.remove('numpadClick');
            break
        case 'numDiv':
            numDiv.classList.remove('numpadClick');
            break
        case 'numAdd':
            numAdd.classList.remove('numpadClick');
        case 'numSub':
            numSub.classList.remove('numpadClick');
            break
        case 'cc':
            cc.classList.remove('numpadClick');
            break
        case 'numEqual':
            numEqual.classList.remove('numpadClick');
            break
    }  
}