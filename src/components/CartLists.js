import { Fragment, useState } from "react";
import Modal from "../ui/Modal";

const CartLists =({data,onAdd,onRemove})=>{

     console.log(data)
  
    //  const [ counter ,setCounter ] =useState(0);

     const decreaseCounterByOne = (event)=>{
        event.stopPropagation();

    //     if(counter===0){return}
    //    if(counter===1){
        onRemove(data.id);
    //    }
        // setCounter(counter-1);
     }

     const increaseCounterByOne =(event)=>{
        event.stopPropagation();
        // setCounter(counter+1)
       onAdd(data.id);
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
        data.quantity <1 ? 
        <button className="add-to-cart-btn" onClick={increaseCounterByOne}>
        <span>Add To Cart</span>
        <img src="/imagelogos/R.png" alt="logo" width="15px" height="15px"/></button>
        :
        <div className="counter-buttons">
        <button className="counter" onClick={decreaseCounterByOne}>-</button>
        <span>{data.quantity}</span>
        <button className="counter" onClick={increaseCounterByOne}>+</button>
        </div>}
        
       
  
    
    </div>
  
    </div>
    { modal && 
                <Modal onClose={handleModal}>
                 
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={"/imagelogos/"+data.thumbnail} alt={data.title} />
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className={"pricing"}>
                                <span>₹{data.discountedPrice}</span>
                                <small>
                                    <strike>₹{data.price}</strike>
                                </small>
                            
                            <p className="item-description">{data.description}</p>
                            </div>
                            { 
        data.quantity <1 ? 
        <button className="add-to-cart-btn" onClick={increaseCounterByOne}>
        <span>Add To Cart</span>
        <img src="/imagelogos/R.png" alt="logo" width="15px" height="15px"/></button>
        :
        <div className="counter-buttons">
        <button className="counter" onClick={decreaseCounterByOne}>-</button>
        <span>{data.quantity}</span>
        <button className="counter" onClick={increaseCounterByOne}>+</button>
        </div>}</div>
                        
                    </div>
                </Modal> 
    }
    </Fragment>

)
}
export default CartLists;