import TopNav from './Components/NavBar/TopNav';
import MiddleNav from './Components/NavBar/MiddleNav';
import BottomNav from './Components/NavBar/BottomNav';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/Scroll/Scroll';
import Mobile from './Components/Mobile/Mobile';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Booking from './Pages/Booking';
import NurseRegistration from './Pages/NurseRegistration';
import Appointment from './Components/Appointment/Appointment';



function App() {
  return (
    <>
        <div class="page-wrapper">
        <BrowserRouter>
            <header class="header header-10 header-intro-clearance">
                <TopNav/>
                <MiddleNav/>
                <BottomNav/>
            </header>
              
                  <Route path="/" exact component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/services" component={Services}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/booking" component={Booking}/>
                  <Route path="/nurse_registration" component={NurseRegistration}/>
                  
            <Appointment/>
            <Footer/>    
        </BrowserRouter>
        </div>
        <Scroll/>
        <Mobile/>
    </>
  );
}

export default App;
