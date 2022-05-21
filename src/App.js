import "./App.css";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/add-products" element={<AddProduct />}></Route>
            <Route path="/details/:productId" element={<ProductDetails />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
