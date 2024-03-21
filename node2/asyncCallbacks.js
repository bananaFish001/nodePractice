function sum(first, second, callback) {
    console.log(`The sum of ${first} and ${second} is ${first + second}.`);
    callback();
}
:
function disp() {
    console.log('This must be printed after addition');
}

sum(5, 6, disp);  

