import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import { useState } from "react";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  const [query, setQuery] = useState<string>("");
  return (
    <>
      <NavBar query={query} setQuery={setQuery}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products query={query}/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
