import React from 'react'

const TopNav = () => {
   return (
      <>
         <div class="header-top">
            <div class="container text-darkblack" >
               <div class="header-left">
                  <a href="tel:#">Call : 7034794998</a> &nbsp;&nbsp; | &nbsp;&nbsp;
                  <a href="tel:#"> 9562155134</a>
               </div>
               <div class="header-right">
                  <ul class="top-menu">
                     <li>
                        <a href="#">Links</a>
                        <ul>
                           
                           <li>
                              <div class="header-dropdown">
                                 <a href="#">English</a>
                                 <div class="header-menu">
                                    <ul>
                                       <li><a href="#">English</a></li>
                                       <li><a href="#">Malayalam</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li class="login"><a href="#signin-modal" data-toggle="modal">Sign in / Sign up</a></li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
   
      </>
   )
}

export default TopNav
