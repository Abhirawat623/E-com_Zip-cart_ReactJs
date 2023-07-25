import { useState } from 'react';
import Carts from './components/carts';
import Header from './components/Header';
import Subheader from './components/Subheader';

import './App.css';

const  App=()=> {
const [cartItems,setCartItems]=useState(0);

const handleOnAddItem=()=>{
  setCartItems(cartItems+1);
}

const handleOnRemoveItem=()=>{
  setCartItems(cartItems-1);
}


  return (
    <div>
      <Header count={cartItems}/>
      <Subheader/>
    <Carts onAddItem={handleOnAddItem} onRemoveItem={handleOnRemoveItem} />
   </div>
  );
}

export default App;
