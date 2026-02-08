// Vehicle class (blueprint)
class Vehicle {
  constructor(model, range, price) {
    this.model = model;
    this.range = range;
    this.price = price;
  }

  getInfo() {
    return `${this.model} offers a range of ${this.range} km`;
  }
}

// Data source (array of objects via class instances)
const cars = [
  new Vehicle("Tesla Model 3", 500, 7000000),
  new Vehicle("Nexon EV", 465, 1500000),
  new Vehicle("BMW i4", 590, 7200000),
  new Vehicle("MG ZS EV", 461, 2200000)
];

const container = document.getElementById("carList");
const allBtn = document.getElementById("allBtn");
const highRangeBtn = document.getElementById("highRangeBtn");

// Render function (UI comes from data)
function renderCars(list) {
  const cards = list.map(car => `
    <div class="car">
      <h3>${car.model}</h3>
      <p>${car.getInfo()}</p>
      <p>Price: ₹${car.price}</p>
    </div>
  `);

  container.innerHTML = cards.join("");
}

// Initial render
renderCars(cars);

// Event-driven filtering
highRangeBtn.addEventListener("click", () => {
  const filtered = cars.filter(car => car.range > 500);
  renderCars(filtered);
});

allBtn.addEventListener("click", () => {
  renderCars(cars);
});
