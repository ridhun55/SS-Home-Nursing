import React from 'react'
import {Link} from 'react-router-dom'

const Carousel = () => {
   return (
      <>
         <div className="intro-slider-container">
            <div className="intro-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl" 
            data-owl-options={{
               "nav": "false",
               "autoplay":"true",
               "autoplayTimeout":"1000",
               "autoplayHoverPause":"false",
               "responsive": {
               992: {
               "nav": 'true'
               }
               }
               }}>
               <div className="intro-slide" style={{backgroundImage: "url('assets/images/demos/demo-13/slider/slide-1.png')"}}>
                  <div className="container intro-content">
                     <div className="row">
                        <div className="col-auto offset-lg-3 intro-col">
                           <h3 className="intro-subtitle">Leading Home Hursing Service in Kerala</h3>
                           <h1 className="intro-title">S S Home Nursing<br /><sup className="font-weight-light">in</sup> Calicut <span className="text-primary">Experianced Nurses<sup> 100%</sup></span></h1>
                           <Link className="btn btn-outline-primary-2" to="/booking">Appointment</Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="intro-slide" style={{backgroundImage: "url('assets/images/demos/demo-13/slider/slide-2.jpg')"}}>
                  <div className="container intro-content">
                     <div className="row">
                        <div className="col-auto offset-lg-3 intro-col">
                           <h1 className="intro-title">Professional <br /> <sup className="font-weight-light ">&amp; </sup> Proficient <span className="text-primary">Nursing Service <sup> 24 hrs</sup></span></h1>
                           <Link className="btn btn-outline-primary-2" to="/booking">Appointment</Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="intro-slide" style={{backgroundImage: "url('assets/images/demos/demo-13/slider/slide-3.jpg')"}}>
                  <div className="container intro-content">
                     <div className="row">
                        <div className="col-auto offset-lg-3 intro-col">
                           <h3 className="intro-subtitle">Best</h3>
                           <h1 className="intro-title">Baby Care<br/><sup className="font-weight-light"> you can</sup> Get in<span className="text-primary">Calicut<sup></sup></span></h1>
                           <Link className="btn btn-outline-primary-2" to="/booking">Appointment</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Carousel
