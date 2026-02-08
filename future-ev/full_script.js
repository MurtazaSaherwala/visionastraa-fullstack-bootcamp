// console.log("Placed an order");

// setTimeout(() => {
//     console.log("Food arrived");
// }, 3000);

// console.log ("Scrolling Istagram");

// let data = fetchFromServer(); // imaginary blocking. Not async
// console.log(data);

// fetchFromServer(()=> {
//     console.log("Data received from server");
// })
// console.log("page stil responsive");

// let user;
// setTimeout(() => {
//     user = {name: "Alice"};

// }, 2000);

// console.log(user.name);


// let orderPromise = new Promise((resolve, reject) => {
//     console.log("Order Placed!!");
//     let delivered = true;
//     setTimeout(() => {
//         if (delivered){
//             resolve("Order Delivered");
//         } else {
//             reject("Order not delivered");
//         }
//     }, 3000);
// });

// orderPromise.then(message => {
//     console.log("Notification: " + message);
// })
// .catch((error) => {
//     console.log("Oops: " + error);
// })

// console.log("Scrolling Instagram...");

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// });

// fetch("https://dummyjson.com/products")
// .then(res => res.json())
// .then(dummyData => {
//     let products = dummyData.products;
//    
//     let cheapProducts = products.filter(product => product.price < 5);
//     console.log(cheapProducts);
// })
// .catch(error => {
//     console.log("Error fetching products: " + error);
// });

// fetch("https://dummyjson.com/products")
// .then(res => res.json())
// .then(dummyData => {
//     let products = dummyData.products;
//     let container = document.getElementById("product-container");

//     let cards = products.map(product => {
//         return `
//         <div class="feature">
//             <img src="${product.thumbnail}" alt="${product.title}" />
//             <h2>${product.title}</h2>
//             <p>Price: $${product.price}</p>

//         </div>
//         `;
//     });
//     container.innerHTML = cards.join("");
    
// })
// .catch(error => {
//     console.log("Error fetching products: " + error);
// });


// async function loadEVs() {
//     try{
//         let response = await fetch("https://dummyjson.com/products");
//         let data = await response.json();
//         console.log(data.products[0].title);
//     } catch (error){
//         console.log("Error fetching products: " + error);
//     }
// }
// console.log("Before loading EVs");
// loadEVs();
// console.log("After loading EVs");

// async function loadEVs() {
//     let container = document.getElementById("product-container");
//     container.innerHTML = "<p>Loading products...</p>";
//     try{
//         let response = await fetch("https://dummyjson.com/products");
//         if (!response.ok) {
//             throw new Error("Network response was not ok: " + response.status);
//         }

//         let data = await response.json();
//         if (!data || data.products.length === 0) {
//             container.innerHTML = "<p>No products found.</p>";
//             return;
//         }

//         let products = data.products;
//         let cheapProducts = products.filter(product => product.price < 6);
        
//         if (cheapProducts.length === 0){
//             container.innerHTML = "<p>No cheap products found.</p>";
//             return;
//         }

//         let cards = cheapProducts.map(product => {
//             return `
//             <div class="feature">
//                 <img src="${product.thumbnail}" alt="${product.title}" />
//                 <h2>${product.title}</h2>
//                 <p>Price: $${product.price}</p>

//             </div>
//             `;
//         });
//         container.innerHTML = cards.join("");

//     } catch (error){
//         container.innerHTML = "<p>Error fetching products:</p>";
//         console.log("Error fetching products: " + error);
//     }
// }

// loadEVs();


// try {
//     let user = undefined;
//     console.log(user.name);
// } catch (error){
//     console.log("Something went Wrong" + error);
// }

// async function fetchInvalidEndpoint() {
//     try {
//         let res = await fetch("https://dummyjson.com/invalid-endpoint");
//         console.log(res);
//         if (!res.ok) {
//             throw new Error("Network response was not ok: " + res.status);
//         }
//         let data = await res.json();
//         if (!data || data.products.length === 0) {
//             throw new Error("No products found in response");
//         }
//     } catch (error) {
//         console.log("Error fetching data: " + error);
//     }
    
// }

// fetchInvalidEndpoint();
 
async function loadEVs() {
    let status = document.getElementById("loader");
    let container = document.getElementById("product-container");

    status.style.display = "block";
    container.style.display = "none";

    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();

    status.style.display = "none";
    container.style.display = "block";

    container.innerHTML = "Data loaded successfully!";
    
}

loadEVs();


let button = document.getElementById("check-btn");
let statusText = document.getElementById("status-text");

button.addEventListener("click", async () => {
    button.disabled = true;
    statusText.innerText = "Checking EV Status..."

    try{
        let result = await checkEVStatus();
        statusText.innerText = `EV Status: ${result}`;
    } catch (error) {
        statusText.innerText = error;
    }
    
    button.disabled = false;
    
});

function checkEVStatus() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.2
            if (success) {
                let statuses  = ["Available", "Charging", "In Use"];
                let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                resolve(randomStatus);
            } else {
                reject("Failed to fetch EV Status")
            }
            
        }, 3000);
    });
}