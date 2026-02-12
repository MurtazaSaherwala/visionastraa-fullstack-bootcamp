import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const vehicles = [
    {id : 1, name : "Tesla", price : 10000, year : 2020, color : "Red"},
    {id : 2, name : "Ducati", price : 5000, year : 2019, color : "Black"},
    {id : 3, name : "Volvo", price : 20000, year : 2021, color : "Blue"},
];

function VehicleDetails() {
    const {id} = useParams();
    const vehicle = vehicles.find((v) => v.id === parseInt(id));
    // useEffect(() => {
    //     fetch(`api/vehicles/${id}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         // setVehicle(data);
    //     })
    // }, [id]);

    if (!vehicle) {
        return <NotFound />;
    }
    
    return (
        <div>
            <h1>Vehicle Details</h1>
            <p>Name: {vehicle.name}</p>
            <p>Price: ${vehicle.price}</p>
            <p>Year: {vehicle.year}</p>
            <p>Color: {vehicle.color}</p>
        </div>
    );
}

export default VehicleDetails;