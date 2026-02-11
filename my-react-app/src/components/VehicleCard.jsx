function VehicleCard({name, type, price, status}) { 
    return (
        <div className="vehicle-card">
            <h2>{name}</h2>
            <p>Type : {type}</p>
            <p>Price : {price}</p>
            <p>Status : {status}</p>
            <button>View Details</button>
        </div>
    );
}

export default VehicleCard;