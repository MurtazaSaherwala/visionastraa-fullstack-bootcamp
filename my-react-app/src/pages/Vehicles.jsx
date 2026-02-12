import { useEffect } from 'react';
import { Link } from 'react-router-dom';



const vehicles = [
    {id : 1, name : "Tesla", price : 10000},
    {id : 2, name : "Ducati", price : 5000},
    {id : 3, name : "Volvo", price : 20000},
];

function Vehicles() {
    return (
        <div>
            <h1>All Vehicles</h1>
            <ul style={{listStyle: "none", padding: 0}}>
                {vehicles.map((vehicle)=> (
                    <li key = {vehicle.id}>
                        <Link to={`/vehicle/${vehicle.id}`}>
                            {vehicle.name} (${vehicle.price})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Vehicles;
