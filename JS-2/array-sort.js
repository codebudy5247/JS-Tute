let a = [34, 67, 23, 7, 45, 924];


a.sort();
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

//sort
var numbers = [34, 67, 23, 7, 45, 924];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);

//Arrow function
let b = [34, 67, 23, 7, 45, 924];
b.sort((a, b) => a - b);
console.log(b);