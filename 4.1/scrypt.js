"use strict";

function createNewUser()
{
    this.Name1 = prompt('First Name: ');
    this.Name2 = prompt('Second Name: ');
    this.getLogin = function(){
        let getLogin =(this.Name1.substr(0,1) + this.Name2).toLowerCase();
        return getLogin;
    }
    let newUser;
}
this.newUser = new createNewUser();
alert(`Ur login: ${newUser.getLogin()}`);
