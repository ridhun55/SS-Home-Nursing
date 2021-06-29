import React from 'react'

const MiddleNav = () => {
   return (
      <>
        <div class="header-middle">
                <div class="container">
                    <div class="header-left">
                        <button class="mobile-menu-toggler">
                            <span class="sr-only">Toggle mobile menu</span>
                            <i class="icon-bars"></i>
                        </button>
                        
                        <a href="index.html" class="logo">
                            <img src="assets/images/logo/logo.jpg" alt="Logo" width="105" height="auto"/>
                        </a>
                    </div>

                    <div class="header-center">
                        <div class="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                            <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
                            <form action="#" method="get">
                                <div class="header-search-wrapper search-wrapper-wide">
                                    <div class="select-custom">
                                        <select id="cat" name="cat">
                                            <option value="">All Departments</option>
                                            <option value="1">Patient Care</option>
                                            <option value="2">Baby Care</option>
                                            <option value="3">Elderly Care</option>
                                            <option value="4">Pregnancy Care</option>
                                            <option value="5">House Maid</option>
                                            <option value="6">Maternity Care</option>
                                        </select>
                                    </div>
                                    <label for="q" class="sr-only">Search</label>
                                    <input type="search" class="form-control" name="q" id="q" placeholder="Search ..." required/>
                                    <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="header-right">
                        <div class="header-dropdown-link">
                            <div class="dropdown compare-dropdown">
                                <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="24 Hours service" aria-label="24 Hours service">
                                    <i class="icon-random"></i>
                                    <span class="compare-txt">Day Night Shift</span>
                                </a>
                              </div>

                            <a href="wishlist.html" class="wishlist-link">
                                <i class="icon-heart-o"></i>
                                <span class="wishlist-count">100%</span>
                                <span class="wishlist-txt">Trustworthy</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
      </>
   )
}

export default MiddleNav
