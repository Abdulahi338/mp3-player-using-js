// creating a car object

let car ={
    name :"Bajaaj",
    model:"B4",
    year :2015,
    start: function(){
        console.log("the car has started!!  " + this.name)
    }
}

// console.log("year: " + car.year);
// console.log("Name: "+car.name);
// console.log("Model: "+car.model);
// console.log("start fucntion: "+car.start());


// exercise 10 Array and objects works to gether

let library =[
    {
        title: "Noole brad",
        author: "Liiban indha caad",
        year: "2024"
    },

    {
        title: "Suugan",
        author: "Hadrawi",
        year: "2014"
    },

    {
        title: "Aabe faqiir iyo mid taajir",
        author: "Jamac sahal",
        year: "2015"
    },

    {
        title: "Hagaha Hooyada Urka leh",
        author: "Idil Hasan Ali",
        year: "20024"
    }

]

console.log("All data");
console.log(library);

console.log("Here is the First book name and the second author name....");

console.log(library[0]);
