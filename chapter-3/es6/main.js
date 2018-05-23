let currentTempC = 22;
console.log("This is currentTempC", currentTempC);

// Primitive Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol

// NOTE: Immutability doesn't mean the contents of a variable can't change

// Secondary Types
// 1. object
// Built-In Objects:- 1. Array 2. Date 3. RegExp
//                    4. Map & WeakMap 
//                    5. Set and WeakSet

let count = 10;
const blue = 0x0000ff;
const umask = 0o0022;
const roomTemp = 23.3;
const c = 3.0e6;
const e = -1.5e-12;
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN;

console.log(count);
console.log(blue);
console.log(umask);
console.log(roomTemp);
console.log(inf);
console.log(ninf);
console.log(nan);
console.log(e);
console.log(c);


const small = Number.EPSILON;
const bigInt = Number.MAX_SAFE_INTEGER;
const max = Number.MAX_VALUE;
const minInt = Number.MIN_SAFE_INTEGER;
const min = Number.MIN_VALUE;
const nInf = Number.NEGATIVE_INFINITY;
const naN = Number.NaN;
const inF = Number.POSITIVE_INFINITY;

console.log(small);
console.log(bigInt);
console.log(max);
console.log(min);
console.log(minInt);
console.log(nInf);
console.log(naN);
console.log(inF);

let message = `The current temperature is ${currentTempC}\u00b0C`;
console.log(message);

// Symbol

const RED = Symbol();
const ORANGE = Symbol("The color of a sunset!");
console.log(RED === ORANGE);


// Objects

let sam1 = {
    name: "Sam",
    age: 4
}

let sam2 = {
    name: "Sam",
    classification: {
        kingdom: "Anamalia",
        phylum: "Chordata",
        class: "Mamalia",
        order: "Carnivoria",
        family: "Felidae",
        subfaimily: "Felinae",
        genus: "Felis",
        species: "catus",
    }
}

console.log('this is sam2', sam2.classification);

// Arrays

// Dates

const halloweenParty = new Date();

console.log(halloweenParty.getFullYear());
console.log(halloweenParty.getMilliseconds());
console.log(halloweenParty);


// RegExp

const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)\b/;

// Maps, Sets, WeakMap, WeakSet


///////////////////////////////////
// Data Type Conversion
///////////////////////////////////

// 1. Converting to Numbers

const numStr = "324234.23423";
const num = Number(numStr);
console.log('this is numStr and num', numStr, num);

// 2. Converting to String
const s = new Date();
const ts = s.valueOf();

console.log('this is date', ts);

// 3. Converting to Boolean

const n = Boolean(0);
console.log('this is boolean 0', n);

// NOTE : All numbers are double-precision floating-point number IEEE-764 Standard

