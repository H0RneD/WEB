"use strict";

let a = +prompt('Введите первое число: ', '3');
let b = +prompt('Введите второе число: ', '4');
let znak = prompt('Введите операцию(+,-,*,/): ');
function res(a, b, znak)
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
alert(res(a, b, znak));