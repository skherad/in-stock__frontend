import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from './pages/Warehouse/Warehouse';
import Inventory from './pages/Inventory/Inventory';

import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import EditInventory from "./components/EditInventory/EditInventory";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'



function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Warehouse />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/editWarehouse/:warehouseId" element={<EditWarehouse />} />
            <Route path="/editInventory/:InventoryId" element={<EditInventory />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
