import {Link, NavLink} from 'react-router-dom';

function Navbar() {
    return(
        <nav style={{display : "flex", gap : "20px", justifyContent : "center", alignItems : "flex-start"}}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/vehicles">Vehicles</NavLink>
            <NavLink to="/add-vehicle">Add Vehicle</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </nav>
    );
}

export default Navbar;