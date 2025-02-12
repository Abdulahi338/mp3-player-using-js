// creating a car object

let car ={
    name :"Bajaaj",
    model:"B4",
    year :2015,
    start: function(){
        console.log("the car has started!!  " + this.name)
    }
}

console.log("year: " + car.year);
console.log("Name: "+car.name);
console.log("Model: "+car.model);
console.log("start fucntion: "+car.start());


// exercise 10 Array and objects works to gether

let library =[
    {
        title: "Noole brad",
        author: "Liiban indha caad",
        year: "2024"
    },

    {
        title: "Suugan",
        author: "",
        year: ""
    },

    {
        title: "",
        author: "",
        year: ""
    },

    {
        title: "",
        author: "",
        year: ""
    }

]
