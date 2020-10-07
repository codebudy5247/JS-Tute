let year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

//Math operator

yearJohn = now - ageJohn;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);
console.log(ageMark);

//logical operator
let johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
let a = 'aditya';
let b = 1990;
let c;
let d = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof(undefined));

//operator precedence

let isNow = 2020;
let yearMe = 1989;
let fullAge = 48;

//Multiple operator
let isFullAge = isNow - yearMe >= fullAge;

console.log(isFullAge);

//MultipleAssignment

let x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//Increment && decerement

x--;
console.log(x);

y++;
console.log(y);