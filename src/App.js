import { BrowserRouter, Routes, Route } from "react-router-dom";

import Warehouse from './pages/Warehouse/Warehouse';
import Inventory from './pages/Inventory/Inventory';
import AddNewWarehouse from "./pages/AddNewWarehouse/AddNewWarehouse";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/addnewwarehouse" element={<AddNewWarehouse />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;