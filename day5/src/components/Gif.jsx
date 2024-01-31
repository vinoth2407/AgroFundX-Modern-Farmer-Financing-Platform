import React from "react";
import '../assets/css/Gif.css'
import animation from '../assets/videos/mainback.mp4'
import Button from '@mui/material/Button';



function HomePage() {
 
    return ( 

        <>
        <div className="splitscreen">
        <div className="toppane">
        <h1 className="h1">"Welcome to AgroFundX"</h1>

<h2 className="h2">AgroFundX is a revolutionary farmer financing platform designed to empower agricultural communities by providing innovative financial solutions tailored to the unique needs of farmers. This platform acts as a catalyst for sustainable farming practices, offering farmers access to crucial capital and resources that are essential for the growth and success of their agricultural endeavors.AgroFundX leverages cutting-edge technology to streamline the financing process, enabling farmers to secure loans efficiently and at competitive rates.</h2>
  <div className="getstarted">
  

  </div>
        </div>
        <div className="bottompane">
        <video className='videoTd' autoPlay loop muted>
           <source src={animation} type='video/mp4' />
      </video>
        </div>
      </div>
      
        
        </>
     );
}

export default HomePage;