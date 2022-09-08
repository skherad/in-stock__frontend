import { BrowserRouter, Routes, Route } from "react-router-dom";

import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <WarehouseDetails />
    </BrowserRouter>
  );
}

export default App;
