'use strict';

// es6 feature: block-scoped "let" declaration
const sentence = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' }
];

// es6 feature: object destructureing 
function say({subject,verb,object}){
    //es6 feature: template strings
    console.log(`${subject} ${verb} ${object}`);
}

//es6 feature: for..of
for(let s of sentence){
    say(s);
}