import React,{useState} from 'react';
import PageTitle from '../Components/PageTitle/PageTitle';


const Booking = () => {
   
   const [data, setData] = useState({
      name:'',
      mobile:'',
      location:'',
      category:''
   });

   const {name, mobile, location, category} = data

   const handleChange = (e) => {
      setData({...data, [e.target.name]: e.target.value});
   };
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch('https://v1.nocodeapi.com/ridhun/google_sheets/REGGYVCehfBfsOIc?tabId=Sheet1',{
            method: 'POST',
            headers:{
               'content-Type': 'application/json'
            },
            body: JSON.stringify([[name, mobile, location, category, new Date().toLocaleString()]])
         });
         await response.json();
         setData({...data, name:"", mobile:"", location:"", category:""});
      } catch (err) {
         console.log(err)
      }
   }


   return (
      <>

      <main class="main">
         <div class="page-content pb-3">
            <div class="container">
               <div class="row">
                  <div class="col-lg-3 col-md-3"></div>
                  <div class="col-lg-9">
                     <div class="about-text text-center mt-3">
                  
                        <PageTitle page_title="Appointment" sub_title="To Get Our Services"/>

                        <form  class="contact-form mb-2 mx-4"  onSubmit={handleSubmit}>
                           <div class="row">
                              <div class="col-sm-6">
                                 <label for="cname" class="sr-only">Name</label>
                                 <input name="name" value={name} onChange={handleChange} type="text" class="form-control" id="cname" placeholder="Name *" required=""/>
                              </div>
                              <div class="col-sm-6">
                                 <label for="cphone" class="sr-only">Mobile</label>
                                 <input name="mobile" value={mobile} onChange={handleChange} type="tel" class="form-control" id="cphone" placeholder="Mobile *" required=""/>
                              </div>
                           </div>
                           
                           <label for="csubject" class="sr-only">Location</label>
                           <input name="location" value={location} onChange={handleChange}  type="text" class="form-control" id="csubject" placeholder="Location"/>
                           
                           <select name="category" value={category} onChange={handleChange} class="form-control form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                              <option class="form-control" selected>Choose Category</option>
                              <option class="form-control" value="Patient Care">Patient Care</option>
                              <option class="form-control" value="Baby Care">Baby Care</option>
                              <option class="form-control" value="Elderly Care">Elderly Care</option>
                              <option class="form-control" value="Pregnancy Care">Pregnancy Care</option>
                              <option class="form-control" value="House Maid">House Maid</option>
                              <option class="form-control" value="Maternity Care">Maternity Care</option>
                              <option class="form-control" value="Others">Others</option>
                           </select>
                          
                           <div class="text-center">
                              <button type="submit" class="btn btn-outline-primary-2 btn-minwidth-sm">
                              <span>Submit</span>
                              <i class="icon-long-arrow-right"></i>
                              </button>
                           </div>
                        </form>
                     
                     </div>
                  </div>
               </div>
         </div>
         </div>

      </main>
      </>
   )
}

export default Booking
