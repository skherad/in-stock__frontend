import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import AddNewWarehouse from "./pages/AddNewWarehouse/AddNewWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import EditInventory from "./components/EditInventory/EditInventory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";

function App() {
  const [openModal, setOpenModal] = useState();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* warehouse routes */}
          <Route path="/" element={<Navigate to="/warehouse" />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
          <Route path="/warehouse/addNewWarehouse" element={<AddNewWarehouse />} />
          <Route path="/warehouse/editWarehouse/:warehouseId" element={<EditWarehouse />} />
          {/* inventory routes */}
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/inventoryDetail/:inventoryId" element={<InventoryItemDetails />} />
          <Route path="/inventory/addNewInventory" element={<AddNewInventory />} />
          <Route path="/inventory/editInventory/:inventoryId" element={<EditInventory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
