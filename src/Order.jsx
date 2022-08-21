import React from "react";
import { useEffect,useState ,useRef} from "react";

import Products from "./Products";
const Order =(props)=>{
console.log(props.user_Id)
const [order,setOrder] =useState([]);
const Order = useRef();
const arr = new Array({});

    useEffect(()=>{
fetch("https://assessment.api.vweb.app/orders").then((res)=>res.json()).then((res)=>{
    Order.current=res
    setOrder(res);
  
 
    }

).catch((er)=>{
    console.log(er);
})


    },[])
   
    // console.log("order"+order)
    

    order.map(val=>{
       if(val.user_id===2){
        // console.log(val)
      arr.push({"user_id":val.user_id,"product_id":val.product_id, "order_id":val.order_id,"product_qunatity":val.quantity,"product_order_date":val.order_date});
    
    
       }
    })
// console.log(arr)
// console.log(quantity)


    return (
        <>
      
       
        {arr?  
       
            <Products  data ={arr} />
        

      
     : null }
        </>
    )
}


export default Order;