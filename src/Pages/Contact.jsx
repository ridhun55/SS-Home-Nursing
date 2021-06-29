import React, {useState} from 'react';
import PageTitle from '../Components/PageTitle/PageTitle';
import GoogleMap from '../Components/GoogleMap/GoogleMap';

const Contact = () => {
   const [data, setData] = useState({
      name:'',
      mobile:'',
      subject:'',
      message:''
   });

   const {name, mobile, subject, message} = data

   const handleChange = (e) => {
      setData({...data, [e.target.name]: e.target.value});
   };
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch('https://v1.nocodeapi.com/ridhun/google_sheets/vZHgdBUTkUPvkduq?tabId=Sheet1',{
            method: 'POST',
            headers:{
               'content-Type': 'application/json'
            },
            body: JSON.stringify([[name, mobile, subject, message, new Date().toLocaleString()]])
         });
         await response.json();
         setData({...data, name:"", mobile:"", subject:"", message:""});
      } catch (err) {
         console.log(err)
      }
   }
   
   return (
      <>
         <div class="page-content pb-3">
         <div class="container">
            <div class="row">
               <div class="col-lg-3 col-md-3"></div>
               <div class="col-lg-9">
                  <div class="about-text text-center mt-3">
                     
                     <PageTitle page_title="Contact Us"/>
                     </div>
                     
                     <div class="row justify-content-center">
                				<div class="col-sm-5 ">
                					<div class="contact-info">
                						<h3>The Office</h3>

                						<ul class="contact-list">
                							<li>
                								<i class="icon-map-marker"></i>
	                							Juma Masjid Building, Karanthur, Calicut - 673571
	                						</li>
                							<li>
                								<i class="icon-phone"></i>
                								<a href="tel:#">7034 794 998</a><br/>
                								<a href="tel:#">9562 155 134</a>
                							</li>
                							<li>
                								<i class="icon-envelope"></i>
                								<a href="mailto:#">sshomenursing@gmail.com</a>
                							</li>
                						</ul>
                					</div>
                				</div>
                				<div class="col-sm-4">
                					<div class="contact-info">
                						<h3>Office Time</h3>

                						<ul class="contact-list">
                							<li>
                								<i class="icon-clock-o"></i>
	                							<span class="text-dark">Monday - Saturday</span> <br/>10 am -  6 pm 
	                						</li>
                							<li>
                								<i class="icon-calendar"></i>
                								<span class="text-dark">Sunday</span> <br/>11 am - 5 pm
                							</li>
                						</ul>
                					</div>
                				</div>
                     </div>
               </div>
            </div>
            
            <hr class="mt-3 mb-5 mt-md-1"/>
      
      <div class="touch-container row justify-content-center">
         <div class="col-md-9 col-lg-7">
            <div class="text-center">
               <h2 class="title mb-1">Get In Touch</h2>

               <p class="lead text-primary">
                 To get our service please send a message. <br/>Our team will contact you soon</p>

               <p class="mb-3"></p>
            </div>

            <form  class="contact-form mb-2" onSubmit={handleSubmit}>
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
               
               <label for="csubject" class="sr-only">Subject</label>
               <input name="subject" value={subject} onChange={handleChange} type="text" class="form-control" id="csubject" placeholder="Subject"/>
               
               <label for="cmessage" class="sr-only">Message</label>
               <textarea name="message" value={message} onChange={handleChange} class="form-control" cols="30" rows="4" id="cmessage"  placeholder="Message "></textarea>
               
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
      <GoogleMap/>

      </>
   )
}

export default Contact
