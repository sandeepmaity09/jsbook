// Scope :- detemines when and where variables, constants and arguments are considered to be defined.

// NOTE:- IN JS declaration and defination are same thing. Variables are given value when they're declared.


// SCOPE VS EXISTENCE
// Garbage Collection is automatic and outside of certain highly demanding applications.

// LEXICAL VS DYNAMIC SCOPING
// Scoping in JS is lexical means we can determine what variable are in scope simply by looking at the source code.

function f1() {
    console.log('one');
}

function f2() {
    console.log('two');
}

f2();
f1();
f2();


const x = 3;

function f() {
    console.log(x);
    console.log(y);
}
const y = 6;
f();

// Lexical scoping in JS applies to Global Scope, Block Scope and Function Scope.


// Variable Masking
{
    let x = "blue";
    console.log(x);
    {
        let x = 3;
        console.log(x);
    }
    console.log(x);
}
console.log(x);

// Functions, Closures, and Lexical Scope

// define a function in a specific scope so that it explicitly has access to that scope.
// i.e. - closing the scope around the function

let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function () {
        console.log(blockVar);
    }
}

globalFunc();

// defining a function within a closure can affect the closure's lifetime.
// it allows us to access things we wouldn't normally have access to.

let f3;
{
    let o = { note: 'Safe' };
    f3 = function () {
        return o;
    }
}
console.log(f3());

let oRef = f3();
oRef.note = "not so safe after all";

console.log(f3());

// Normally, things that are out of scope are strictly inaccessible. Functions are special
// in that they allow us a window into the scope that are otherwise insccessilbe.



// IIFE:- Immediately Invoked Function Expression

const message = (function () {
    const secret = "I'm a secret!";
    return `The message is ${secret.length} characters long`;
})();
console.log(message);


const f4 = (function () {
    let count = 0;
    return function () {
        return `I have been called ${++count} times`;
    }
})();
console.log(f4());
console.log(f4());


// Variable Hoisting
// Function Hoisting

// The Temporal Dead Zone (TDZ) :-
//  TDZ is a dramatic expression for the intutitive concept that variables declared with let don't exist
//  until you declare them. Within a scope, the TDZ for a variable is the code before the variable is declared.

// The Error (TDZ Case)

if (typeof p === "undefined") {
    console.log("p doesn't exist or is undefined");
} else {
    // ssafe to refer to x
}
let p = 5;


// Strict Mode

// implicit global : IN ES5 if you forgot to declare a variable with var, it's considered as global