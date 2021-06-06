"use strict";

let n = prompt('Введите число:', '10');
let arr = [];
for( var a = 1; a <= n; a++)
    {
        if(a % 5 == 0)
            arr.push(a);
    }
if(arr.length == 0)
    {
       console.log(`----`);
    }
else 
    {
        console.log(arr);  
    }