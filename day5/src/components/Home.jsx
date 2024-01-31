import React from 'react'
import HomeNav from './HomeNav';
import '../assets/css/Home.css'
import img from '../assets/videos/homeback.mp4';
import Footer from './Footer';
import Blog from './benefits';
function Home() {
    return ( 
        <>
        <HomeNav/>
        <div>
        <div class="card1">
        <div class="card-body">
             <h1 className='h3'>AgroFundX-Harvest Your Prosperity</h1>
             <p>
             AgroFundX, the innovative farmer financing application, has revolutionized the agricultural landscape by providing a streamlined and accessible platform for farmers to secure essential financial support. This application is designed to cater specifically to the unique needs of farmers, offering a comprehensive suite of financial services to facilitate their operations. AgroFundX enables farmers to apply for loans, manage funds, and track expenses seamlessly, fostering efficiency and transparency in their financial activities.
             </p>
        </div>
          <video className='videoTd' autoPlay loop muted>
           <source src={img} type='video/mp4' />
          </video>
        </div>
        </div>
        <Blog/>
        <Footer/>
        </>
        
     );
}

export default Home;