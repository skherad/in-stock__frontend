import { BrowserRouter, Routes, Route } from "react-router-dom";

import Warehouse from './pages/Warehouse/Warehouse';
import Inventory from './pages/Inventory/Inventory';
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Warehouse />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/editWarehouse/:warehouseId" element={<EditWarehouse />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;