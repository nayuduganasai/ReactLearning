import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/meals";
import Cart from "./components/Cart/cart";
import CartProvider from "./store/CartProvider";

function App() {

const [cartIsShown,SetCartIsShown] = useState(false);

const showCartHandler =()=>{
  SetCartIsShown(true);
};

const hideCartHandler =()=>{
  SetCartIsShown(false);
}

  return (
    <CartProvider>
     {cartIsShown && <Cart onClickClose ={hideCartHandler}></Cart>}
    <Header onCartClick={showCartHandler}></Header>
    <main>
      <Meals></Meals>
    </main>
    </CartProvider>
  );
}

export default App;
