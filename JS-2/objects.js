//Object basics

let user = {
    name: "john", //key 'name' store value 'john'
    lastName: "doe",
    age: 30,
    'liked birds': true
}
console.log(user.name)
console.log(user.age)

//To remove a property.
delete user.age
console.log(user)

//square brackets
//to access multiword property
console.log(user['liked birds'])

//object with const can we changed
const user2 = {
    name: "aditya"
}
user2.name = 'Pete'
console.log(user2.name)