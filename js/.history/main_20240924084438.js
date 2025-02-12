// creating a car object

let car ={
    name :"Bajaaj",
    model:"B4",
    year :2015,
    start: function(){
        console.log("the car has started!!")
    }
}

console.log("year: " + car.year);
console.log("Name: "+car.name);
console.log("Model: "+car.model);
console.log("start fucntion: "+car.start() + this.name);
console.log("start fucntion: "+car.start(), this.year);
console.log("start fucntion: "+car.start(), this.model);