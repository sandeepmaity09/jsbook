/**
 * Program : Chapter 9 :- Objects and Object-Oriented Programming
 * Author: ghost
 * Date: 12 Dec 2017
 */

/**
 * NOTES:
 * 1. Objects in js are containers ( also called aggregate or complex data types).
 * 2. property in objects are key-value pair
 * 3. the key-value pair could be in any order . object doesn't gurantee about the proper order
 * 
 * 4. for...in loop doesn't include properties with symbol keys.
 * 5. Object.keys gives us a way to get all of the enumerable string properties of an object as an array
 */

const SYM = Symbol();
const o = {a:1,b:2,c:3,[SYM]:4};

for(let prop in o){
    if(!o.hasOwnProperty(prop))
        continue;
    console.log(`${prop}: ${o[prop]}`)
}

Object.keys(o).forEach(prop => console.log(`${prop} : ${o[prop]}`));

const o2 = { apple:1, xochitl: 2, ballon: 3, guitar: 4, xylophone: 5};

Object.keys(o2).filter(prop => prop.match(/^x/)).forEach(prop => console.log(`${prop}: ${o2[prop]}`))

/**
 * an object is a logically related collection of data and functionality.
 * an class.
 * an instance.
 * when instance created, its constructor runs.
 * OOP also gives us a framework for hierarchically categorizing classes.
 * the vechical is a superclass of car and car is a subclass of vechical.
 */

 // CLASS AND INSTANCE CREATION

 class Car {
     constructor(make,model){
        this.make = make;
        this.model = model;
        this.userGears = ['P','N','R','D'];
        this.userGear = this.userGears[0];
     }
     shift(gear){
         if(this.userGears.indexOf(gear) < 0){
             throw new Error(`Invalid gear: ${gear}`);
         }
         this.userGear = gear;
     }
 }

 const car1 = new Car();
 const car2 = new Car();


// Dynamic properties

// class Car {
//     constructor(make,model){
//         this.make = make;
//         this.model = model;
//         this._userGears = ['P','N','R','D'];
//     }

//     get userGear(){ return this._userGear;}
//     set userGear(value){
//         if(this._userGears.indexOf(value) < 0)
//             throw new Error(`Invalid gear: ${value}`)
//     }

//     shift(gear){this._userGear = gear;}
// }

// const Car = (function(){
//     const carProps = new WeakMap();
//     class Car {
//         constructor(make,model){
//             this.make = make;
//             this.model = model;
//             this._userGears = ['P','N','R','D'];
//             carProps.set(this,{userGear: this._userGears[0]})
//         }

//         get userGear(){ return carProps.get(this).userGear; }
//         set userGear(value){
//             if(this._userGears.indexOf(value) < 0)
//                 throw new Error(`Invalid gear : ${value}`);
//             carProps.get(this).userGear = value;
//         }

//         shift(gear) { this.userGear = gear; }
//     }
//     return Car;
// })();

// const car1 = new Car('Tesla','Model S');
// const car2 = new Car('Mazda','3i');

// console.log(car1);
// console.log(car2);

car1.shift('D');
// car2.shift('R');

// console.log(car1.userGear);
// console.log(car2.userGear);

// console.log(car1.userGear);
// console.log(car2.userGear);

// console.log(car1 instanceof Car);
// console.log(car1 instanceof Array);

// console.log(car1.userGear)

// console.log();
// console.log(car1);
// console.log(car2);


/**
 * JS performs the dynamic dispatch using the prototype chain
 * eg:- Array.prototype.forEach
 * 
 * function's prototype property becomes important when you create a new instance with the new keyword.
 * the newly created object has access to its constructor's prototype object.
 * 
 * 
 * CAUTION:
 * Setting data properties in a class's prototype is generally not done.
 * All instance share that property's value, but if that value is set on
 * any instance, it's set on that instance - not on the prototype, which
 * can lead to confusion and bugs. If you need instance to have initial
 * data values, it's better to set them in the constructor.
 */


console.log(car1.shift === Car.prototype.shift)
console.log(car1.userGear);

console.log(car1.shift === car2.shift)

car1.shift = function(gear){this.userGear = gear.toUpperCase();}
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);
car1.shift('d');
console.log(car1.userGear);
