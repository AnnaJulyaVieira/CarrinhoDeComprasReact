/* import React from 'react'; */
import { FaCartShopping } from "react-icons/fa6";
import './CartButton.css'
import { useContext } from "react";
import AppContext from "../../Context/AppContext";

function CartButton() {
  const { cartItems, isCarVisible, setIsCarVisible } = useContext(AppContext);

  return ( 
    <button type="button" className='cart_button' onClick={() => setIsCarVisible(!isCarVisible)}> 
      <FaCartShopping />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
