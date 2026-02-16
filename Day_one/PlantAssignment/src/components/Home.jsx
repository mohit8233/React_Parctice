import { ChevronLeft, Heart } from "lucide-react";
import React from "react";
// import 'Home.css'

const Home = () => {
  return (
      <>
        <div className="container">
           <div className="box">
            <span className="back"> <ChevronLeft/> BACK TO ALL PLANTS</span>
           <span className="heart"><Heart/></span>
           </div>
           
      <div className="card">
        <div className="left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDl_G8DBfa-RD2Z7gX27G82dJJDLLhOdPMQ&s" alt="plant" />
        </div>

         <div className="right">
          <h2>CLASSIC PEACE LILY</h2>
          <p className="sub">POPULAR HOUSE PLANT</p>
          <h3>$18</h3>

          <p className="desc">
            Classic Peace Lily is a spathiphyllum floor plant arranged in a 
            bamboo planter with a blue & red ribbon and butterfly pick.
          </p>

          <div className="buttons">
            <button className="cart">ADD TO CART</button>
            <button className="wish">WISHLIST</button>
          </div>
        </div> 
      </div>
   
   
     </div>
    </>
  );
};

export default Home;
