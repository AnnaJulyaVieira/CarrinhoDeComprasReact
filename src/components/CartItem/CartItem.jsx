/* import React from 'react'; */
import { BsCartXFill } from "react-icons/bs";
import './CartItem.css'
/* import formatCurrency from "../../utils/formatCurrency"; */
import PropTypes from 'prop-types';  
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";

function CartItem({data}) {

  const {title, thumbnail, price} = data
  const { cartItems, setCartItems } = useContext(AppContext)

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== data.id);
    setCartItems(updatedItems);
  };
  
  return (
    <section className='cart-item'>
      <img src={thumbnail} alt="Imagem do produto" className='cart-item-image' />  

      <div className="cart-item-content">
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='ca rt-item-price'>{formatCurrency(price, 'BRL')}</h3>

        <button type='button' className="button_remove-item" onClick={handleRemoveItem}>
        <BsCartXFill />
        </button>
      </div>
    </section>

    
    );
}

export default CartItem;

CartItem.propTypes = {
  data: PropTypes.object
}.isRequired;