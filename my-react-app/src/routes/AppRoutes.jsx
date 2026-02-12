import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Vehicles from '../pages/Vehicles'
import AddVehicle from '../pages/AddVehicle'
import Profile from '../pages/Profile'
import VehicleDetails from '../pages/VehicleDetails'
import NotFound from '../pages/NotFound'  

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/add-vehicle' element={<AddVehicle />} />
        <Route path='/vehicle/:id' element={<VehicleDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    );
}

export default AppRoutes;