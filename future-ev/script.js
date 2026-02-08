const statusText = document.getElementById("status");
const loader = document.getElementById("loader");
const container = document.getElementById("ev-container");
const button = document.getElementById("check-btn");


//    Async data fetch function

async function fetchEVs() {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch EV data");
  }

  const data = await response.json();
  return data.products;
}


//    UI render function

function renderEVs(evs) {
  if (evs.length === 0) {
    container.innerHTML = "<p>No EVs available.</p>";
    return;
  }

  const cards = evs.map(ev => `
    <div class="card">
      <h3>${ev.title}</h3>
      <p>₹${ev.price}</p>
    </div>
  `);

  container.innerHTML = cards.join("");
}

//    Event + Async Flow

button.addEventListener("click", async () => {
  statusText.innerText = "Checking EV status...";
  loader.style.display = "block";
  container.innerHTML = "";
  button.disabled = true;

  try {
    const evs = await fetchEVs();
    renderEVs(evs);
    statusText.innerText = "EV data loaded successfully.";
  } catch (error) {
    statusText.innerText = error.message;
  } finally {
    loader.style.display = "none";
    button.disabled = false;
  }
});
