'use strict';

const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephent', verb: 'are', object: 'large' }
]

function say({ subject, verb, object }) {
    console.log(`${subject} ${verb} ${object}`);
}

function speak(){
    console.log('Hello World');
}

// for (let s of sentences) {
//     console.log('this is iterator s', s);
//     say(s);
// }

export { say }
// export default function() {}