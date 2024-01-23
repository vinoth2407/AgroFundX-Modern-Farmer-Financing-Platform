import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
import Slider1 from '../assets/images/Slider1.jpg';
import Slider2 from '../assets/images/Slider2.jpg';
import Slider3 from '../assets/images/Slider3.avif';
import Slider4 from '../assets/images/Slider4.jpg';

const images = [Slider1, Slider2, Slider3, Slider4];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {images.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;