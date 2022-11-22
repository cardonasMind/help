import React from 'react'
import Showcase1 from '../Bilder/showcase-img-1.png';
import Showcase2 from '../Bilder/showcase-img-2.png';



const Showcase = () => {
  return (
    <section className="">
      <div className='showcase-container'>
          <div className="img1-container">
            <img className='hero-img1'  src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png" alt="" />
          </div>
          <div className="text-container">
            <h1><strong>Sale Up <br />To 50% Off</strong></h1>
            <p>Online shopping free home delivery over $100</p>
            <span className='showcase-btn-span'><button className='showcase-btn'>SHOP NOW</button></span>
          </div>
          <div className="img2-container">
            <img className='hero-img1' src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png" alt="" />
          </div>
        </div>
    </section>
  )
}

export default Showcase



        {/* <div className="container">
          <div className="showcase-content">
            <img className="_img-left" src={Showcase1} alt="female"/>
            <div><h1><strong>SALE UP <br/> To 50% off</strong></h1></div>
            <p>Online shopping free home delivery over $100</p>
            <div className="general_button">
              <a href = "#"><button type= "button" className="btn special_button"></button></a>
            </div>
            <div><img className="_img-right" src={Showcase2} alt="male"/></div>
          </div>
        </div> */}

