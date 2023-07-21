import { useEffect, useState } from "react";
import CartLists from "./CartLists";
import axios from "axios";
const Carts =()=>{

  
const [items,setItems] = useState([]);

useEffect(()=>{

  //for fetching
  // fetch('https://react-ecom-a4977-default-rtdb.firebaseio.com/items.json').
  // then(response=>response.json()).    //to fulfill the 
  // then(data=>console.log(data)).
  // catch(err=>console.log(err))

  //for axios
  // axios.get('https://react-ecom-a4977-default-rtdb.firebaseio.com/items.json').
  // then(response=>{
  //   const data =response.data;
  //   console.log(data);
  //   setItems(data);
  // }). //not in curly braces console.lo response here
  // catch(err=>console.log(err));
 async function fetchingData(){
  try{
    const response = await axios.get('https://react-ecom-a4977-default-rtdb.firebaseio.com/items.json');
    const data = response.data;
    setItems(data);

  }
  catch(error){
    console.log("errror", error);
    alert("Some error occured")
  }
 }

 //call here
 fetchingData();
},[]
)






// [
// { id:1,
//   discountedPrice: 500,
//   price:800,
//   title:"Product Title 1",
//   thumbnail:"product.png",

// },
// { id:2,
//   discountedPrice: 4200,
//   price:7200,
//   title:"Product Title 2",
//   thumbnail:"product.png"
// },{
//   id:3,
//   discountedPrice: 1200,
//   price:7000,
//   title:"Product Title 3",
//   thumbnail:"product.png"
// },
// {
//   id:4,
//   discountedPrice: 700,
//   price:900,
//   title:"Product Title 4",
//   thumbnail:"product.png"
// }
// ]);

 return(
  <div>
<div className="cart-lists">

{/* <CartLists data={items[0]}></CartLists>
<CartLists data={items[1]}></CartLists> */}

{items.map(item=>{
  return (<CartLists key={item.id} data={item}/>)})
}

</div></div>

    )
}

export default Carts;