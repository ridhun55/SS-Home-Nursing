import React from 'react'
import {Link} from 'react-router-dom'

const BottomNav = () => {
   return (
      <>
           <div class="header-bottom sticky-header">
                <div class="container">
                    <div class="header-left">
                        <div class="dropdown category-dropdown show is-on" data-visible="true">
                            <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-display="static" title="Browse Categories">
                                Browse Categories
                            </a>

                            <div class="dropdown-menu show">
                                <nav class="side-nav">
                                    <ul class="menu-vertical sf-arrows">
                                        <li class="megamenu-container">
                                            <a class="sf-with-ul" href="#">Patient Care</a>

                                            <div class="megamenu">
                                                <div class="row no-gutters">
                                                    <div class="col-md-8">
                                                        <div class="menu-col">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="menu-title">Laptops & Computers</div>
                                                                    <ul>
                                                                        <li><a href="#">Desktop Computers</a></li>
                                                                        <li><a href="#">Monitors</a></li>
                                                                        <li><a href="#">Laptops</a></li>
                                                                        <li><a href="#">iPad & Tablets</a></li>
                                                                        <li><a href="#">Hard Drives & Storage</a></li>
                                                                        <li><a href="#">Printers & Supplies</a></li>
                                                                        <li><a href="#">Computer Accessories</a></li>
                                                                    </ul>

                                                                    <div class="menu-title">TV & Video</div>
                                                                    <ul>
                                                                        <li><a href="#">TVs</a></li>
                                                                        <li><a href="#">Home Audio Speakers</a></li>
                                                                        <li><a href="#">Projectors</a></li>
                                                                        <li><a href="#">Media Streaming Devices</a></li>
                                                                    </ul>
                                                                </div>

                                                                <div class="col-md-6">
                                                                    <div class="menu-title">Cell Phones</div>
                                                                    <ul>
                                                                        <li><a href="#">Carrier Phones</a></li>
                                                                        <li><a href="#">Unlocked Phones</a></li>
                                                                        <li><a href="#">Phone & Cellphone Cases</a></li>
                                                                        <li><a href="#">Cellphone Chargers </a></li>
                                                                    </ul>

                                                                    <div class="menu-title">Digital Cameras</div>
                                                                    <ul>
                                                                        <li><a href="#">Digital SLR Cameras</a></li>
                                                                        <li><a href="#">Sports & Action Cameras</a></li>
                                                                        <li><a href="#">Camcorders</a></li>
                                                                        <li><a href="#">Camera Lenses</a></li>
                                                                        <li><a href="#">Photo Printer</a></li>
                                                                        <li><a href="#">Digital Memory Cards</a></li>
                                                                        <li><a href="#">Camera Bags, Backpacks & Cases</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="banner banner-overlay">
                                                            <a href="category.html" class="banner banner-menu">
                                                                <img src="assets/images/demos/demo-13/menu/banner-1.jpg" alt="Banner"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="megamenu-container">
                                            <a class="sf-with-ul" href="#">Baby Care</a>

                                            <div class="megamenu">
                                                <div class="row no-gutters">
                                                    <div class="col-md-8">
                                                        <div class="menu-col">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="menu-title">Bedroom</div>
                                                                    <ul>
                                                                        <li><a href="#">Beds, Frames & Bases</a></li>
                                                                        <li><a href="#">Dressers</a></li>
                                                                        <li><a href="#">Nightstands</a></li>
                                                                        <li><a href="#">Kids' Beds & Headboards</a></li>
                                                                        <li><a href="#">Armoires</a></li>
                                                                    </ul>

                                                                    <div class="menu-title">Living Room</div>
                                                                    <ul>
                                                                        <li><a href="#">Coffee Tables</a></li>
                                                                        <li><a href="#">Chairs</a></li>
                                                                        <li><a href="#">Tables</a></li>
                                                                        <li><a href="#">Futons & Sofa Beds</a></li>
                                                                        <li><a href="#">Cabinets & Chests</a></li>
                                                                    </ul>
                                                                </div>

                                                                <div class="col-md-6">
                                                                    <div class="menu-title">Office</div>
                                                                    <ul>
                                                                        <li><a href="#">Office Chairs</a></li>
                                                                        <li><a href="#">Desks</a></li>
                                                                        <li><a href="#">Bookcases</a></li>
                                                                        <li><a href="#">File Cabinets</a></li>
                                                                        <li><a href="#">Breakroom Tables</a></li>
                                                                    </ul>

                                                                    <div class="menu-title">Kitchen & Dining</div>
                                                                    <ul>
                                                                        <li><a href="#">Dining Sets</a></li>
                                                                        <li><a href="#">Kitchen Storage Cabinets</a></li>
                                                                        <li><a href="#">Bakers Racks</a></li>
                                                                        <li><a href="#">Dining Chairs</a></li>
                                                                        <li><a href="#">Dining Room Tables</a></li>
                                                                        <li><a href="#">Bar Stools</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="banner banner-overlay">
                                                            <a href="category.html" class="banner banner-menu">
                                                                <img src="assets/images/demos/demo-13/menu/banner-2.jpg" alt="Banner"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="megamenu-container">
                                            <a class="sf-with-ul" href="#">Elderly Care</a>

                                            <div class="megamenu">
                                                <div class="menu-col">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="menu-title">Cookware</div>
                                                            <ul>
                                                                <li><a href="#">Cookware Sets</a></li>
                                                                <li><a href="#">Pans, Griddles & Woks</a></li>
                                                                <li><a href="#">Pots</a></li>
                                                                <li><a href="#">Skillets & Grill Pans</a></li>
                                                                <li><a href="#">Kettles</a></li>
                                                                <li><a href="#">Soup & Stockpots</a></li>
                                                            </ul>
                                                        </div>

                                                        <div class="col-md-4">
                                                            <div class="menu-title">Dinnerware & Tabletop</div>
                                                            <ul>
                                                                <li><a href="#">Plates</a></li>
                                                                <li><a href="#">Cups & Mugs</a></li>
                                                                <li><a href="#">Trays & Platters</a></li>
                                                                <li><a href="#">Coffee & Tea Serving</a></li>
                                                                <li><a href="#">Salt & Pepper Shaker</a></li>
                                                            </ul>
                                                        </div>

                                                        <div class="col-md-4">
                                                            <div class="menu-title">Cooking Appliances</div>
                                                            <ul>
                                                                <li><a href="#">Microwaves</a></li>
                                                                <li><a href="#">Coffee Makers</a></li>
                                                                <li><a href="#">Mixers & Attachments</a></li>
                                                                <li><a href="#">Slow Cookers</a></li>
                                                                <li><a href="#">Air Fryers</a></li>
                                                                <li><a href="#">Toasters & Ovens</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div class="row menu-banners">
                                                        <div class="col-md-4">
                                                            <div class="banner">
                                                                <a href="#">
                                                                    <img src="assets/images/demos/demo-13/menu/1.jpg" alt="image"/>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-4">
                                                            <div class="banner">
                                                                <a href="#">
                                                                    <img src="assets/images/demos/demo-13/menu/2.jpg" alt="image"/>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-4">
                                                            <div class="banner">
                                                                <a href="#">
                                                                    <img src="assets/images/demos/demo-13/menu/3.jpg" alt="image"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="megamenu-container">
                                            <a class="sf-with-ul" href="#">Pregnancy Care</a>

                                            <div class="megamenu">
                                                <div class="row no-gutters">
                                                    <div class="col-md-8">
                                                        <div class="menu-col">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="menu-title">Women</div>
                                                                    <ul>
                                                                        <li><a href="#"><strong>New Arrivals</strong></a></li>
                                                                        <li><a href="#"><strong>Best Sellers</strong></a></li>
                                                                        <li><a href="#"><strong>Trending</strong></a></li>
                                                                        <li><a href="#">Clothing</a></li>
                                                                        <li><a href="#">Shoes</a></li>
                                                                        <li><a href="#">Bags</a></li>
                                                                        <li><a href="#">Accessories</a></li>
                                                                        <li><a href="#">Jewlery & Watches</a></li>
                                                                        <li><a href="#"><strong>Sale</strong></a></li>
                                                                    </ul>
                                                                </div>

                                                                <div class="col-md-6">
                                                                    <div class="menu-title">Men</div>
                                                                    <ul>
                                                                        <li><a href="#"><strong>New Arrivals</strong></a></li>
                                                                        <li><a href="#"><strong>Best Sellers</strong></a></li>
                                                                        <li><a href="#"><strong>Trending</strong></a></li>
                                                                        <li><a href="#">Clothing</a></li>
                                                                        <li><a href="#">Shoes</a></li>
                                                                        <li><a href="#">Bags</a></li>
                                                                        <li><a href="#">Accessories</a></li>
                                                                        <li><a href="#">Jewlery & Watches</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
                                                        <div class="banner banner-overlay">
                                                            <a href="category.html" class="banner banner-menu">
                                                                <img src="assets/images/demos/demo-13/menu/banner-3.jpg" alt="Banner"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="menu-col menu-brands">
                                                    <div class="row">
                                                        <div class="col-lg-2">
                                                            <a href="#" class="brand">
                                                                <img src="assets/images/brands/1.png" alt="Brand Name"/>
                                                            </a>
                                                        </div>

                                                        <div class="col-lg-2">
                                                            <a href="#" class="brand">
                                                                <img src="assets/images/brands/2.png" alt="Brand Name"/>
                                                            </a>
                                                        </div>

                                                        <div class="col-lg-2">
                                                            <a href="#" class="brand">
                                                                <img src="assets/images/brands/3.png" alt="Brand Name"/>
                                                            </a>
                                                        </div>

                                                        <div class="col-lg-2">
                                                            <a href="#" class="brand">
                                                                <img src="assets/images/brands/4.png" alt="Brand Name"/>
                                                            </a>
                                                        </div>

                                                        <div class="col-lg-2">
                                                            <a href="#" class="brand">
                                                                <img src="assets/images/brands/5.png" alt="Brand Name"/>
                                                            </a>
                                                        </div>

                                                        <div class="col-lg-2">
                                                            <a href="#" class="brand">
                                                                <img src="assets/images/brands/6.png" alt="Brand Name"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="#">House Maid</a></li>
                                        <li><a href="#">Maternity Care</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="header-center">
                        <nav class="main-nav">
                            <ul class="menu sf-arrows">
                                <li class="megamenu-container ">
                                    <a href="/" class="">Home</a>
                                 </li>
                                <li>
                                    <Link to="/about" class="">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/services" class="">Services</Link>
                                </li>
                                <li>
                                    <Link to="/contact" class="">Contact Us</Link>
                                </li>

                                 
                                <li>
                                    <a href="#" class="sf-with-ul">Blog</a>

                                    <ul>
                                        <li><a href="blog.html">Classic</a></li>
                                        <li><a href="blog-listing.html">Listing</a></li>
                                        <li>
                                            <a href="#">Grid</a>
                                            <ul>
                                                <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                                <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                                <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                                <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Masonry</a>
                                            <ul>
                                                <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                                <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                                <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                                <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Mask</a>
                                            <ul>
                                                <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                                <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Single Post</a>
                                            <ul>
                                                <li><a href="single.html">Default with sidebar</a></li>
                                                <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                                                <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                    <div class="header-right">
                        <i class="la la-lightbulb-o"></i><p>Experienced Nurses</p>
                    </div>
                </div>
            </div>
      </>
   )
}

export default BottomNav
