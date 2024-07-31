import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemlist from "./CartItemlist";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-2 p-2">
      <div className="w-7/12 m-auto">
        <button className="p-2 m-2 bg-black text-white rounded-md" onClick={handleClearCart}>Clear Cart</button>
        {
          cartItems.length === 0 && (
            <h1>Cart is empty. Add Items to the cart</h1>
          )
        }
        <CartItemlist items = {cartItems}/>
      </div>
    </div>
  );
};

export default Cart;