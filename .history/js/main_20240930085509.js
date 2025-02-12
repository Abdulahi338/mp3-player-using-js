// creating a car object

let car = {
    name: "Bajaaj",
    model: "B4",
    year: 2015,
    start: function () {
        console.log("the car has started!!  " + this.name)
    }
}

// console.log("year: " + car.year);
// console.log("Name: "+car.name);
// console.log("Model: "+car.model);
// console.log("start fucntion: "+car.start());


// exercise 10 Array and objects works to gether

let library = [
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

// console.log("All data");
// console.log(library);

// console.log("Here is the First book name and the second author name....");

// console.log(library[0].title);
// console.log(library[1].author)

// For loop

//Exercise 11

// printing 1 to 50

// for(let x = 1; x<50;x++){
//     console.log(x)

// }

// including 50

// console.log("including 50")

// for(let y=1;y<=50;y++){
//     console.log(y)

// }

// 12 iterating over an array

// const fruts =["Apple","Mango","Banana"];
// for(let i =0;i<fruts.length;i++){
//     console.log(i , fruts[i]);

// }

// why loop 

// let x=5;
// while(x>=0){
//     console.log(x);
//     x--

// }

// Do why loop

// let x ;
// do{
//     x = prompt("Enter a nummber greater thatn 10? "); 
// }while(x<10);
// console.log("Conrates!!!!");

// Exercise 15

let people = [{
    name: "Ali",
    age: 34,
    location: "Hodan"
},

{
    name: "Asho",
    age: 20,
    location: "Kaxda"
},

{
    name: "Sumayo",
    age: 12,
    location: "Xamar jajab"
},
{
    name: "Asmo",
    age: 18,
    location: "daru salam"
}
]

// printing key value pair

// for (let list of people) {
//     for (let  key in list) {
//         console.log(list[key])

        
//     }
//     console.log("--------------")



// }

//   for(let key of people){
//         console.log(key)

//     }

// 19 ,,,, Using forEach

// const numbers =[1,2,3,4,5,6,7,8];
// numbers.forEach((number)=>{
//     console.log(number);
// })

// const names = ["Ali","Osman","Amina","Fartuun"];
// const NumberofLettersEachName = names.map((name)=>name);
// NumberofLettersEachName.forEach((nam)=>{  
//     console.log(nam.length + " "+ nam);
// })

// reduce method

console.log("Reduce method");
const numbers = [1,2,3,4,5];
const multiply = numbers.reduce((times,number)=>times*number,1)
console.log(multiply);