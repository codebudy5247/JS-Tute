/*
In a array we want to print only 'string'.

*/
let a = ['John', 'smith', 1990, 45, 'designer', false];
for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== 'string') {
        continue;
    }
    console.log(a[i]);
}