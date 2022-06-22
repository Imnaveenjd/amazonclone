import React from 'react'
import { useStateValue } from './StateProvider'
import "./Payment.css"
import CheckoutProduct from './CheckoutProduct' ;
import {Link,Navigate,useNavigate} from 'react-router-dom';

import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useEffect } from 'react';
import axios from './axios';


function Payment() {
    const stripe=useStripe();
    const element=useElements();
    const navigate=useNavigate();
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [clientSecret,setClientSecret]=useState(true);
    
    

    const [{basket,user},dispatch]=useStateValue();
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);

    useEffect(() => {
      const getClientSecret=async()=>{
        const response=await axios({
          method: 'post',
         
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
        setClientSecret(response.data.clientSecret)

      }
      getClientSecret();
      
    },[basket])
    
  
    const handleSubmit=async (event) => {
      event.preventDefault();
      setProcessing(true);


      const payload=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card: element.getElement(CardElement)
          }
          }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            Navigate('/orders',{replace:true});
          })
          
        }
    
    const handleChange=event=>{
      setDisabled(event.empty);
      setError(event.error? event.error.message:"");
      
    }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
            </h1>
          <div className='payment__section'>
      
              <div className='payment__title'>
                <h3>Delivery Address</h3>
              </div>
              <div className='payment__address'>
                 <p>{user?.email}</p>
                <p>123 Mary street</p>
                <p>kovai,Tamilnadu</p><p>India</p>
               
              </div>
          </div>

     
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Review items and delivery</h3>
            </div>
          <div className='payment__items'>
              {basket.map(item => (
                  <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                  />
              ))}
            </div>
         </div>


     
      <div className='payment__section'>
        <div className="payment__title">
            <h3>Payment Method</h3>
        </div>
        <div className="payment__details">


            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className='payment__priceContainer'>
              <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total:{value}</h3>
                      
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)} 
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs "}
            />
              <button disabled={processing || disabled ||succeeded}>
                <span>{processing? <p>Processing</p>:"Buy now"}
                 </span>
              </button>

              </div>
            </form>
        </div>
      </div>
   </div>
  </div>
  )
}

export default Payment;
