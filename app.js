var Calculator = {
    screenContainer: document.getElementsByClassName('screen')[0],
    numbersInString: '',
    buttons: document.getElementsByClassName('keys__btn'),
    actions: document.getElementsByClassName('action'),
    getSymbol: function(number) {
        Calculator.numbersInString = Calculator.numbersInString + String(number);
        Calculator.screenContainer.innerHTML = Calculator.numbersInString;
    },
    calculation : function(){
        Calculator.screenContainer.innerHTML = eval(Calculator.numbersInString);
    },
    clear : function(){
        Calculator.screenContainer.innerHTML = "0";
        Calculator.numbersInString = "";
    }
}


document.addEventListener('keyup', function(event){
    code = event.key;

    if(/^\d+$/.test(code)){
        Calculator.getSymbol(code);
        
        for(let i = 0; i < Calculator.buttons.length; i++){
            let tempElem = Calculator.buttons[i];
            if (tempElem.innerHTML == event.key){
                tempElem.classList.add('key-hover');
                setTimeout(function(){ tempElem.classList.remove('key-hover') }, 100);
            }
        }
    } else if (code == '/' || code == '*' || code == '-' || code == '+') {
        Calculator.getSymbol(code);

        // for(let e = 0; i < Calculator.actions.length; i++){
        //     let tempElem = Calcuelator.actions[i];
        //     if (tempElem.innerHTML == event.key){
        //         tempElem.classList.add('key-hover');
        //         setTimeout(function(){ tempElem.classList.remove('key-hover') }, 100);
        //     }
        // }|
    } else if (event.code == 'NumpadEnter' || event.code == 'Enter'){
        Calculator.calculation()
    } else if (code == 'Delete'){
        Calculator.clear();
    }
    console.log(event.key);
})










// this is code to move div objects using javascript

dragElement(document.getElementById("body"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
























// let btn = document.getElementById('button');
// let text = document.getElementById('textArea');
// let inp = document.getElementById('input');

// // button function start


// function testFunc(name){
//     textArea.innerHTML = name;
// }
// function mainFunction(){    
//     let userName = prompt("please enter user name");
//     testFunc(userName);
// }

// // button function finish

// function inputFunction(){
//     let inputValue = inp.value;
//     text.innerHTML= inputValue;
// }

// btn.addEventListener('click', mainFunction);
// inp.addEventListener('keyup', inputFunction);
