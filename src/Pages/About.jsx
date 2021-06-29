import React from 'react'
import PageTitle from '../Components/PageTitle/PageTitle'

const About = () => {
   return (
      <>
      <div class="page-content pb-3">
         <div class="container">
            <div class="row">
               <div class="col-lg-3 col-md-3"></div>
               <div class="col-lg-9">
                  <div class="about-text text-center mt-3">
                     <PageTitle page_title="About Us"/>
                     
                     <p class="mx-xl-5 pb-1"><span style={{color:'#66b9f2',fontWeight:'600'}}>S.S Home Nursing</span> is one leading service providers of 
                        <span style={{fontWeight:'600'}}> Home Nusre, Home Maid, Baby Care &amp; Delivery Care.</span><br/> 
                        We are one of the leading service providers of Home Nursing services in kozhikode. 
                        We are experienced, skilled and help the patient with care and honesty. 
                        Our team are ready to give nursing care to your loved ones. 
                     </p>
                     <p class="pb-1">We train Our Staff in our assisted living facilities and <br/>impart all the necessary 
                        skills for outstanding Home Nursing Services.
                     </p>
                     <img src="assets/images/about/about-2/signature.png" alt="signature" class="mx-auto mb-5"/>

                     <img src="assets/images/about/about-2/img-1.jpg" alt="image" class="mx-auto mb-6"/>
                  </div>
               </div>
            </div>
                    
         </div>
      </div>

      </>
   )
}

export default About
