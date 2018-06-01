// Function Decleration
function sayHello() {
    console.log("Hello world!");
    console.log("iHola mundo!");
}

// Function Returning Values
function getGreeting() {
    return "Hello World!";
}

// Function Calling
sayHello();

// Timer
setTimeout(() => {
    sayHello();
}, 5000);

const greet = getGreeting;
const greetings = getGreeting();
console.log(greetings);

let greetMe = greet();
console.log(greetMe);

// Calling Vs Referencing

const o = {};
o.f = getGreeting;
console.log('this is o.f calling', o.f());

let arr = [1, 2, 3];
arr[1] = getGreeting;
arr[1]();
console.log('this is array', arr);
console.log('this is array[1] calling', arr[1]());

// Function Arguments
// a,b :- Formal Arguments
// when calling become :- Actual Arguments

function avg(a, b) {
    return (a + b) / 2;
}

console.log(avg("23", "324"));


/**
 * Primitives in JS are considered value types :- Pass by value
 * Objects in JS are considered reference types :- Pass by reference
 */

function f(x) {
    console.log(`inside f: x=${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after assignement`);
}

let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`)

function f2(o) {
    o.message = `set in f (previous value: '${o.message}')`;
}

let o2 = {
    message: "initial value"
}

console.log(`before calling f: o.message="${o2.message}"`);
f2(o2);
console.log(`after calling f: o.message="${o2.message}"`)





// Do Arguments Make the function ? : IN JS NO:- Not possible to overload function. (FUNCTION OVERLOADING NOT SUPPORTED);


// Destructuing Arguments

function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}

let sentence = {
    subject: "I",
    verb: "Love",
    object: "Javascript"
}

let sent = getSentence(sentence);
console.log(sent);

// Destructuring Arrays

// Spread Operator:- IN ES5 done by arguements variable.
function addPrefix(prefix, ...words) {
    const prefixWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixWords[i] = prefix + words[i];
    }
    return prefixWords;
}

console.log('this is addPrefix calling', addPrefix("con", "verse", "vex"));


// Default Arguments

function f3(a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`;
}

console.log('this is default args', f3(5, 6, 7));
console.log('this is default args', f3(5, 6));
console.log('this is default args', f3(5));
console.log('this is default args', f3());
// console.log('this is default args');


// Function as Properties of Objects

const obj = {
    name: "Wallce",
    bark: function () {
        return "Woof";
    }
}

console.log('this is method', obj.bark());


// The this keyword