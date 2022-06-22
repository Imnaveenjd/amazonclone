import React,{useEffect} from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Footer from "./Footer";
import  Payment  from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
// import Signup from "./Signup";


import{auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Signup from "./Signup";
const promise=loadStripe("pk_test_51LCK8mSCFyWUVcnO2gnPgXnXuuc9EKrMaJ51ObcyrDxinoq08IHFptW104MOkyv3DjLPw2QS1mWC7QwlViCjw8uT00uW6tkxy1"
  
);






function App() {
  const [{},dispatch]=useStateValue();


  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("the user>>>",authUser);

      if (authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })

      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })

      }
    })

  },[])
  return (
    // BEM
   <Router> 
     
      <div className="App">
        <Routes>
          <Route path="/login" element={[<Login/>]}/>
          <Route path="/Signup" element={[<Signup/>]}/>
          <Route path="/payment" element={[<Header/>,
          <Elements stripe={promise}>
          <Payment/>
          
          </Elements>]}/>
          <Route path="/checkout/login" element={[<Login/>]}/>
          <Route path="/checkout" element={[<Header/>,
          <Checkout/>,]}/>
          <Route  path="/" element={[<Header/>,<Home/>,<Footer/>]}/>
        </Routes>
      </div>
      
   </Router>
  );
}

export default App;
