import './nav.css';
import { Outlet, Link } from "react-router-dom";
function Navbar() {

    return (
        <>
        <nav class="navbar navbar-expand-xl navbar-light bg-light border">
            <div className="container">
  
    <a class="navbar-brand bg3  text-white" href="#">Make My Trip</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarDark">
      <ul class="navbar-nav me-auto mb-2 mb-xl-0 ms-auto  text">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Locations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Plans</a>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Login</a>
        </li>
      </ul>
      <button type="button" class="btn btn-outline-info btn2">Sign in</button>
     
    </div>
  
  </div>
</nav>
<div class="container cont1">
    <p>YOUR TRIP, YOUR PLAN</p>
    <h1>Choose the Plan</h1>
</div>
<div class="container">
<div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="card mb-5 card-33 shadow-sm">
          <div className="gold ">
         <h3>Gold</h3>
         <div className="rou-bor">→ 20 days of travel</div>
         <div className="rou-bor">→ 3 different detinations</div>
         <div className="rou-bor">→ Everything paid by the company</div>
         <div className="rou-bor">→ Tickets for parties and events</div>
     </div>
     <select class="form-group style-group">
   <option class="bs-title-option" value="myVal">Select your country</option>
   <option>A</option>
   <option>B</option>
   <option>c</option>
</select>

<div class="container cont-style">
<button type="button" class="btn btn-primary button2">Buy Plan</button> <span className="span-button">$8000</span>
 
</div>
          

            
          </div>
        </div>
      
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="card mb-5 card-55 shadow-sm">
            
          <div className="gold ">
         <h3>Gold</h3>
         <div className="rou-bor">→ 20 days of travel</div>
         <div className="rou-bor">→ 3 different detinations</div>
         <div className="rou-bor">→ Everything paid by the company</div>
         <div className="rou-bor">→ Tickets for parties and events</div>
     </div>
     <select class="form-group style-group">
   <option class="bs-title-option" value="myVal">Select your country</option>
   <option>A</option>
   <option>B</option>
   <option>c</option>
</select>

<div class="container cont-style">
<button type="button" class="btn btn-primary button2">Buy Plan</button> <span className="span-button">$8000</span>
 
</div>
          </div>
        </div>
      </div>
    </div>



<div class="card footer test-mu">
  <div class="card-body footer3 ">
  <div class="container ">
  <div class="row row-cols-4 footer2">
    <div class="col">
      <p1>Pages</p1><br/>
      <p2>Contect</p2><br/>
      <p2>Plans</p2><br/>
      <p2>sign up</p2>
    </div>
    <div class="col ">
    <p1>Locations</p1><br/>
      <p2>Indonesia</p2><br/>
      <p2>Japan</p2><br/>
      <p2>South Korea</p2><br/>
      <p2>Thailand</p2>
    </div>
    <div class="col">
    <p1>Contact Us</p1><br/>
      <p2>Contact@makemytrip.com</p2><br/>
      <p2>+55 47 99999-9999</p2><br/>
      <p2>Mondat-Friday-8am to 6am</p2><br/>
      <p2>Saturday-9am to 1am</p2>
    </div>
    <div class="col">
    <p1>Follow Us</p1>
    <div>
         <div className="footer4">Facebook</div>
         <div className="footer4">instagram</div>
         
         <div className="footer4 ">Linkedin</div>
         </div>
    </div>
  </div>
</div>
    
    
  </div>
  <div class="card-footer footer-text bg-primary text-white ">
   <p1>Make My Trip 2020. some rights reserved.</p1>
  </div>
</div>
    </>
    );
    
  }
  
  export default Navbar;
  