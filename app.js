var Calculator = {
    screenContainer: document.getElementsByClassName('screen')[0],
    numbersInString: '',
    getSymbol: function(number) {
        Calculator.numbersInString = Calculator.numbersInString + String(number);
        Calculator.screenContainer.innerHTML = Calculator.numbersInString;
        return Calculator.numbersInString;
    },
    calculation : function(){
        Calculator.screenContainer.innerHTML = eval(Calculator.numbersInString);
    },
    clear : function(){
        Calculator.screenContainer.innerHTML = "0";
        Calculator.numbersInString = "";
    }
}