import VehicleCard from '../components/VehicleCard.jsx';

function Home() {
  const vehicles = [
       {name : "Tesla Model 3",
        type : "Electric",
        price : "$45,000",
        status : "Available"},

        {name : "Toyota Fortuner",
        type : "Diesel",
        price : "$55,000",
        status : "Sold Out"},

        {name : "BMW i4",
        type : "Electric",
        price : "$60,000",
        status : "Comming Soon"},

  ];


  return (
      <div className='cards'>
        {vehicles.map((vehicle, index) => (
          <VehicleCard
            key = {index}
            name = {vehicle.name}
            type = {vehicle.type}
            price = {vehicle.price}
            status = {vehicle.status}
          />
        ))}
      </div>
  );
}

  export default Home;
