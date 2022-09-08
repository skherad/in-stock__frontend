import { BrowserRouter, Routes, Route } from "react-router-dom";

import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>

      <WarehouseDetails />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
