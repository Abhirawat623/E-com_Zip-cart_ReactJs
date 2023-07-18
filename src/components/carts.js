import CartLists from "./CartLists";
const Carts =()=>{
 return(
<div className="cart-lists">
    <div className="cart-lists-wrapper">
<CartLists data={
{
  discountedPrice: 500,
  price:800,
  title:"Product Title",
  thumbnail:"product.png"
}
     }></CartLists>

<CartLists data={
{
  discountedPrice: 400,
  price:700,
  title:"Product Title",
  thumbnail:"product.png"
}
     }></CartLists>
</div></div>

    )
}

export default Carts;