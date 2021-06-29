import React from 'react'

const PageTitle = (props) => {
   return (
      <>
         <div class="page-header  mb-3" style={{backgroundImage:"url("+ "assets/images/page-header-bg.jpg" +")"}}>
        		<div class="container-fluid">
        			<h1 style={{color:'#3399ff'}} class="page-title text-center">{props.page_title}</h1>
                 <h6 class="pt-2">{props.sub_title}</h6>
        		</div>
        	</div>
      </>
   )
}

export default PageTitle
