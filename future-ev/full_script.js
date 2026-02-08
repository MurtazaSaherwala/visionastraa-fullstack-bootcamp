
// console.log(cars[0]);
// console.log(cars[4]); //undefined

// let batteryLevels = [90, 80, 60, 40, 20, 30];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// document.addEventListener("DOMContentLoaded", function() {
//     let cars = ["Tesla", "BMW", "Audi", "Mercedes"];
//     let list = document.getElementById("carList");
    
//     if(list){
//        for (let i = 0; i < cars.length; i++) {
//             let li = document.createElement("li");
//             li.innerHTML = cars[i];
//             list.appendChild(li);
//          }    
//     }
// });


// let car = {"name":"Audi", "range":500, "price":30000}
// console.log(car.name);
// car.price = 35000;
// console.log(car.price);

// document.getElementById("carName").innerText = car.name;
// document.getElementById("carRange").innerText = "Range: " + car.range + " km";
// document.getElementById("carPrice").innerText = "Price: $" + car.price;


// let car = {
//     model : "Nexon Ev",
//     range : 450,
//     battery: 90,
//     fastCharging : true
// }

// function calculateRemainingRange(car){
//     return (car.range * car.battery)/100;
// }

// let remainingRange = calculateRemainingRange(car);
// console.log("Remaining Range: " + remainingRange + " km");

// let cars = [
//     {"name":"Audi", "range":500, "price":30000},
// {"name":"Tesla", "range":550, "price":35000},
// {"name":"BMW", "range":550, "price":80000},
// {"name":"Mercedes", "range":300, "price":25000}
// ]

// document.addEventListener("DOMContentLoaded", function() {
//     let cars = [
//         {"name":"Audi", "range":500, "price":30000},
//         {"name":"Tesla", "range":550, "price":35000},
//         {"name":"BMW", "range":550, "price":80000},
//         {"name":"Mercedes", "range":300, "price":25000},
//         {"name":"Nissan", "range":400, "price":28000}
//     ]
//     let container = document.getElementById("cars");
    
//     if(container){
//        for (let i = 0; i < cars.length; i++) {
//             let carDiv = document.createElement("div");
//             carDiv.innerHTML = `<h3>${cars[i].name}</h3>
//             <p>Range: ${cars[i].range} km</p>
//             <p>Price: $${cars[i].price}</p>`;

//             container.appendChild(carDiv);
//          }    
//     }
// });


// let vehicles = ['Tesla', 'BMW', 'Audi', 'Mercedes'];
// let labels = vehicles.map(function(vehicle) {
//     return "My " + vehicle;
// });
// console.log(labels);

// let cars = [
//     {"name":"Audi", "range":500, "price":30000},
// {"name":"Tesla", "range":550, "price":35000},
// {"name":"BMW", "range":550, "price":80000},
// {"name":"Mercedes", "range":300, "price":25000}
// ]

// let models = [];
// for(let i =0; i < cars.length; i++){
//     models.push(cars[i].name);
// }
// console.log(models);


// let carModels= cars.map(function(car) {
//     return car.name;
// })

// console.log(carModels);

// document.addEventListener("DOMContentLoaded", function() {
//     let cars = [
//         {"name":"Audi", "range":500, "price":30000},
//         {"name":"Tesla", "range":550, "price":35000},
//         {"name":"BMW", "range":550, "price":80000},
//         {"name":"Mercedes", "range":300, "price":25000},
//         {"name":"Nissan", "range":400, "price":28000}
//     ]
//     let container = document.getElementById("cars");
    
//     if(container){
//        let carCards = cars.map(function (car) {
//             return `<div class = "car-card">
//             <h3>${car.name}</h3>
//             <p>Range: ${car.range} km</p>
//             <p>Price: $${car.price}</p>
//             </div>`;
//        });
//         document.getElementById("cars").innerHTML = carCards.join("");
//     }
// });

let cars = [
    { model: "Tesla", range: 500, price: 7000000, type: "Sedan" },
    { model: "Nexon EV", range: 465, price: 1500000, type: "SUV" },
    { model: "BMW i4", range: 590, price: 7200000, type: "Sedan" },
    { model: "MG ZS EV", range: 461, price: 2200000, type: "SUV" }
];

// let highRangeCars = cars.filter(function (car){
//     return car.range >= 500;
// })

// let suvs = cars.filter(function (car){
//     return car.type === "SUV";
// })

// let budgetCars = cars.filter(function (car){
//     return car.price < 2500000;
// })

// let cards = highRangeCars.map(function (car){
//     return `<div class = "car-card">
//             <h3>${car.model}</h3>
//             <p>Range: ${car.range} km</p>
//             <p>Price: $${car.price}</p>
//             </div>`;
// });

// document.getElementById("cars").innerHTML = 
// cars
// .filter(car => car)
// .map(car => `<div class = "car-card">
//             <h3>${car.model}</h3>
//             <p>Range: ${car.range} km</p>
//             <p>Price: $${car.price}</p>
//             </div>
//             `)
// .join("");


// let highRangeCars = cars.filter(function (car){
//     return car.range >= 500;
// })

// let highRangeCars = cars.filter(car => car.range >= 500);

// `<div class = "car-card">
//     <h3>${car.model}</h3>
//     <p>Range: ${car.range} km</p>
//     <p>Price: $${car.price}</p>
// </div>`

// "<div class = 'car-card'>"+
//     "<h3>" + car.model + "</h3>" +
//     "<p>Range: " + car.range + " km</p>" +
//     "<p>Price: $" + car.price + "</p>" +
// "</div>"

// document.getElementById("cars").innerHTML = 
// cars
// .filter(car => car)
// .map(({model, range, price}) => `<div class = "car-card">
//             <h3>${model}</h3>
//             <p>Range: ${range} km</p>
//             <p>Price: $${price}</p>
//             </div>
//             `)
// .join("");

// class Vehicle{
//     constructor(model, range, price) {
//         this.model = model;
//         this.range = range;
//         this.price = price;
//         console.log("Vehicle Created");
//     }

//     getInfo() {
//         return `Model: ${this.model}, Range: ${this.range} km, Price: $${this.price}`;
//     }
// }

// let cars = [new Vehicle("Tesla", 500, 7000000),
// new Vehicle("Nexon EV", 465, 1500000),
// new Vehicle("BMW i4", 590, 7200000)
// ];

// console.log(cars[2].getInfo());

