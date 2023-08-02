import { useEffect, useState } from "react";
import CartLists from "./CartLists";
import axios from "axios";
import  Loader from "../ui/Loader";

const Carts =({onAddItem, onRemoveItem,eventState})=>{


const [items,setItems] = useState([]);

const handleAddItem = id => {
  let data = [...items]
  let index = data.findIndex(i => i.id === id)
  data[index].quantity += 1

  setItems([...data])
  onAddItem(data[index]);
}

const handleRemoveItem = id => {
  let data = [...items]
  let index = data.findIndex(i => i.id === id)
  if(data[index].quantity !== 0) {
      data[index].quantity -= 1
      setItems([...data])
      onRemoveItem(data[index])
  }
}

// const handleAddItem= id =>{
// // if( presentItem.indexOf(id)>-1){
// //   return;
// // }
// // setPresentItem([...presentItem,id])
// //  onAddItem()
  
// let data =[...items];
// let index = data.findIndex(i=>i.id===id);
// data[index.quantity] +=1;

// setItems([...data]);
// onAddItem(data[index]);
// }

// const handleRemoveItem= id =>{

//   // if(presentItem.indexOf(id)>-1){
//   //   let items = [...presentItem];
//   //   items.slice(presentItem.indexOf(id),1);
//   //   setPresentItem([...items])}
//   //   onRemoveItem()
  
//   let data = [...items];
//   let index =data.findIndex(i=>i.id===id);
//   if(data[index]!==0){
//     data[index].quantity -=1;
//     setItems([...data]);
//     onRemoveItem(data[index]);
//   }
  
//   }
  


const [loader,setLoader]=useState(true);
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
    const transformedData= data.map((item,index)=>{
      return{
      ...item,
     quantity:0,
      id:index}
    })
    setItems(transformedData);
    setLoader(false);

  }
  catch(error){
    console.log("errror", error);
    alert("Some error occured")
    setLoader(false);
  }
  finally{
    setLoader(false);
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
  return (<CartLists onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item}/>)})
}
</div>

{loader && <Loader/>}
</div>

    )
}

export default Carts;