import React from "react";
import { useEffect,useState,useRef } from "react";

import Card from "./Card"
import "./App.css"
const Products =(props)=>{
   

const [product,setProduct] = useState([])
const  arr = new Array()
const  qunty = new Array()
const product_id = new Set()
const day = new Set()
const month = new Set()
const year = new Set()
const order = useRef()
order.current = props.data


useEffect(()=>{
    const url = "https://assessment.api.vweb.app/products";
    fetch(url).then((res)=>
         res.json()
    
    ).then(res=>{
        // console.log(res)
    setProduct(res);
   
    }).catch((err)=>{
        console.log(err);
    })
  
},[])




// console.log(props.data)


    return(
        <>
        <div className="Heading"  style={{  display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"black",height:"50px",color:"white"}}>
        <h1>You Ordered Products </h1>
        </div>
        
        { (!props.data) ? (console.log("empty")):(
       
          <>{
           props.data.map((val, key) => {
       
         
                          if(key!==0){
                         
                            product_id.add(val.product_id);
                    
                         qunty.push(val.product_qunatity)
                           
           let date=new Date(parseInt(val.product_order_date));
           arr.push({"day":date.getDate(),"month":date.getMonth(),"year":date.getFullYear()})
        
              day.add(date.getDate())             
              month.add(date.getMonth())             
              year.add(date.getFullYear())             
                          }
                         
                        //   console.log(product_id)
             })
          
             }</> )

}



                     
        {
        
        
       
       
        
        product.map((val,key)=>{

    // console.log(product_id)
    // console.log(arr)

if(product_id.has(val.product_id)){

  
 return (
 
 <Card

key={val.product_id}
qunatity = {qunty[key]}
product_id = {val.product_id}
 name ={val.name}
stock={val.stock}
selling_price = {val.selling_price}
data = {arr}
date = {day}
month = {month}
year = {year}

 />
 
 )

 
}
})



}
        </>
    )

    
}


export default Products;
