var a = ["Apple", "Guava", "Mango", 1990, 10.6];

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
    console.log(a.length);
    console.log(a[3]);
}
// push-->Add element to the end of array
a.push(2);
console.log(a.length);
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

//pop-->remove last element
a.pop();
console.log(a.length);
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
//shift-->remove first element
a.shift();
console.log(a.length);
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
//unshift-->add element to the front of array
a.unshift(1997);
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
    console.log(a.length);
}

//indexof()-->Linear search
console.log(a.indexOf(1990));


//reverse the array
a.reverse();
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}