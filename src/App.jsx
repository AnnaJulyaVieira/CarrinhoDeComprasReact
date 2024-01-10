import './App.css'
import Provider from './Context/Provider'
import Cart from './components/Cart/Cart'
/* import React from 'react' */
import Header from './components/Header/Header'
import Products from './components/Products/Products'

function App() {

  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>

  )
}

export default App
