import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from './pages/Warehouse/Warehouse';
import Inventory from './pages/Inventory/Inventory';

import AddNewWarehouse from "./pages/AddNewWarehouse/AddNewWarehouse";

import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'




function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Warehouse />} />
            <Route path="/addnewwarehouse" element={<AddNewWarehouse />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/editWarehouse/:warehouseId" element={<EditWarehouse />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
