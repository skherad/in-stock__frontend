import { BrowserRouter, Routes, Route } from "react-router-dom";

import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import AddNewWarehouse from "./pages/AddNewWarehouse/AddNewWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import EditInventory from "./components/EditInventory/EditInventory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Warehouse />} />
          <Route
            path="/warehouse/:warehouseId"
            element={<WarehouseDetails />}
          />
          <Route path="/addNewWarehouse" element={<AddNewWarehouse />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route
            path="/editWarehouse/:warehouseId"
            element={<EditWarehouse />}
          />
        </Routes>
        {/* <InventoryItemDetails /> DELETE ME */}
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
