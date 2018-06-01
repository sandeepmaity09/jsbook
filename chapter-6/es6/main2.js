function Constructor(subject, verb, argument) {
    this.subject = subject;
    this.verb = verb;
    this.argument = argument;
    this.speak = function () {
        console.log(`${this.subject} ${this.verb} ${this.argument}`)
        return (`${this.subject} ${this.verb} ${this.argument}`);

    }
}

const obj = new Constructor("I", "Love", "Gaming");
console.log('this is a object', obj.speak());