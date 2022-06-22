import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();
  

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

          

          <div>
          
          <h4 className="checkout__heading">Hi,{user?.email}</h4>
          {basket.length === 0 && (
           <h4 className="checkout__title">
             Your shopping cart is empty 
             <a href={"./"}style={{color: 'green'}}> Shop today deals</a></h4>
             
          )}
            
            
          

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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
