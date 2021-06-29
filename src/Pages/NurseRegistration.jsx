import React,{useState} from 'react';
import PageTitle from '../Components/PageTitle/PageTitle';

const NurseRegistration = () => {
      const [data, setData] = useState({
      name:'',
      age:'',
      religion:'',
      mobile:'',
      place:'',
      experiance:'',
      message:''
   });

   const {name, age, mobile, religion, place, experiance, message} = data

   const handleChange = (e) => {
      setData({...data, [e.target.name]: e.target.value});
   };
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch('https://v1.nocodeapi.com/ridhun/google_sheets/RTiqSPwFzpWxktCo?tabId=Sheet1',{
            method: 'POST',
            headers:{
               'content-Type': 'application/json'
            },
            body: JSON.stringify([[name, age, mobile, religion, place, experiance, message, new Date().toLocaleString()]])
         });
         await response.json();
         setData({...data, name:"", age:"", mobile:"", religion:"", place:"", experiance:"", message:""});
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
                  
                        <PageTitle page_title="Nurse Registration" sub_title="To get the job please fill the form. We will contact you soon"/>

                        <form  class="contact-form mb-2 mx-4"  onSubmit={handleSubmit}>
                           <div class="row">
                              <div class="col-sm-6">
                                 <label for="cname" class="sr-only">Name</label>
                                 <input name="name" value={name} onChange={handleChange} type="text" class="form-control" id="cname" placeholder="Name *" required=""/>
                              </div>
                              <div class="col-sm-6">
                                 <label for="cname" class="sr-only">Age</label>
                                 <input name="age" value={age} onChange={handleChange} type="text" class="form-control" id="cname" placeholder="Age *" required=""/>
                              </div>
                           </div>
                              
                           <div class="row">
                              <div class="col-sm-6">
                                 <label for="cphone" class="sr-only">Mobile</label>
                                 <input name="mobile" value={mobile} onChange={handleChange} type="tel" class="form-control" id="cphone" placeholder="Mobile *" required=""/>
                              </div>
                              <div class="col-sm-6">
                                 <label for="cphone" class="sr-only">Place</label>
                                 <input name="place" value={place} onChange={handleChange} type="tel" class="form-control" id="cphone" placeholder="Place *" required=""/>
                              </div>
                           </div>
                           
                           <div class="row">
                              <div class="col-sm-6">
                                 <label for="cphone" class="sr-only">Religion</label>
                                 <input name="religion" value={religion} onChange={handleChange} type="tel" class="form-control" id="cphone" placeholder="Religion " />
                              </div>
                              <div class="col-sm-6">
                                 <select name="experiance" value={experiance} onChange={handleChange} class="form-control form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option class="form-control" selected>Experiance</option>
                                    <option class="form-control" value="No Experiance">No Experiance</option>
                                    <option class="form-control" value="6 months">6 months</option>
                                    <option class="form-control" value="1 year">1 year</option>
                                    <option class="form-control" value="2 year">2 year</option>
                                    <option class="form-control" value="3 year">3 year</option>
                                    <option class="form-control" value="4 year">4 year</option>
                                    <option class="form-control" value="5 year">5 year</option>
                                    <option class="form-control" value="6 year">6 year</option>
                                    <option class="form-control" value="7 year">7 year</option>
                                    <option class="form-control" value="8 year">8 year</option>
                                    <option class="form-control" value="9 year">9 year</option>
                                    <option class="form-control" value="10 year">10 year</option>
                                    <option class="form-control" value="More than 10 year">More than 10 year</option>
                                    
                                 </select>
                              </div>
                           </div>
                           
                           <label for="cmessage" class="sr-only">Message</label>
                           <textarea name="message" value={message} onChange={handleChange} class="form-control" cols="30" rows="4" id="cmessage"  placeholder="Any Message "></textarea>

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

export default NurseRegistration
