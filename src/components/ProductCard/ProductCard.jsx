/* import React from 'react'; */
import "./ProductCard.css";
import { FaCartPlus } from "react-icons/fa6";
import PropTypes from 'prop-types';  
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const {cartItems , setCartItems} = useContext(AppContext)

  const handleAddCart = () => setCartItems ([ ...cartItems, data])

  const formattedPrice = price ? formatCurrency(price, 'BRL') : '';

  return (  
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="cardImage"
      />

      <div className="card_infos">
        <h2 className="card_price">{formattedPrice}</h2>
        <h2 className="card_title">{title}</h2>
      </div>

      <button type="button" className="button_add-cart" onClick={handleAddCart}>
        <FaCartPlus />
      </button>
    </section>
  );
}



export default ProductCard;

ProductCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
