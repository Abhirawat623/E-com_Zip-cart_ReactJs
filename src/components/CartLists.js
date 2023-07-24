import { Fragment, useState } from "react";
import Modal from "../ui/Modal";

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
    { modal && 
                <Modal onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className={"pricing"}>
                                <span>₹{data.discountedPrice}</span>
                                <small>
                                    <strike>₹{data.price}</strike>
                                </small>
                            </div>
                            <p>{data.description}</p>
                            {
                                counter < 1 ?
                                <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
                                    <span>Add to Cart</span>
                                    <img src="/imagelogos/R.png" alt="Cart Icon"  width="21px" height="21px"/>
                                </button>
                                :
                                <div className="cart-addon card-addon__modal">
                                    <button onClick={decreaseCounterByOne}><span>-</span></button>
                                    <span>{counter}</span>
                                    <button onClick={increaseCounterByOne}><span>+</span></button>
                                </div>
                            }
                        </div>
                    </div>
                </Modal> 
    }
    </Fragment>

)
}
export default CartLists;