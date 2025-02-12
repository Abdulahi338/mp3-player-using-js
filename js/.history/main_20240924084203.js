// creating a car object

let car ={
    name :"Bajaaj",
    model:"B4",
    year :2015,
    start: ()=>{
        console.log("the car has started!!")
    }
}

console.log("year: " + car.year);
console.log("Name: "+car.name);
console.log("Model: "+car.model);
console.log("start fucntion: "+car.start(), this);