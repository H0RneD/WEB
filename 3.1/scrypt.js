"use strict";

let a = +prompt('First number: ', '3');
let b = +prompt('Second Number: ', '4');
let znak = prompt('Operation(+,-,*,/): ');
function CalcResult(a, b, znak)
{
    switch(znak)
        {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }
    }
alert(CalcResult(a, b, znak));