// import './styles/global.scss'

 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Warehouse from './pages/Warehouse/Warehouse';
import Inventory from './pages/Inventory/Inventory';
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import WarehouseHeader from "./components/Header/WarehouseHeader";


function App() {
  return (
    <>
      <BrowserRouter>
          <WarehouseHeader />
          <Routes>
            <Route path="/" element={<Warehouse />} />
            <Route path="/inventory" element={<Inventory />} />
            {/* <Route path="/warehouseDetails" element="Michael's warehouse detail component will go here"></Route>  */}
            <Route path="/editWarehouse/id1" element={<EditWarehouse />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;