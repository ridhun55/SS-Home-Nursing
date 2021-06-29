import React from 'react'

const Card = (props) => {
   return (
      <>
         <div class="entry-item lifestyle shopping col-sm-6" style={{position: 'absolute'},{ left: '0px'},{ top: '0px'}}>
               <article class="entry entry-grid text-center">
                  <figure class="entry-media">
                     <a href="single.html">
                        <img src={props.img} alt={props.title}/>
                     </a>
                  </figure>
                  <div class="entry-body">
                        <h2 class="entry-title">{props.title}</h2>
                     <div class="entry-content">
                           <p>{props.disc}</p>
                           <a href="#" class="read-more">Continue Reading</a>
                     </div>
                  </div>
               </article>
         </div>
      </>
   )
}

export default Card
