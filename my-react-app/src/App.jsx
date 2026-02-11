import './App.css'
import Home from './pages/Home'
import Posts from './pages/Posts'
import { use, useState, useEffect } from 'react';

// function Counter(){
//     const [count, setCount] = useState(0);

//     return (
//       <>
//         <button onClick={() => setCount(count + 1)}>{count}</button>
//       </>
//     );
// }

function App() {
  // const [count, setCount] = useState(0);
  // console.log("Component Rerendered");
  // return (
  //   <>
  //     <h1>{count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Increase Count</button>
  //   </>
  // );

  // const [color, setColor] = useState("red");
  

  // return (
  //   <>
  //     <h1 style = {{color: color}}>Hello!</h1>
  //     <button onClick={() => setColor("blue")}>Change Color</button>
  //   </>
  // )

  // return(
  //   <>
  //     <Counter />
  //     <Counter />
  //   </>
  // )

  // const [battery, setBattery] = useState(50);
  // const [isCharging, setIsCharging] = useState(false);
  // const [temperature, setTemprature]= useState(25);
  // const [mode, setMode] = useState("slow");

  // function chargeBattery() {
  //   const increment = mode === "fast" ? 20 : 10;
  //   setBattery((prevBattery) => Math.min(prevBattery + increment, 100));
  //   setIsCharging(true);
  //   setTemprature((prev) => prev + 1);
  //   }

  // function dischargeBattery() {
  //   setBattery((prevBattery) => Math.max(prevBattery - 10, 0));
  //   setIsCharging(false);
  //   setTemprature((prev) => prev - 1);
  // }

  // const batteryClass =
  //   battery > 60 
  //   ? "high"
  //   : battery > 30
  //   ? "medium"
  //   : "low";

  // return (
  //   <div>
  //     <h1 className={batteryClass}>Battery : {battery}%</h1>
  //     <p>Status : {isCharging ? "Charging" : "Not Charging"}</p>
  //     <p>Temperature : {temperature}°C</p>

  //     {battery === 100 && <p>Battery is fully charged!</p>}
  //     {/* <div className='battery-bar'>
  //       <div style={{
  //         width: `${battery}%`,
  //         height: "100%",
  
  //         backgroundColor: battery < 30 ? "red" : battery < 60 ? "yellow" : "green"
  //       }} />
  //     </div> */}
  //     <button onClick={chargeBattery} disabled={battery === 100}>Charge</button>
  //     <button onClick={dischargeBattery} disabled={battery === 0}>Discharge</button>
  //     <button onClick={() => setMode(mode === "fast" ? "slow" : "fast")}>{mode}</button>
  //   </div>

  // );

  // const [battery, setbattery] = useState(50);
  // const [mode, setMode] = useState("slow");
  // useEffect(() => {
  //   console.log("Battery level changed:", battery);
  // }, [battery, mode]);
  
  // return (
  //   <div>
  //     <h1>Battery : {battery}%</h1>
  //     <button onClick={() => setbattery(battery + 10)}>Charge</button>
  //     <button onClick={() => setbattery(battery - 10)}>Discharge</button>
  //     <button onClick={() => setMode(mode === "fast" ? "slow" : "fast")}>{mode}</button>
  //   </div>
  // )

  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStations() {
      // const response = await fetch("https://jsonplaceholder.typicode.com/users");
      // const data = await response.json();


      // const mockData = [
      //   { id: 1, name: "Station A", location: "Downtown" },
      //   { id: 2, name: "Station B", location: "Highway" },
      //   { id: 3, name: "Station C", location: "Mall Area" }
      // ];

      // await new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        if (data.length === 0) {
          throw new Error("No stations found");
        }
        setStations(data);
      } catch (err) {
        setError(err.message);
      } finally { 
      setLoading(false);
      }
      
    }

    fetchStations();
  }, []);

  return (
    <div>
      <h1>EV Charging Stations</h1>

      {loading && <p>Loading stations...</p>}
      
      {error && <p style={{ color: "red" }}>ERROR !! : {error}</p>}

      {!loading && !error && 
      (stations.map((station) => (
        <div key={station.id} className="station-card">
          <h2>{station.name}</h2>
          <p>{station.location}</p>
          <p>{station.email}</p>
        </div>
      )))}
    </div>
  );
}

export default App


