import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Orders from "./pages/Orders/Orders";
import Products from "./pages/Products/Products";
import Customers from "./pages/Customers/Customers";
import Customer from "./pages/Customer/Customer";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:userID" element={<Customer />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
        
    </div>
  );
}

export default App;
