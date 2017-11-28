var test = require('./test');

const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephent', verb: 'are', object: 'large' }
]

test.say(sentences[0])
// test.default(sentences[0])
// test.default('1')