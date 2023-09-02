import { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Product />
      {/* <Cart /> */}
      <Footer />
    </>
  );
}

export default App;
