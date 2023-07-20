import { useState } from "react";
import CartLists from "./CartLists";
const Carts =()=>{

const [items,setItems] = useState(
[
{ id:1,
  discountedPrice: 500,
  price:800,
  title:"Product Title 1",
  thumbnail:"product.png",

},
{ id:2,
  discountedPrice: 4200,
  price:7200,
  title:"Product Title 2",
  thumbnail:"product.png"
},{
  id:3,
  discountedPrice: 1200,
  price:7000,
  title:"Product Title 3",
  thumbnail:"product.png"
},
{
  id:4,
  discountedPrice: 700,
  price:900,
  title:"Product Title 4",
  thumbnail:"product.png"
}
]);

 return(
  <div>
<div className="cart-lists">

{/* <CartLists data={items[0]}></CartLists>
<CartLists data={items[1]}></CartLists> */}

{items.map(item=>{
  return (<CartLists data ={item}/>)})}


</div></div>

    )
}

export default Carts;