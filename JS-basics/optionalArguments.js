function square(x) {
    return x * x;
}
//function ignores the extra argument
console.log(square(4, true, "hedgehog"));

//upside.
function minus(a, b) {
    if (b === undefined)
        return -a;
    else return a - b;
}
console.log(minus(10))
console.log(minus(10, 5))
console.log(minus(1000, 345))