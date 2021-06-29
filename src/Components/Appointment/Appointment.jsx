import React from 'react'
import {Link} from 'react-router-dom'

const Appointment = () => {
   return (
      <>
         <div class="cta cta-horizontal cta-horizontal-box bg-primary">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-2xl-5col text-center">
                            <h3 class="cta-title text-white"></h3>
                            <Link to="/booking" type="button" class="btn btn-light btn-lg btn-block">Appointment</Link>
                            <p class="cta-desc text-white">For our services</p>
                        </div>
                          <div class="col-2xl-5col text-center">
                            <h3 class="cta-title text-white"></h3>
                            <Link to="/nurse_registration" type="button" class="btn btn-light btn-lg btn-block">Nurses Registration</Link>
                            <p class="cta-desc text-white">For get job register here</p>
                        </div>
                    </div>
                </div>
            </div>
      </>
   )
}

export default Appointment
