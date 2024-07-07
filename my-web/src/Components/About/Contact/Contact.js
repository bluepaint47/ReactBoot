import './contact.css'
import { Link } from "react-router-dom";
import map1 from '../../Images/map.jpg'
import logo from "../../Images/logo.png"
function Contact() {
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
            <li><Link to="/southkorea"  class="dropdown-item" href="#">SouthKorea</Link></li>
            <li><Link to="/home1" class="dropdown-item" href="#">Home1</Link></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <Link to="/plans"  class="nav-link active me-3"  href="#">Plans</Link>
        </li>
         <li class="nav-item">
         <Link to="/contact" class="name-3 mt-0 plae33 text-black nav-link " >Contact</Link>
        </li>
        <li class="nav-item">
          <Link to='/login' class="nav-link disabled me-3 text-black" href="#" tabindex="-1" >Login</Link>
        </li>
        <li class="nav-item mt-n4  fs-7">
        <Link to='/signup'><button type="button" class=" text-center btn btn-outline-primary mt-n2 fs-6">Sign UP</button> </Link>  

        </li>
      </ul>
      
    </div>
  </div>
</nav>

<div class="container cont1">
    <p>DO YOU HAVE ANY QUESTIONS?</p>
    <h1>Contact Us</h1>
</div>
{/* cards section */}

<div class="container">
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
    <div class="card bg-light border-0 box-sha">
  <div class="card-body">
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder=""></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder=""></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-primary rounded">Send Message</button>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card border-0 box-sha bg-light">
  <div class="card-body">
  <h6>OUR ADRESS</h6>
  <div class="card border-0 box-sha ">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.043158918657!2d-49.1289872051394!3d-26.902125352237743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1f27f79949ab%3A0x82d5c2627e45dcd!2sProUPS%20Energy%20Solutions%20Ltd.!5e0!3m2!1sen!2s!4v1720032629328!5m2!1sen!2s" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<div class="card-body">
    <p class="card-text text-center">Benno Mohar Street, 95 <br/>Blumenau/SC-Brazil</p>
   
  </div>

  </div>
</div>
{/* another card*/}
<div class="card bg-light border-0 mt-4 box-sha" >
  <div class="card-body ms-1">
    <h5 class="card-title">CONTACT INFORMATION</h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p2>Contact@makemytrip.com</p2><br/>
      <p2>+55 47 99999-9999</p2><br/>
      <p2>Mondat-Friday-8am to 6am</p2><br/>
      <p2>Saturday-9am to 1am</p2>
  </div>
</div>

    </div>
  </div>
  </div>

  {/* for-footer*/}

  <div class="card mt-4 h-75 text-primary ">
  <div class="card-body myheight foloow">
  <div class="container">
  <div class="row">
    <div class="col">
      <p1 class="text-white text-uppercase  f-pages">Pages</p1><br/>
      <p2 class="fst-normal">Plans</p2><br/>
      <p2 class="fst-normal">Contact</p2><br/>
      <p2 class="fst-normal">Sign up</p2>
    </div>
    <div class="col">
    <p1 class="text-white text-uppercase f-pages">Locations</p1><br/>
      <p2>Indonesia</p2><br/>
      <p2>Japan</p2><br/>
      <p2>South Korea</p2><br/>
      <p2>Thailand</p2>
    </div>
    <div class="col">
    <p1 class="text-white text-uppercase f-pages">Contact Us</p1><br/>
      <p2 class="f-text">Contact@makemytrip.com</p2><br/>
      <p2 class="f-text">+55 47 99999-9999</p2><br/>
      <p2 class="f-text">Mondat-Friday-8am to 6am</p2><br/>
      <p2 class="f-text">Saturday-9am to 1am</p2>
    </div>
    <div class="col">
      <p1 class="ms-4 text-white fw-normal   text-uppercase f-pages">FOLLOW US</p1><br/>
      <ul class="list-group me-4 ">
  <li class="list-group-item f-width pt-1 me-4 ms-4 text-center text-white   border-top mt-1">Facebook</li>
  <li class="list-group-item f-width pt-1 me-4 ms-4 text-center text-white   border-top mt-1">Instagram</li>
  <li class="list-group-item f-width pt-1 me-4 ms-4  text-center text-white foloow border-end border-top mt-1">Linkedin</li>
</ul>

    </div>
  </div>
</div>
  </div>
  <div class="card-footer footer-text border-0 bg-primary text-white">
  <p1>Make My Trip 2020. some rights reserved.</p1>
  </div>  
</div>

 
 
 


  </>

    );
  }
  
  export default Contact;
  