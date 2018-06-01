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
