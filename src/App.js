import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/component/home/Home";
import Service from "./component/Services/Service";
import Products from "./component/Products/Products";
import Testimonials from "./component/Testimonials/Testimonials";
import Faq from "./component/FAQ/Faq";
import Userdetails from "./component/FAQ/Userdetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Faq/tax/:id" element={<Userdetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
