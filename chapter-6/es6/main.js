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

const thisobj = {
    name: "Sandeep",
    getBackwards: function () {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for (let i = self.name.length - 1; i >= 0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()}`;
    }
}

console.log('this is nameBackward', thisobj.getBackwards());


// Function Expression and Anonymous Functions

const g = function f(stop, count) {
    // let counter = count;
    if (stop) console.log('f stopped', count);
    f(true, count++);
}
// g(false, 0);

// NOTE:- if the function declaration is used as an expression , it is a function expression
//        else it's a function declaration

// Arrow Notation
// By using arrow notation we can use this function inside function
// Note: Two Additional Difference:-
// 1. Can't be used as object constructor
// 2. arguments variable not avaliable


const arrowNotation = {
    name: "Sandeep",
    greetBackwards: function () {
        const getReverseName = () => {
            let nameBackward = '';
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackward += this.name[i];
            }
            return nameBackward;
        }
        return `${getReverseName()}`;
    }
}

console.log('this is arrow function', arrowNotation.greetBackwards());


// Call, Apply , & Bind

// Call :- method available on all functions that allows you to call the function with a specific value of this.
const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

function greete() {
    return `Hello, I'm ${this.name}!`;
}

// console.log(greete());
console.log(greete.call(bruce));
console.log(greete.call(madeline));

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

console.log(update.call(bruce, 1979, "Singer"))
console.log('this is bruce', bruce);

// apply :- identical to call, only takes parameters as array

console.log(update.apply(madeline, [1967, "Broker"]));
console.log('this is madeline', madeline);

const arrr = [1, 3, 5324, 23, -234234, 234234, -234234,];
console.log(Math.min.apply(null, arrr));
console.log(Math.max.apply(null, arrr));

// bind: permanently associate a value for this with a function.
// Note ======= action of bind is permanent makes it potentially a source of difficulty to find bugs.

const updateBruce = update.bind(bruce);
updateBruce(1823, "Pizza Maker")
console.log('this is bruce', bruce);