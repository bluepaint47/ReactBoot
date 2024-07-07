
import "./signup.css"
import { Link } from "react-router-dom";
import logo from "./../Images/logo.png"
function SignUp() {
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
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <Link to="/plans"  class="nav-link active me-3"  href="#">Plans</Link>
        </li>
         <li class="nav-item">
         <Link to="/contact" class="name-3 text-black nav-link ">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to='/login' class="nav-link disabled me-3 text-black" href="#" tabindex="-1" >Login</Link>
        </li>
        <li class="nav-item mt-n4  fs-7">
        <Link to='/signup' >  <button type="button" class=" text-center btn btn-outline-primary mt-n2 fs-6">Sign UP</button> </Link> 

        </li>
      </ul>
      
    </div>
  </div>
</nav>

<div class="container cont1">
    <p>PROGRAM YOUR DREAM TRIP</p>
    <h1>SIGN UP</h1>
</div>

<div class="container">
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
    <form class="row g-3">
    <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputEmail4" placeholder="Full Name"></input>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">CPF</label>
    <input type="number" class="form-control" id="inputEmail4" placeholder="xxx.xxx.xxx-xx"></input>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Seu Email"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Street,number,neighberhood,city and state"></input>
  </div>

  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" placeholder="Jane Doe"></input>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Select state</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" placeholder="xxxxx-xxx"></input>
  </div>

  {/* for pay-card */}
  <div class="card tex border-0 karop   bg-light" >
  <div class="card-body">
    <h6 class="card-title text-primary">FORM OF PAYMENT</h6>
    <div class="input-group mb-3">
    <input class="form-control form-control-sm text-center"  value="Credit Card " aria-label="Disabled input example" disabled readonly></input>
  <span class=""></span>
  <input class="form-control form-control-sm bg-dark text-light text-center"  value="Bank Slip" aria-label="Disabled input example" Bank Slip></input>
</div>

<form class="row g-3">
 
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputCity" placeholder="Full Name"></input>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label" placeholder="xxxxx-xxx">Month</label>
    <select id="inputState" class="form-select">
      <option selected></option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Year</label>
    <input type="text" class="form-control" id="inputZip" placeholder="xxxxx-xxx"></input>
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Card Number</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="5555-5555-5555-5555"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Security Code</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="xxx"></input>
  </div>
 
 
</form>

   
  
  </div>
</div>








  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        I agree to <span class="text-primary"> Terms ans Conditions</span>.
      </label>
    </div>
  </div>
  <div class="col-12">
  <button type="button" class="btn btn-primary btn-lg">Contract Plan</button>
  </div>
</form>
     
  
  

   




     


    </div>

    {/* card-2 */}
    <div class="col">
      <h6 class="mar-card   text-primary">CHOOSED PLAN</h6>
      <div class="card border-0 bg-light forplan mt-2 shado-cha  ">
  <div class="card-body ">
  
    <div class="card border-0 bg-light ro-width ms-4 " >
  <div class="card-body">
    <h5 class="card-title mt-4 ms-0 fs-3">Gold</h5>
    <ul class="list-group list-group-flush">
  <li class="list-group-item bg-light ps-2 me-2">→ 20 days of travel</li>
  <li class="list-group-item bg-light ps-2  me-2">→ 3 different detinations</li>
  <li class="list-group-item bg-light ps-2  me-2">→ Everything paid by the company</li>

  <li class="list-group-item bg-light ps-2  me-2">→ Tickets for parties and events</li>
</ul>
<div class="forcountry mt-3">
    <select class="form-select forcountry bg-light fw-lighter fst-normal" aria-label="Default select example">
  <option selected >Select your country</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>

    <h3 class="mt-4">$8000</h3>





  </div>
</div>
  </div>
</div>
    </div>
  </div>
  </div>

  {/* for-foter */}
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
  
  export default SignUp;
  