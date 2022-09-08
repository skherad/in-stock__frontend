import { BrowserRouter, Routes, Route } from "react-router-dom";

import Warehouse from './pages/Warehouse/Warehouse';
import Inventory from './pages/Inventory/Inventory';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;