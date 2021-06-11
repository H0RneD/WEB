function ageChecker() {

const n = prompt('What is your name?');
const a = prompt('How old are u?');
console.log(n);
console.log(a);
if (a < 18) {
    confirm('You are not allowed to visit this website!')
}
if (a >= 18 && a < 21) {
    let c = confirm('Are you sure you want to continue?');
    if (c === true) {
        confirm('Welcome, ' + c + '!!!')
    } else {
        confirm('You are not allowed to visit this website!')
    }
}
if (age > 21) {
    alert(n + ' welcome!')
}
}
ageChecker();
