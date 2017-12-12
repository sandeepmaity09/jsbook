"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Functions
function getGreet() {
    return 'Hello Greet';
}

getGreet();
console.log(getGreet());
var f = getGreet;

var o = {};
o.name = "function object";
o.f = getGreet;
console.log(o.f());
console.log(o);

var arr = [1, 2, 3];
arr[1] = getGreet;
console.log(arr[1]());
console.log(arr);

function avg(a, b) {
    return (a + b) / 2;
}

console.log(avg(5, 10));

// Function Arguments

function f1(x) {
    console.log("inside f: x = " + x);
    x = 5;
    console.log("inside f: x= = " + x + " (after assignment)");
}

var x = 3;
console.log("before calling f: x = " + x);
f1(x);
console.log("after calling f: x = " + x);

// call by reference through objects

function f2(ob) {
    ob.message = "set in f2 (pervious value : '" + ob.message + "')";
}

var ob = {
    message: "initial value"
};

console.log("before calling f: o.message = \"" + ob.message + "\"");
f2(ob);
console.log("after calling f: o.message = \"" + ob.message + "\"");

// Destructuring Assignments : Objects

function getSentence(_ref) {
    var subject = _ref.subject,
        verb = _ref.verb,
        object = _ref.object;

    return subject + " " + verb + " " + object;
}

var ob2 = {
    subject: "I",
    verb: "Love",
    object: "Gaming"
};

console.log(getSentence(ob2));

// Destructuring Assignments : Arrays

function getSentence2(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        subject = _ref3[0],
        verb = _ref3[1],
        object = _ref3[2];

    return subject + " " + verb + " " + object;
}

var arr2 = ["I", "Love", "Marval's SuperHero : Captain America"];
console.log(getSentence2(arr2));

// Spread Operator

function addPrefix(prefix) {
    var prefixWords = [];
    // for(let i = 0; i < words.length; i++){
    //     prefixWords[i] = prefix + words[i];
    // }

    for (var _len = arguments.length, words = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        words[_key - 1] = arguments[_key];
    }

    for (var i in words) {
        console.log(i);
        prefixWords[i] = prefix + words[i];
    }
    return prefixWords;
}

console.log(addPrefix('con', 'verse', 'vex'));

// Default Arguments

function f3(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

    return a + " - " + b + " - " + c;
}

console.log(f3(5, 6, 7));
console.log(f3(5, 6));
console.log(f3(5));

// the this keyword

var ob4 = {
    name: "Sandeep",
    speak: function speak() {
        return "My name is " + this.name;
    }
};

console.log(ob4.speak());

var speak = ob4.speak;
console.log(speak === ob4.speak);
// console.log(speak());  // Error in calling this due to 'name' is not defined


/**
 * helper function inside a function
 */

var ob5 = {
    name: 'Sandeep',
    greetBack: function greetBack() {
        var self = this;
        function getReserve() {
            var nameBack = "";
            for (var i = self.name.length - 1; i >= 0; i--) {
                nameBack += self.name[i];
            }
            return nameBack;
        }
        return getReserve() + " si eman ym, olleH";
    }
};

console.log(ob5.greetBack());

var greetBack = function greetBack(name) {
    function getReserve() {
        var nameBack = "";
        for (var i = name.length - 1; i >= 0; i--) {
            nameBack += name[i];
        }
        return nameBack;
    }
    return "" + getReserve();
};

console.log(greetBack(ob5.greetBack()));

// Function expression error

var g = function f(stop) {
    if (stop) console.log('f stopped');
    f(true);
};

f(true);
// g(false); // gives a stack overflow exception


/**
 * call, apply and bind
 * js allows you to specify what this is bound to no matter how or where the function in question is called
 */

const bruce = {name:'Bruce'}
const madeline = {name:'Madeline'}

// this function isn't associated with any object,yet it's using 'this'!
function greetMe(){
    return `Hello, I'm ${this.name}`;
}

console.log();
console.log(greetMe.call(bruce));
console.log(greetMe.call(madeline));

/**
 * call allows us to call a function as if it were a method by providing it an object to bind this to.
 * first argument to call is the value want this bound to.
 * remaining arguments become agruments to the function you're calling
 */

console.log(`I'm doing nothing`);


function update(birthYear,occupation){
     this.birthYear = birthYear;
     this.occupation = occupation;
 }

 update.call(bruce,1998,'Singer');      // handle arguments one by one
 update.apply(madeline,[1993,'Writer']) // handle arguments in an array[]
 console.log(bruce);
 console.log(madeline);

 // apply is useful if you've got an array and you want to use it's value as arguments to a function.

const arr5 = [2,3,-5,15,7];
console.log(Math.min.apply(null,arr5));

// bind allow to permanently associate a value for this with a function.

const updateBruce = update.bind(bruce);

console.log(updateBruce(1902,'Actor'))
console.log(bruce);