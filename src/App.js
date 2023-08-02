import { useState } from 'react';
import Carts from './components/carts';
import Header from './components/Header';
import Subheader from './components/Subheader';

import './App.css';

const  App=()=> {
const [cartItems,setCartItems]=useState([]);

const [eventQueue, setEventQueue] = useState({
  id: "",
  type: ""
})

const handleOnAddItem=(item)=>{
  // setCartItems(cartItems+1);
  let items=[...cartItems];
  let index = items.findIndex(i=>i.id ===item.id);
  if(index>-1){
    items[index] = item;
  }
  else{
    items.push(item);
  }
  setCartItems([...items])
}

const handleOnRemoveItem=(item)=>{

  let items=[...cartItems];
  let index = items.findIndex(i=>i.id ===item.id);
  if(items[index].quantity ===0){
    items.slice(index,1)
  }
  else{
    items[index]= item
  }
  setCartItems([...items]);
}

const handleEventQueue = (id, type) => {
  setEventQueue({
    id,
    type
  })
}


  return (
    <div>
      <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}/>
      <Subheader/>
    <Carts onAddItem={handleOnAddItem} onRemoveItem={handleOnRemoveItem} eventState={eventQueue}/>
   </div>
  );
}

export default App;
