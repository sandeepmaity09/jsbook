// Expression & Operators


/**
 * Short Circuit Evaluation with AND(&&) and OR(||)
 */
let skipIt = true;
let x = 0;
let result = skipIt || x++;
console.log(`Values of skipIt ${skipIt} x ${x} and result ${result}`);

skipIt = false;
x = 0;
result = skipIt || x++;
console.log(`Values of skipIt ${skipIt} x ${x} and result ${result}`);

let doIt = false;
x = 0;
result = doIt && x++;
console.log(`Values of skipIt ${doIt} x ${x} and result ${result}`);

doIt = true;
x = 0;
result = doIt && x++;
console.log(`Values of skipIt ${doIt} x ${x} and result ${result}`);

// Bitwise Operators

let n = 22   // 32-bit binary;
console.log(n);
console.log(n << 1);
console.log(n >> 1);
console.log(n >>> 1);
console.log(~n);
console.log(n & n);
console.log(n | n);
console.log(n^n);

// typeof operator

console.log(typeof undefined)
console.log(typeof null)         // It's shows object : unfortunate but true
console.log(typeof {} )
console.log(typeof true)
console.log(typeof 1)
console.log(typeof "")
console.log(typeof Symbol())
console.log(typeof function(){})


// Destructuring Assignment

const obj = {b:2,c:3,d:4}
const {a,b,c,d} = obj;
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// Eg: of destructuring in real 

let p = 5 , q = 10;
console.log('Before',p,q);
[p,q] = [q,p]
console.log('After',p,q);

// conditional expression
console.log(4 > 5 ? 'true' : 'false')



