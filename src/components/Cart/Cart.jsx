/* import React from 'react'; */
import "./Cart.css"
import CartItem from '../CartItem/CartItem';
import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

function Cart() {

  const {cartItems, isCarVisible} = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)

  return ( 
  <section className={`cart ${isCarVisible ? 'cart--active': ''}`} >
      <div className='cart-items'>
      {cartItems.map((cartItems) => <CartItem key={cartItems.id} data={cartItems} />)}
      
    </div>

    <div className='cart-resume'>{formatCurrency(totalPrice, 'BRL')}
      
    </div>
  </section>
  );
}

export default Cart;