import React, { Component } from 'react'
import access from '../assets/videos/access.mp4'
import '../assets/css/benefits.css'
import img1 from '../assets/videos/access.mp4'
import img2 from '../assets/videos/financial.mp4'
import img3 from '../assets/videos/risk.mp4'

import { height } from '@mui/system'
function Blog() {
    return ( 
        <>
        <h1 style={{marginLeft:'39rem'}}>Customers</h1>
    <div class="card cv" style={{width: '21rem'}}>
        <div class="card-body">
            <h5 class="card-title jj">Access To Capital</h5>
            <video className='bk-img' autoPlay loop muted>
           <source src={img1} type='video/mp4' />
            </video>
            <p className='io'>
AgroFundX helps farmers access loans for seeds, fertilizers, equipment.</p>
        </div>
    </div>

    <div class="card cb" style={{width: '21rem', height: '391px' }}>
    <div class="card-body">
        <h5 class="card-title jj">Financial Inclusion</h5>
        <video className='bk-img' autoPlay loop muted>
           <source src={img2} type='video/mp4' />
            </video>
        <p>AgroFundX tailors financial solutions for farmers, meeting their unique needs in crop cycles.</p>
    </div>
    </div>

    <div class="card cn" style={{width: '21rem', height: '391px'}}>
    <div class="card-body">
        <h5 class="card-title jj">Risk Mitigation</h5>
        <video className='bk-img' autoPlay loop muted>
           <source src={img3} type='video/mp4' />
            </video>
        <p>
AgroFundX offers insurance for farmers, protecting against crop failures and unforeseen events to reduce risk.</p>
    </div>
    </div>
    
        </>
     );
}

export default Blog;