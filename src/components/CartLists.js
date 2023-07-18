const CartLists =({data})=>{

     console.log(data)


return(
   <div className={"card-container"}>
    <img className={"image"} src={"/imagelogos/"+data.thumbnail} alt="product name" width="200px" height="200px"/>
    {/* //can use literal also `/imaelogos/${data.thmbnail} */}
  
   <div className={"prices"}>
    <span className={"new-price"}>Rs.{data.discountedPrice}</span>
        <small className={"old-price"}>
        <strike>Rs.{data.price}</strike>
        </small>
    </div>
    <div className="lower-cart">
    <h1 className="product-name">{data.title}</h1>
    <button className="add-to-cart-btn"><span>Add To Cart</span><img src="/imagelogos/R.png" alt="logo" width="15px" height="15px"/></button>
    </div></div>
 

)
}
export default CartLists;