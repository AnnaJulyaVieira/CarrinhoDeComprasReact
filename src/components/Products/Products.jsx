import /* React, */ { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../Api/FetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loding/Loding';
import AppContext from '../../Context/AppContext';
/* import AppContext from '../../context/AppContext'; */

function Products() {

  const {products, setProducts,loading, setLoading} = useContext(AppContext);
  
  

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading /> ) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
    
  );
}

export default Products;