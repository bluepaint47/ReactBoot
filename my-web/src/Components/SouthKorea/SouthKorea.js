import "./southkorea.css"
import { Link } from "react-router-dom";
import logo from "./../Images/logo.png"
import south from "./../Images/south.jpeg"
import temp from "./../Images/temp.jpeg"
import tow from "./../Images/tow.jpeg"
import sea from "./../Images/sea.jpeg"
import res from "./../Images/res.jpeg"
import house from "./../Images/house.jpeg"
import down from "./../Images/down.jpeg"
function SouthKorea() {
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
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
        <Link to="/plans"  class="nav-link active me-3" aria-current="page" href="#">Plans</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link  me-3 text-black" href="#" tabindex="-1" aria-disabled="true">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to="/login" class="nav-link disabled me-3 text-black" href="#" tabindex="-1" aria-disabled="true">Login</Link>
        </li>
        <li class="nav-item mt-n4  fs-7">
        <Link to='/signup' >   <button type="button" class=" text-center btn btn-outline-primary mt-n2 fs-6">Sign UP</button> </Link>

        </li>
      </ul>
      
    </div>
  </div>
</nav>

<div class="container cont1 b-con ">
    <p class="mt-2">THE BEST DESTINATION OF YOUR TRIP</p>
    <h1>Discover South Korea</h1>
</div>

<div class="container">
<div class="">
  <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-6">
    
      <div>
      <img src={south} alt="" width="100%" height="210px"></img>
      </div>
      <div>
      <img class="mt-3" src={temp} alt="" width="100%" height="210px"></img>
      </div>
      <div>
      <img class="mt-3" src={tow} alt="" width="100%" height="210px"></img>
      </div>
     
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
      <div>
      <img class="" src={sea} alt="" width="100%" height="180px"></img>
      </div>
      <div>
      <img class="mt-3" src={res} alt="" width="100%" height="434px"></img>
      </div>

    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 ">
      <div>
      <img class="" src={house} alt="" width="100%" height="200px"></img>
      </div>
      <div>
      <img class="mt-3" src={down} alt="" width="100%" height="434px"></img>
      </div>
    </div>
    </div>
  
  </div>
  </div>

  <div class="container cont1">
    <p>DESCOVER WHAT HAPPENS IN THE COUNTRY</p>
    <h1>NEXT EVENTS</h1>
</div>

{/* */}

<div class="container">
  <div class="row">
    <div class="col">
    <table class="table border-top ">
  <thead class="text-primary for-trhed">
    <tr>
      <th className="for-padd">Data</th>
      <th className="for-padd">Event</th>
      <th className="for-padd me-4">Ticket</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td class="for-clas-pad">4/30</td>
      <td class="for-pad2">Buddha's Birthday</td>
      <td ><button type="button" class="btn btn-outline-secondary btn-sm mt-1 mb-1 me-4 for-wid1">Buy Ticket</button></td> 
    </tr>
    <tr>
     
      <td class="for-clas-pad">6/6</td>
      <td class="for-pad2">Memorial Day</td>
      <td class=""><button type="button" class="btn btn-outline-secondary btn-sm mt-1 mb-1 for-wid1">Buy Ticket</button></td>
    </tr>
    <tr>
      <td class="for-clas-pad" >8/15</td>
      <td class="for-pad2">Libration Day</td>
      <td><button type="button" class="btn btn-outline-secondary btn-sm mt-1 mb-1 for-wid1">Buy Ticket</button></td>
    </tr>
    <tr>
      <td class="for-clas-pad"  >9/30</td>
      <td class="for-pad2">Chuseok Day</td>
      <td><button type="button" class="btn btn-outline-secondary btn-sm mt-1 mb-1 for-wid1">Buy Ticket</button></td>
    </tr>
    <tr class="b-batn"> 
      <td class="for-clas-pad"  >10/9</td>
      <td class="for-pad2">Hangeul Day</td>
      <td><button type="button" class="btn btn-outline-secondary btn-sm mt-1 mb-1 for-wid1 ">Buy Ticket</button></td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
    </div>

{/* for-footer */}

    <div class="card mt-4 footer text-primary test-mu ">
  <div class="card-body">
  <div class="container">
  <div class="row">
    <div class="col">
      <p1 class="text-white text-uppercase">Pages</p1><br/>
      <p2 class="fst-normal">Plans</p2><br/>
      <p2 class="fst-normal">Contact</p2><br/>
      <p2 class="fst-normal">Sign up</p2>
    </div>
    <div class="col">
    <p1 class="text-white text-uppercase">Locations</p1><br/>
      <p2>Indonesia</p2><br/>
      <p2>Japan</p2><br/>
      <p2>South Korea</p2><br/>
      <p2>Thailand</p2>
    </div>
    <div class="col">
    <p1 class="text-white text-uppercase">Contact Us</p1><br/>
      <p2 class="f-text">Contact@makemytrip.com</p2><br/>
      <p2 class="f-text">+55 47 99999-9999</p2><br/>
      <p2 class="f-text">Mondat-Friday-8am to 6am</p2><br/>
      <p2 class="f-text">Saturday-9am to 1am</p2>
    </div>
    <div class="col">
      <p1 class="ms-4 text-white text-uppercase">FOLLOW US</p1><br/>
      <ul class="list-group me-4">
  <li class="list-group-item f-width pt-1 me-4 ms-4 text-center rounded mt-1">Facebook</li>
  <li class="list-group-item f-width pt-1 me-4 ms-4 text-center rounded mt-0">Instagram</li>
  <li class="list-group-item f-width pt-1 me-4 ms-4 text-center rounded mt-0">Linkedin</li>
</ul>

    </div>
  </div>
</div>
  </div>
  <div class="card-footer footer-text bg-primary text-white">
  <p1>Make My Trip 2020. some rights reserved.</p1>
  </div>  
</div>

   </>
     
    );
  }
  
  export default SouthKorea;