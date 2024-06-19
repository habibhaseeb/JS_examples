# Resolve() method.
The Promise.resolve static method can be used to wrap values into promises.
In fact, value can be any "thenable" (object defining a then method that works sufficiently like a spec-compliant
promise)
____________________________________
## Custom Methods of arrays in js
 ### Array.isArray
So lets, start with simple one Array.isArray() method. The Array.isArray() method is static method determines whether the passed value is an Array.

Well, remember whenever you are stuck with problem like this, it is always helpful to go back to basics. let’s start with question “what is argument passed to function? can it give any information about itself?”

and the answer is yes, remember that Almost everything in the language is an object including arrays and functions or gets treated as an object. 

If you dig into this object, you can find one useful property called constructor which stores data type of data, and can be utilized for our purpose.
 ```
 console.log(Array.isArray([12,15,19,18]));
// true

console.log(Array.isArray('[]')); // false

console.log(Array.isArray(new Array(12))); // true because of number

console.log(Array.isArray(Int16Array([1,2,552]))); // false value Int16Array refers to typed array.
 ```
### 👉 Modules in js
 Modules are moduler and best way to write exist in newer and latest coding skills. Modules help developers to write code in best way for learning methods.
