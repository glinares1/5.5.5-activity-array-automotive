//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)



//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule.Vehicle {
    constructor(make,model,year,mileage)
    //is super being used correctedly? needs to be used before this can be made ?
    {super(make,model,year,color, mileage);
    this.maximumPassengers = 5;
    this.passengers = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
    }
    loadPassenger(num){
        if((this.passengers + num) > this.maximumPassengers){
            console.log("one gotta go buddy!");
        }else{
            this.passengers = this.passengers + num;
            console.log ("you have this amount of buddys in car" + (this.passengers) + "out of" (this.maximumPassengers) + "maximum buddies")
        }
    }
    checkService(){
        if (this.mileage >3000){ 
            console.log("Needs service!")
            this.scheduleService = true
            return this.scheduleService;
        }
    }
    start() {
        if (this.fuel > 0) {
            console.log("Vroom Vroom!");
            return this.started = true;
        } else {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }

}

let A28Sedan = new Car("Mercury", 'Sedan', '2005', 'white', 8000 );


A28Sedan.start();
A28Sedan.loadPassenger(3);
A28Sedan.stop();
A28Sedan.checkService();

console.log(A28Sedan);

let Trokitacuh = new Car("ford",'Truck','2001','blue',2999);

Trokitacuh.start();
Trokitacuh.loadPassenger(5);
Trokitacuh.stop();
Trokitacuh.checkService();

console.log(Trokitacuh)












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
