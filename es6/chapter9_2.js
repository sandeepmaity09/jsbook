/**
 * STATIC METHODS:
 * In a static method , this is bound to the class itself,
 * but it's generally considered best practice to use the name of the class instead of this.
 */

class Car {
    static getNextVin(){
        return Car.nextVin++;
    }
    constructor(make,model){
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    static areSimilar(car1,car2){
        return car1.make === car2.make && car1.model === car2.model;
    }
    static areSame(car1,car2){
        return car1.vin === car2.vin;
    }
}

Car.nextVin = 0;

const car1 = new Car('Tesla','S');
const car2 = new Car('Mazda','3');
const car3 = new Car('Mazda','3');

console.log(car1.vin);
console.log(car2.vin);
console.log(car3.vin);

console.log(Car.areSimilar(car1,car2));
console.log(Car.areSimilar(car2,car3));
console.log(Car.areSimilar(car1,car3));
console.log(Car.areSame(car1,car2));
console.log(Car.areSame(car2,car3));
console.log(Car.areSame(car1,car3));

