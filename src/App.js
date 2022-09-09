import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";

import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Warehouse />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route
            path="/editWarehouse/:warehouseId"
            element={<EditWarehouse />}
          />
        </Routes>
        <WarehouseDetails />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
