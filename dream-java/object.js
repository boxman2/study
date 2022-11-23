// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

//1.Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {
    name : 'ellie',
    age : 29
}
print(ellie);

//with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie)

//can delete properties later


//2. Computed properties
//key should be always string
console.log(ellie['name']);
ellie['hasJob']= true;
console.log(ellie.hasJob)

function printValue (obj,key){
    console.log(obj[key]);
}

printValue(ellie,'name');


//3. Property value shorthand
const perosn1 = {name: 'bob', age : 2}
const perosn2 = {name: 'jason', age : 3}
const perosn3 = {name: 'steve', age : 11}
const person4 = new Person('ellie', 33)
console.log(person4)

//4. Constructor function
function Person(name,age){
    this.name = name;
    this.age = age;
}

//5. in operator : property existence check (key in obj)
console.log('name' in ellie);
console.log('ad' in ellie);

//6.for ..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}
//for (value of iterable)
const array = [1,2,3,5];
for(vlaue of array){
    console.log(vlaue)
}

//7.Fun cloning
//Object.assign(dest, [obj1,obj2,obj3...])
const user = {name:'ellie', age:'20'};
const user2 = user;
console.log(user);

//old way 
const user3 = {};
for (key in user) {
    user3[key] = user[key]
}
console.log(user3)

const user4 = Object.assign({},user);
console.log(user4)

//another example
const fruit1 = {color:'red'}
const fruit2 = {color:'blue', size :'big'}
const fruit3 = Object.assign({},fruit1,fruit2)

console.log(fruit3)