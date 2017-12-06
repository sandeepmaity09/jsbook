// Functions
function getGreet() {
    return 'Hello Greet';
}

getGreet();
console.log(getGreet());
let f = getGreet;

const o = {};
o.name = "function object";
o.f = getGreet;
console.log(o.f());
console.log(o);

const arr = [1, 2, 3];
arr[1] = getGreet;
console.log(arr[1]());
console.log(arr);

function avg(a, b) {
    return (a + b) / 2;
}

console.log(avg(5, 10));

// Function Arguments

function f1(x) {
    console.log(`inside f: x = ${x}`);
    x = 5;
    console.log(`inside f: x= = ${x} (after assignment)`);
}

let x = 3;
console.log(`before calling f: x = ${x}`);
f1(x);
console.log(`after calling f: x = ${x}`);

// call by reference through objects

function f2(ob) {
    ob.message = `set in f2 (pervious value : '${ob.message}')`;
}

let ob = {
    message: "initial value"
}

console.log(`before calling f: o.message = "${ob.message}"`);
f2(ob);
console.log(`after calling f: o.message = "${ob.message}"`)



// Destructuring Assignments : Objects

function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`
}

const ob2 = {
    subject: "I",
    verb: "Love",
    object: "Gaming"
}

console.log(getSentence(ob2));

// Destructuring Assignments : Arrays

function getSentence2([subject, verb, object]) {
    return `${subject} ${verb} ${object}`
}

const arr2 = ["I", "Love", "Marval's SuperHero : Captain America"];
console.log(getSentence2(arr2));

// Spread Operator

function addPrefix(prefix, ...words) {
    const prefixWords = [];
    // for(let i = 0; i < words.length; i++){
    //     prefixWords[i] = prefix + words[i];
    // }
    for (let i in words) {
        console.log(i);
        prefixWords[i] = prefix + words[i];
    }
    return prefixWords;
}

console.log(addPrefix('con', 'verse', 'vex'));

// Default Arguments

function f3(a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`
}

console.log(f3(5, 6, 7));
console.log(f3(5, 6));
console.log(f3(5));

// the this keyword

const ob4 = {
    name: "Sandeep",
    speak: function () { return `My name is ${this.name}` }
}

console.log(ob4.speak());

const speak = ob4.speak;
console.log(speak === ob4.speak);
// console.log(speak());  // Error in calling this due to 'name' is not defined


/**
 * helper function inside a function
 */

const ob5 = {
    name: 'Sandeep',
    greetBack: function () {
        const self = this;
        function getReserve() {
            let nameBack = "";
            for (let i = self.name.length - 1; i >= 0; i--) {
                nameBack += self.name[i];
            }
            return nameBack;
        }
        return `${getReserve()} si eman ym, olleH`;
    }
}

console.log(ob5.greetBack());

let greetBack = function (name) {
    function getReserve() {
        let nameBack = "";
        for (let i = name.length - 1; i >= 0; i--) {
            nameBack += name[i];
        }
        return nameBack;
    }
    return `${getReserve()}`;
}

console.log(greetBack(ob5.greetBack()));

// Function expression error

const g = function f(stop){
    if(stop) 
        console.log('f stopped');
    f(true);
}

g(false); // gives a stack overflow exception