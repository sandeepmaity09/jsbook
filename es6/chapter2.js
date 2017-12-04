// Variables,Constants & literals

let str = "Hello";
let count = 10;
const blue = 0x0000ff;  //hexadecimal ( hex ff = decimal 255)
const umask = 0o0022;   //octal ( octal 22 = decimal 18 )
const c = 3.0e6;
const e = -1.6e-19;
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN;

const small = Number.EPSILON;  // the smallest value that can be added to 1 to get a distinct number
const bigInt = Number.MAX_SAFE_INTEGER // the largest representable integer
const max = Number.MAX_VALUE // the largest representable number
const minInt = Number.MIN_SAFE_INTEGER 
const min = Number.MIN_VALUE
const nInf = Number.NEGATIVE_INFINITY;
const nan2 = Number.NaN;
const inf2 = Number.POSITIVE_INFINITY;

console.log(`${small} ${bigInt} ${max} ${minInt} ${min} ${nInf} ${nan2} ${inf2}`)

// Strings

let str2 = "De Morgan's law: \u2310 (P \u22c0 Q) \u21D4 (\u2310 p) \u22c1 ( \u2310 Q)"
console.log(str2);

const multiline = `line1
line2
lint3`

console.log(multiline);

const result1 = 3 + '30';
const result2 = 3 * '30';

console.log(`${result1} ${result2}`)

// Booleans

const truthy = true;
const falsy = false;

// Symbols

const RED = Symbol();
const ORANGE = Symbol("The Color of a sunset!");
console.log(RED);
console.log(ORANGE);
console.log(RED === ORANGE)

// null & undefined

let currentTemp;
let targetTemp = null;

console.log(`${currentTemp} ${targetTemp}`);

// Non-Primitive : Objects

const sam1 = {
    name: 'Sandeep',
    age: 22
}

const sam2 = {
    fname : 'Sandeep',
    lname : 'Maity',
    classification : {
        kingdom : 'Anamalia',
        phylum : ['Chardata','NewData'],
        order : {
            family : 'Felidae',
            genus : {
                species:'Catus',
                genus : 'Not - Existance'
            }
        }
    }
}

console.log(sam2.fname);
console.log(sam2.classification.kingdom);
console.log(sam2.classification.order.genus.genus);
console.log(sam2["classification"]["phylum"][0])

// Dates

const now = new Date();
console.log(now);

const halloween = new Date(2016,9,31);
console.log(halloween);

const halloweenparty = new Date(2016,9,31,19,0);
console.log(halloweenparty);

halloweenparty.getFullYear();
halloweenparty.getMilliseconds();

// Regular Expression

const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
console.log(email);