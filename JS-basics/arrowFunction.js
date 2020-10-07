/*Basic Arrow Function.*/

let sum = (a, b) => a + b;
console.log(sum(3, 5));

//only one argument.

let double = n => n * 2;
console.log(double(3));

//No Argument.

let sayHi = () => console.log('Hello');

sayHi();

//Multiline arrowFunction.

let add = (a, b) => {
    let result = a + b;
    return result; //explicit return
};
console.log(add(4, 5));

// An empty arrow function returns undefined.
let empty = () => {};