import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { Cart } from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import { CartContextProvider } from "./context/CartContext";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { FAQSection } from "./components/pages/FAQSection";
import Home from "./components/pages/Home";
import ShippingReturns from "./components/pages/ShippingReturns";
import { SeguimientoPedidosMascotas } from "./components/pages/SeguimientoPedidosMascotas";
import PaymentMethods from "./components/pages/PaymentMethods";

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shipping" element={<ShippingReturns />} />
        <Route path="/seguimiento" element={<SeguimientoPedidosMascotas />} />
        <Route path="/payment" element={<PaymentMethods />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
