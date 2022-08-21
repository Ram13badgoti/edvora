import React from "react"

import "./App.css"

const Card =(props)=>{

console.log(props.qunatity)

  const month = ["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC"]
    return (
    
        <>
       { props ? console.log():null}
       <div className="Card">
      
      
      <div className="container">
<div className="example-1 ">

<div className="date">
   

  <span className="day">{props.product_id<15?Array.from(props.date)[0]:( props.product_id>15 && props.product_id<30  ?Array.from(props.date)[1] :  18)}</span>
        <span className="month">{month[props.month.values().next().value]}</span>
        <span className="year">{props.year}</span>
    
    </div>
 
 </div>
        
        
   
   <div className="product">
   <div className="images">
     <img src={"http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg"} alt="" />
   </div>
   <div className="product_details">
     <h1 className ="product_name">{props.name}</h1>
     <h2>${props.selling_price}</h2>
     <p className="desc">The Nike Epic Product </p>
     <div className="qunatity">
     
      <button className="plus-button ">-</button>
    
     <input  className="inputQunatity" placeholder={props.qunatity}/>
     <button className="plus-button ">+</button>   
</div>


     <span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span>
     <div className="buttons">
       <button className="add button">Add to Cart</button>
       <button className="like button"><span>♥</span></button>
     </div>
    
   </div>
 </div>
 </div>
 </div>
         
     
</>
    )
    
}

export default  Card;