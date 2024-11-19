import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Layout from "./layout.jsx";
import Search from "./pages/Search.jsx";
import Sidebar from "./components/Sidebar.jsx";

const ThemeContext = createContext();
const CartContext = createContext();

const layout = (element) => <Layout>{element}</Layout>;

const App = () => {
  console.log("App");

  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar open state

  const updateCart = (newCart) => {
    console.log("UPDATE CART", newCart);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartContext.Provider
        value={{
          cart,
          size: cart.reduce((acc, curr) => parseInt(curr.quantity) + acc, 0),
          cartTotal: cart.reduce((acc, curr) => {
            const price = curr.discounted_price
              ? parseFloat(
                  curr.discounted_price.substring(1).replaceAll(",", "")
                )
              : curr.actual_price;
            return price * curr.quantity + acc;
          }, 0),
          subtotal: cart.reduce((acc, curr) => {
            if (curr.selected) {
              const price = curr.discounted_price
                ? parseFloat(
                    curr.discounted_price.substring(1).replaceAll(",", "")
                  )
                : curr.actual_price;
              return price * curr.quantity + acc;
            }
            return acc;
          }, 0),
          updateCart,
        }}
      >
        <BrowserRouter>
          <Sidebar open={sidebarOpen} onClose={toggleSidebar} />

          <Routes>
            <Route path="/" element={layout(<Home />)} />
            <Route path="/cart" element={layout(<Cart />)} />
            <Route path="/search" element={layout(<Search />)} />
            <Route path="/search/abc" element={layout(<Search />)} />
            <Route
              path="/search/:searchId/:eview/:reviewId"
              element={layout(<Search />)}
            />
            <Route path="/product" element={layout(<div>Product Page</div>)} />
            <Route
              path="/product/:productId"
              element={layout(<div>Product Dynamic</div>)}
            />

            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext, CartContext };
