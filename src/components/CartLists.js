import { Fragment, useState } from "react";
import Modal from "./Modal";

const CartLists =({data})=>{

     console.log(data)
  
     const [ counter ,setCounter ] =useState(0);

     const decreaseCounterByOne = ()=>{
        if(counter===0){return}
        
        setCounter(counter-1);
     }

     const increaseCounterByOne =()=>{
        setCounter(counter+1)
     }
 
     const [modal,setModal]=useState(false);

     const handleModal=()=>{
      setModal(modalvalue=>!modalvalue);
     }

return(
<Fragment>
        <div onClick={handleModal} className={"card-container"}>
        
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

        { 
        counter <1 ? 
        <button className="add-to-cart-btn" onClick={increaseCounterByOne}>
        <span>Add To Cart</span>
        <img src="/imagelogos/R.png" alt="logo" width="15px" height="15px"/></button>
        :
        <div className="counter-buttons">
        <button className="counter" onClick={decreaseCounterByOne}>-</button>
        <span>{counter}</span>
        <button className="counter" onClick={increaseCounterByOne}>+</button>
        </div>}
        
       
  
    
    </div>
  
    </div>
    {modal && < Modal onClose={handleModal}/>}
    </Fragment>

)
}
export default CartLists;