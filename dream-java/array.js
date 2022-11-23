'use strcit';

// Array

//1.Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['🍎','🍐','🍌','🍉'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);
console.log(fruits[fruits.legnth-1]);

//3. Looping over an array
// print all fruits
// a. for
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i])
}

//b. for of 
for(let fruit of fruits){
    console.log(fruit)
}

//c. forEach
fruits.forEach((fruit)=>{console.log(fruit)})

//4. Addition, deletion, copy
// add an item to the end
fruits.push('🍊')
console.log(fruits)
//remove an item from the end
fruits.pop()
fruits.pop()
console.log(fruits)

console.clear();
//unshift : add an item to the beginning
fruits.unshift('🍇','🍍')
console.log(fruits)

//shift : remove an item from the beginning
fruits.shift()
fruits.shift()
console.log(fruits)

//note!! shift, unshift are slower that pop,push 
//splice : remove an item by index position

fruits.push('🍊')
console.log(fruits)
fruits.splice(fruits.indexOf('🍌'),1,'🥝')
console.log(fruits)

// combine two arrays
const fruits2 = ['🌶','🧅'];
const newFruits = fruits.concat(fruits2)
console.log(newFruits)

//5. Searching
//IndexOf: find the index
console.log(fruits.indexOf('🥝'));

//incldues
console.log(fruits.includes('🍉'))

//lastIndexOf
console.clear();
fruits.push('🍎')
console.log(fruits.indexOf('🍎'))
console.log(fruits.lastIndexOf('🍎'))
