import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
        <Product
               id="128555"
               title="RedGear Gaming Mouse"
               price={499}
               rating={5}
               image='https://m.media-amazon.com/images/I/51KjQmtjqES.jpg'
               
               />
          {/* <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          /> */}
          {/* <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          /> */}
          <Product
               id="126555"
               title="Five Go Off In A Caravan: Book 5 (Famous Five)"
               price={304}
               rating={5}
               image='https://images-na.ssl-images-amazon.com/images/I/61BpJFRZSQL._SX324_BO1,204,203,200_.jpg'
               
               />
        </div>

        <div className="home__row">
          {/*  */}
          <Product
             id="124555"
             title="Prestige IRIS Burner, Black,
              Powder coater"
             price={7792}
             rating={5}
             image='https://m.media-amazon.com/images/I/610uDLQFxeL._AC_SR320,380_.jpg'
             
              
               /> 
              <Product
              id="123555"
               title="Prestige PWG 07 Wet Grinder"
               price={18000}
               rating={5}
               image='https://rukminim1.flixcart.com/image/416/416/k37mg7k0/wet-grinder/q/z/c/pwg-07-prestige-original-imafmecpnvwdqhdd.jpeg?q=70'
               
               />
               <Product
               id="123455"
               title="Samsung 28 L Convection Microwave Oven"
               price={14790}
               rating={3}
               image='https://m.media-amazon.com/images/I/81dsNsI-L1L._SX679_.jpg'
               
               />
        </div>

        <div className="home__row">
        <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={19999}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) "
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) "
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />

        </div>

        <div className="home__row">
         
           <Product
             id="123456"
             title="Samsung  (60 inches) Crystal 4K Series Ultra HD Smart LED TV UA50AUE60AKLXL"
             price={46990}
             rating={4}
             image='https://m.media-amazon.com/images/I/71EJyvKSIFL._SX450_.jpg'
             
             />
        </div>


      </div>
    </div>
  );
}

export default Home;