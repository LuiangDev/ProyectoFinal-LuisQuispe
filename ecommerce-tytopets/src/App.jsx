import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { Cart } from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
