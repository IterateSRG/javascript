const desc = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(desc)
// Object.defineProperty(Math,"PI",{
//     writable:true,
//     enumerable:true
// })
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))
// desc.value = 5;

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const chai = {
    name:"ginger chai",
    price:250,
    isAvaliable:true,

    orderChai:function(){
        console.log("chai nahi bani!")
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"price"))
// console.log(chai)
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}

// -------------------------------------------------------------
// Can we change Math.PI to 5?
// -------------------------------------------------------------
// Let's inspect Math.PI's property descriptor:
const mathPiDescriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("\nMath.PI Descriptor:", mathPiDescriptor);
/*
Output:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false  <-- NOTE THIS!
}
*/

// 1. Direct Assignment fails:
Math.PI = 5;
console.log("After direct assignment:", Math.PI); // Still 3.141592653589793 (writable is false)

// 2. Trying to redefine using Object.defineProperty:
try {
    Object.defineProperty(Math, "PI", {
        writable: true,
        value: 5
    });
} catch (error) {
    console.log("Error modifying Math.PI:", error.message);
    // TypeError: Cannot redefine property: PI
}

// CONCLUSION:
// You CANNOT change `Math.PI` directly on the global `Math` object because `configurable: false` 
// permanently locks the property definition in JavaScript's C++ core.

// However, on your own custom objects, you have full control:
const myMath = {
    PI: 3.141592653589793
};

Object.defineProperty(myMath, "PI", {
    writable: true,
    value: 5
});
console.log("Custom myMath.PI:", myMath.PI); // 5