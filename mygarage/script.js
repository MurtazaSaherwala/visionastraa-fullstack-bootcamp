
//    GLOBAL STATE


let cars = [];
let currentView = "dashboard";
const addForm = document.getElementById("add-vehicle-form");
const nameInput = document.getElementById("vehicle-name");
const yearInput = document.getElementById("vehicle-year");



//    SIMULATED ASYNC FETCH


function fetchCars() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Honda City", year: 2020 },
        { id: 2, name: "Royal Enfield", year: 2022 },
        { id: 3, name: "Tesla Model 3", year: 2023 }
      ]);
    }, 2000);
  });
}


//    ASYNC DATA LOADER


async function loadCars() {
  const loadingText = document.getElementById("loading-text");


  loadingText.classList.remove("hidden");


  cars = await fetchCars();


  loadingText.classList.add("hidden");


  renderDashboard();
}

addForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const year = yearInput.value.trim();

  if (!name || !year) return;

  addVehicle({
    id: Date.now(),
    name,
    year
  });

  addForm.reset();
});

//    RENDER FUNCTIONS


function renderDashboard() {
  renderStats();
  renderVehicleList();
}

function renderStats() {
  const totalCount = document.getElementById("total-count");
  totalCount.textContent = cars.length;
}

function renderVehicleList() {
  const container = document.getElementById("vehicle-list");
  container.innerHTML = "";

  // Empty state
  if (cars.length === 0) {
    container.innerHTML = `
      <p class="empty-state">
        No vehicles yet. Add your first one.
      </p>
    `;
    return;
  }

  // Render list
  cars.forEach(car => {
    const item = document.createElement("div");
    item.className = "vehicle-item";

    const text = document.createElement("span");
    text.textContent = `${car.name} (${car.year})`;

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener('click', () => {
        removeVehicle(car.id);
    });
    item.appendChild(text);
    item.appendChild(removeBtn);
    container.appendChild(item);
  });
}

function addVehicle(vehicle) {
  cars.push(vehicle);
  renderDashboard();
}

function removeVehicle(id) {
    cars = cars.filter(car => car.id !== id);
    renderDashboard();
}


//    NAVIGATION LOGIC


const navItems = document.querySelectorAll(".nav li");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const viewName = item.textContent.toLowerCase();
    switchView(viewName);
  });
});

function switchView(viewName) {
  currentView = viewName;

  // Hide all views
  document.querySelectorAll(".view").forEach(view => {
    view.classList.add("hidden");
  });

  // Show active view
  document
    .getElementById(`view-${viewName}`)
    .classList.remove("hidden");

  updateHeader(viewName);
  updateActiveNav(viewName);
}

function updateHeader(viewName) {
  const headerTitle = document.querySelector(".header h1");
  headerTitle.textContent =
    viewName.charAt(0).toUpperCase() + viewName.slice(1);
}

function updateActiveNav(viewName) {
  navItems.forEach(item => {
    item.classList.remove("active");

    if (item.textContent.toLowerCase() === viewName) {
      item.classList.add("active");
    }
  });
}


//    INITIALIZE APP

switchView("dashboard");
loadCars();


