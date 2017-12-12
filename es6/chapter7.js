/**
 * Chapter 7 : Scope
 * Scope :- scope determines when and where variables, constants, and arguments are considered to be defined
 */
let x = 10;
function f(x) {
    return x + 3;
}
console.log(f(5));
console.log(x);

/**
 * Scope :- Visibility : to the identifiers that are currently visiable andaccessible by the currently executing part of the program also called :- EXECUTION CONTEXT
 * Existance :- refers to identifiers that hold something for which memory has been allocated.
 */

/**
 * NOTES:
 * When something ceases to exist, js doesn't necessarily reclaim the memory right away:
 * it simply notes that item no longer needs to keep around, and the memory is periodically reclaimed in a process called : GARBAGE COLLECTION
 * GC is automatic in js
 */

/**
 * LEXICAL V/S DYNAMIC SCOPING:
 * Scoping in js is lexical, means we can determine what variables are in scope simply by looking at 
 * the source code. 
 * Lexical Scoping means whatever variables are in scope where you define a function from 
 * ( as opposed to when you call it) are in scope in the function.
 * Lexical scoping in JS applies to
 * 1. global scope
 * 2. block scope 
 * 3. function scope
 */

function f1() {
    console.log('one');
}

function f2() {
    console.log('two');
}

f2();
f1();
f2();

const a = 3;
function f3(){
    console.log(a);
    console.log(b);
}

const b = 7;
f3();

/**
 * Variable masking is sometimes called variable shadowing (that is, a 
 * variable with the same name will shadow the variable in the outer socpe).
 */

// FUNCTIONS, CLOSURES, LEXICAL SCOPE

/**
 * functions are often defined wherever they're needed. They're assigned to variables or object properties,
 * added to arrays, passed into other functions, passed out of functions, and 
 * sometimes not given a name at all,
 */

/**
 * sometimes it's intentional to define a function in a specific scope so that it explicitly has access
 * to that scope. this is called a closure
 * (it's like closing the scope around functions)
 */

let globalFunc;         // undefined global function;

{
    let blockVar = 'a';           // block-scoped variable
    globalFunc = function(){
        console.log(blockVar);
    }
}

globalFunc();                      // logs 'a' here

/**
 * when a scope is exited, the variables declared in that scope can safely cease to exist.
 * defining a function within a closure can affect the closure's lifetime.
 */

let f5;
{
    let o = { note:'Safe' }
    f5 = function(){
        return o;
    }
}

let oRef = f5();
console.log(oRef);
oRef.note = "Not so safe after all";
console.log(oRef);
oRef = f5();
console.log(oRef);

/**
 * things that are out of scope are strictly inaccessible.
 * but functions are special in that they allow us a window into scope that are otherwise inaccessible
 */

// CLOSURE'S

/**
 * 1. closure have access to the outer functions' variable even after the outer function return;
 * 2. closure stor reference to the outer function's variables;
 * 3. closure gone awry  => for this use IIFE (Immediately Invoked Function Expression);
 */

function showName(fName,lName){
    var nameIntro = "Your name is ";
    function makeFullName(){
        return nameIntro + fName + ' ' + lName;
    }
    return makeFullName();
}

console.log(showName('Sandeep','Maity'))

// IIFE : Immediately Invoked Function Expression

const message = (function(){
    const secret = `I'm a secret!`;
    return `The secret is ${secret.length} characters long.`;
})();
console.log(message);

const counter = (function(){
    let count = 0;
    return function(){
        return `I have been called ${++count} time(s)`;
    }
})();

console.log(counter());
console.log(counter());

console.log(tmp);
let tmp = 5;
console.log(tmp);