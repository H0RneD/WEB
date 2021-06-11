"use strict";

function createNewUser()
{
    this.Name1 = prompt('First Name: ');
    this.Name2 = prompt('Second Name: ');
    this.date = prompt('Ur birthday(dd.mm.yyyy): ');
    this.getLogin = function(){
        let getLogin =(this.Name1.substr(0,1) + this.Name2).toLowerCase();
        return getLogin;
    }
    this.getAge = function(){
        let now = new Date();
        let today = now.getFullYear();
        let d = +this.date.substring(0, 2);
        let m = +this.date.substring(3, 5);
        let y = +this.date.substring(6, 10);
        let newyear = new Date(y, m-1, d);
        let by = newyear.getFullYear();
        let age = today - by;
        if(now < new Date(newyear.setFullYear(today))){
            age = age -1;
        }
        return age;
    }
    this.getPassword = function(){
        let getPassword = (this.Name1[0].toUpperCase() + this.Name2.toLowerCase() + this.date.substring(6,10));
        return getPassword;
    }
    let newUser;
}
this.newUser = new createNewUser();
console.log(`Ваш логин: ${newUser.getLogin()}`);
console.log(`Ваш возраст: ${newUser.getAge()}`);
console.log(`Пароль: ${newUser.getPassword()}`);
