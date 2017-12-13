// Inheritance 

class Vehical {
    constructor(){
        this.passengers = [];
        console.log('Vehicle Created');
    }
    addPassenger(p){
        this.passengers.push(p);
    }
}

class Car extends Vehical {
    constructor(){
        super();
        console.log('Car Created');
    }
    deployAirbags(){
        console.log('BWOOSH!');
    }
}

const v = new Vehical();
v.addPassenger('Frank');
v.addPassenger('Judy');
v.passengers;

const c = new Car();
c.addPassenger('Alice');
c.addPassenger('Cameron');
c.passengers;

// v.deployAirbags();
c.deployAirbags();

class Motercycle extends Vehical {}

const m = new Motercycle();

console.log();
console.log(c instanceof Car);
console.log(c instanceof Vehical);
console.log(m instanceof Car);
console.log(m instanceof Vehical);
console.log(m instanceof Motercycle);

/**
 * All objects in JS are instances of the root class Object. That is
 * for any object o, o instanceOf Object will be true (unless you explicitly
 * set its __proto__ property, which you should avoid). This has little practical consequence to you;
 * It's primarily to provide some important methods that all objects must have,
 * such as toString, which is coveredd later in this chapter.
 */

// Prototypal Inheritance

/**
 * If use ES6 classes then data properties will always be defined on instances, not in the
 * prototype chain. because there's nothing to prevent adding properties directly to the
 * prototype. It's always best to use hasOwnProperty to be sure.
 */

class Super {
    constructor(){
        this.name = 'Super';
        this.isSuper = true;
    }
}

// This is valid but not a good idea
Super.prototype.sneaky = 'not recommended!';

class Sub extends Super {
    constructor(){
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();

for(let p in obj){
    console.log(`${p} : ${obj[p]}` + (obj.hasOwnProperty(p)?' ':'(inherited)'));
}

/**
 * the properties name = isSuper and isSub are all defined on the instance, not in the 
 * prototype chain (properties declared in the superclass constructor are defined on the
 * subclass instance as well)
 * NOTE:- avoid this issue by using :- Object.keys
 */

 /**
  * Js is an interesting hybrid. It is technically a single inheritance language because the
  * prototype chain does not look for multiple parents, but it does provide ways that are 
  * sometimes superior to either multiple inheritance or interfaces ( and sometimes inferior)
  */
/**
 * The primary mechanism for the problem of multiple inheritance is the concept of the mixin.
 * A mixin refers to functionality that's "mixed in" as needed. Because 
 * JS is untyped, extremely permissive language, you can mix in almost any functionality to 
 * any object at any time.
 */

// class InsurancePolicy{
//     constructor(){
//         console.log('Insurance Policy Created');
//     }
// }
// function makeInsurable(o){
//     o.addInsurancePolicy = function(p){this.insurancePolicy = p;}
//     o.getInsurancePolicy = function(){return this.insurancePolicy;}
//     o.isInsured = function(){return !!this.insurancePolicy;}
// }

// makeInsurable(Car);

// const car1 = new Car();
// car1.addInsurancePolicy(new InsurancePolicy());  // error 

/**
 * It doesn't make sense to the concept of a car to make is insurable.
 * But specific car can be insurable
 */

// makeInsurable(Car.prototype);
// const car1 = new Car();
// makeInsurable(car1);

// car1.addInsurancePolicy(new InsurancePolicy());

/**
 * How to call makeInsurable on every car ?
 * use this :- makeInsurable(Car.prototype);
 */

/**
 * NOTE:
 * Mixins don't eliminate the problem of collision; if two methods are same in the both class
 * one will be break down
 * Here we use duck typing method to overcome this problem so use some unique keys constructed
 * by the Symbol()
 */

class InsurancePolicy{
    constructor(){
        console.log('Insurance Policy Created');
    }
}

const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

function makeInsurable(o){
    o[ADD_POLICY] = function(p) { this[_POLICY] = p;}
    o[GET_POLICY] = function(){ return this[_POLICY]}
    o[IS_INSURED] = function(){ return !!this[_POLICY]}
}

makeInsurable(Car.prototype);

const car1 = new Car();
// makeInsurable(car1);
console.log(car1);
car1[ADD_POLICY](new InsurancePolicy());
console.log(car1);

/**
 * NOTES:
 * It's doesn't provide proper data access control structure for OOPS
 * mean it's not providing you public private or protected type of things
 */