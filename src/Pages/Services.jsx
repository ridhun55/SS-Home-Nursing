import React from 'react'
import Card from '../Components/Card/Card'
import PageTitle from '../Components/PageTitle/PageTitle'



const Services = () => {
   const service_data = [
      {
        title: "Patient Care",
        img: "assets/images/blog/grid/2cols/post-1.jpg",
        disc:
          "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
        url: "#",
      },
      {
        title: "Baby Care",
        img: "assets/images/blog/grid/2cols/post-1.jpg",
        disc:
          "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
        url: "#",
      },
      {
        title: "Elderly Care",
        img: "assets/images/blog/grid/2cols/post-1.jpg",
        disc:
          "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
        url: "#",
      },
      {
        title: "Pragnancy Care",
        img: "assets/images/blog/grid/2cols/post-1.jpg",
        disc:
          "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
        url: "#",
      },
      {
        title: "House Maid",
        img: "assets/images/blog/grid/2cols/post-1.jpg",
        disc:
          "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
        url: "#",
      },
      {
        title: "Maternity Maid",
        img: "assets/images/blog/grid/2cols/post-1.jpg",
        disc:
          "Lorem ipsum dolor sit amet, illum ius ex, eu eos dolorum meliore inimicus, his ei veniam audiam..",
        url: "#",
      },
   ]

   let cards = service_data.map((val) => (
      <Card title={val.title} img={val.img} disc={val.disc} url={val.url}/>
    ))
   
   return (
      <>
         <div class="page-content pb-3">
         <div class="container">
            <div class="row">
               <div class="col-lg-3 col-md-3"></div>
               <div class="col-lg-9">
                  <div class="about-text text-center mt-3">
                     <PageTitle page_title="Our Services"/>
                     
                     <div class="entry-container max-col-2" data-layout="fitRows" style={{position: 'relative',height: 'auto'}}>

                     {cards}
               
                     </div>
                  </div>
               </div>
            </div>
                    
         </div>
      </div>

      </>
   )
}

export default Services
