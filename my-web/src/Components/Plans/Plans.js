import "./Plans.css"
import { NavLink } from "react-router-dom";
import logo from "./../Images/logo.png"
import Popper from '@popperjs/core';

function Plans() {
    return (
     <>

     
<nav class="navbar navbar-expand-xl navbar-light shado bg-gradient  bg-light">
  <div class="container-fluid ">
    <a class="navbar-brand  fs-5 ms-1 " > <img src={logo} alt="" width="102%" height="40px"></img>
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse show" id="navbarBasic">
      <ul class="navbar-nav ms-auto mb-2 mt-n2 ms-1 text-center me-md-3 mb-xl-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-primary me-3" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Locations
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>< NavLink to="/southkorea"  class="dropdown-item" href="#">SouthKorea</NavLink></li>
            <li><NavLink to="/home1" class="dropdown-item" href="#">Home1</NavLink></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <NavLink to="/plans"  class="nav-link text-black  me-3"  href="#">Plans</NavLink>
        </li>
         <li class="nav-item">
         <NavLink to="/contact" class=" mt-0  text-black nav-link me-2" >Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/login' class="nav-link disabled me-3 text-black" href="#" tabindex="-1" >Login</NavLink>
        </li>
        <li class="nav-item mt-n4  fs-7">
        <NavLink to='/signup'><button type="button" class=" text-center btn btn-outline-primary mt-n2 fs-6">Sign UP</button> </NavLink>  

        </li>
      </ul>
      
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
          <div class="card mb-5 card-for3 bg-light">
          <div className="gold ">
         <h3>Gold</h3>
         <ul class="list-group list-group-flush for-w">
  <li class="list-group-item bg-light ps-2">→ 20 days of travel</li>
  <li class="list-group-item bg-light ps-2">→ 3 different detinations</li>
  <li class="list-group-item bg-light ps-2">→ Everything paid by the company</li>
  <li class="list-group-item bg-light ps-2">→ Tickets for parties and events</li>
</ul>
     </div>
    <div class="m-card-1">
    <select class="form-select place22 bg-light fw-lighter fst-normal" aria-label="Default select example">
  <option selected >Select your country</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>

    <button type="button" class="btn btn-primary btn8">Primary</button> <span className="span-button">$8000</span>


          

            
          </div>
        </div>
      
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="card mb-5 card-55 bg-light">
            
          <div className="gold ">
         <h3>Gold</h3>
         <ul class="list-group list-group-flush for-w">
  <li class="list-group-item bg-light ps-2">→ 20 days of travel</li>
  <li class="list-group-item bg-light ps-2">→ 3 different detinations</li>
  <li class="list-group-item bg-light ps-2">→ Everything paid by the company</li>
  <li class="list-group-item bg-light ps-2">→ Tickets for parties and events</li>
</ul>
       
     </div>
     <div class="m-card-1">
    <select class="form-select place22 bg-light fw-lighter fst-normal" aria-label="Default select example">
  <option selected >Select your country</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>

    <button type="button" class="btn btn-primary btn8">Primary</button> <span className="span-button">$8000</span>
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
  
  export default  Plans;