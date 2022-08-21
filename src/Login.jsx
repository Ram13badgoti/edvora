import React from "react";

import { useState, useEffect,useRef } from "react";
import {useNavigate, Routes , Route} from "react-router-dom"

import "./App.css"
import Order from "./Order";
const Login = () => {

  const [userID, setUserID] = useState();
  const [userName, setUserName] = useState();
  const [btnClick, setBtnClick] = useState(false);
  const [userVer,setVerify] = useState(false)
  const [user_id, setUser_id]= useState()
  const userL = useRef();
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/Order');
  };



   useEffect(()=>{
   
     
    
         fetch("https://assessment.api.vweb.app/users").then((res)=>
    res.json()).then(res=>{

userL.current = res;

// console.log(res);





})


.catch((err)=>{
   console.log(err);
})
      
   },[btnClick])
   
   const userVerify =()=>{
    console.log("btn click")
  
    userL.current.map((val)=>{
      if(val.name===userName ){
        setVerify(true);
        navigateToContacts()
        console.log("successful")
        setUser_id(val.user_id);
        
      }
    })
 
 
   }

  // console.log(userID);
  // console.log(userName);
  // console.log(userVer);

 

  return (
    <>
    { user_id ? <Order user_Id ={user_id}></Order>:null
  
    }
 
    <div className="Login_body">
      <div className="Login_container">
        <div className="screen">
          <div className="screen-com">
            <h1 className="login_h1">Login</h1>
            <form className="login" >
              <div className="login-field">
                <input
                  type="text"
                  className="login-input"
                  placeholder="User ID"
                  onChange={(e) => {
                    setUserID(e.target.value);
                  }}
                />
              </div>
              <div className="login-field">
                <input
                  type="text"
                  className="login-input"
                  placeholder="Username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <button type="button" 
                className="login-btn"
                onClick={(e) => {
                userVerify();
                setBtnClick(true)
                
                }}
              >
                <span className="btn-text">Log In Now</span>
              </button>
           
        {/* <Routes>
          <Route path="/App" element={<Products />} />
         </Routes> */}
         <Routes>
<Route path ="/Order" element={<Order/>}></Route>
         </Routes>
     
            </form>
          </div>
        </div>
      </div>
      </div>
      {/* <Routes>
      <Route path="/products" element={<Products />} />
    
    </Routes> */}
    {/* { (userVer)?( 
        <BrowserRouter>
        <Routes>
         
           <Route path="/products" element={<Products/>} />
        
          
        </Routes>
      </BrowserRouter>
    
    ):(console.log("no"))
  
} */}
    </>
  );
};
export default Login;
