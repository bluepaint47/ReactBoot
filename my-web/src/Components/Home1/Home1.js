

import './home1.css'

 import logo from "./../Images/logo.png"
import { Link } from "react-router-dom";
import south from "./../Images/south.jpeg"
import thai from "./../Images/thai.jpeg"
import indo from "./../Images/01.jpeg"
import japan from "./../Images/jap.jpeg"
import documents from "./../Images/documents.png"
import beach from "./../Images/beach.png"
import luggage from "./../Images/luggage.png"
import Tickets from "./../Images/tickets.png"
import tourism from "./../Images/tourism.png"
import transfer from "./../Images/transfer.png"

function Location () {
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
         <Link to="/contact" class="name-3 text-blackv-link disabled" href="#">Contact</Link>
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

<div class="container">
  <div class="row">
    <div class=" col-lg-6 col-md-6 col-sm-12">
    <div id="carouselExampleCaptions" class="carousel slide for-slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={south} class="d-block " alt="..." width="100%" height="511px"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="fs-1 fw-normal">SouthKorea</h5>
        
      </div>
    </div>
    <div class="carousel-item">
      <img src={japan} class="d-block w-100" alt="..." width="100%" height="511px"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="fs-1 fw-light">Japan</h5>
        
      </div>
    </div>
    <div class="carousel-item">
      <img src={indo} class="d-block w-100" alt="..." width="100%" height="511px"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Thailand</h5>
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div class=" col-lg-6 col-md-6 col-sm-12 ">
    <div class="card  trip-card border-0" >
  <div class="card-body title-for">
    <h1 class="card-title tit-body fw-light">Make the trip of your dream come true</h1>
    <p class="card-text p-for ">The best place to travel is With Make My Trip, more then 5000 completed tours</p>
    
    <form class="d-flex home-form">
        <input class="form-control home-radiu  me-0 rounded-start form-control-lg " type="email" placeholder="Email" aria-label="Search"></input>
        <button type="button" class="btn btn-primary home-radiu rounded-end bdn-fae ">Sign Up</button>
      </form>
  </div>
 
</div>
    
    </div>
  </div>
  </div>


  {/*  for icons*/}
  <div className="dis-korea">
  <div class="card bg-light border-0" >
 
  <div class="card-body korea1">
   
    <p class="card-text ">EVERYTHING BETTER FOR YOU</p>
    <h5 class="card-title ">Enjoy the benefits</h5>
  </div>
</div>
  </div>


 
 
  <div class=" for-contaiicon bg-light">
 

  <div class="container  bg-light">
  
  <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-6">
    <div class="card bg-light mt-0 border-0">
    <img class="doucu-img " src={documents} alt="" width="28%" height="90px"></img>
  <div class="ma-4  text-center">
    <h3 class="card-title">Documents</h3>
    <p class="card-text">Insurence in case of lose your doucuments</p>
  
  </div>
</div>

<div class="card bg-light car-marg border-0">
    <img class="doucu-img " src={beach} alt="" width="28%" height="90px"></img>
  <div class="ma-4 text-center">
    <h3 class="card-title">Beaches</h3>
    <p class="ms-3 card-text">Vist to the beaches with all the nessesry confert</p>
  
  </div>
</div>
     
     
   
    </div>

    <div class="col-lg-4 col-md-4 col-sm-6">
    <div class="card bg-light  mt-0 border-0">
    <img class="doucu-img " src={Tickets} alt="" width="28%" height="90px"></img>
  <div class="ma-4  text-center">
    <h3 class="card-title">Tickets</h3>
    <p class="card-text">Assistance in all stages:from purcahse to withdrawal</p>
  
  </div>
</div>

<div class="card bg-light  luggage border-0">
    <img class="doucu-img " src={luggage} alt="" width="28%" height="90px"></img>
  <div class="ma-4 text-center">
    <h3 class="card-title">Luggage</h3>
    <p class="ms-3 card-text">Insurence against loss of luggage, with the right to a value covered at the time for the purchase of lost time</p>
  
  </div>
  <button  type="button" class="btn btn-primary fs-5 fw-normal laggae-btn">Buy Plan</button>
</div>

    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
    <div class="card bg-light  mt-0 border-0">
    <img class="doucu-img " src={transfer} alt="" width="28%" height="90px"></img>
  <div class="ma-4  text-center">
    <h3 class="card-title">Transfer</h3>
    <p class="card-text">Transfer from your home to the airport, so you don't have to use your car for this and have to leave in paid parking  </p>
   
  </div>
</div>

<div class="card bg-light  turrsm border-0">
    <img class="doucu-img " src={tourism} alt="" width="28%" height="90px"></img>
  <div class="ma-4 text-center">
    <h3 class="card-title">Tourism</h3>
    <p class="ms-3 card-text">your agents and tranlators to facilitate your tour. Wuth exclusive trips to the most popular spot</p>
  
  </div>
</div>

    </div>

  </div>
  </div>









</div>

<div class="card border-0">
 
  <div class="card-body text-center  ">
    <h5 class="card-title qoute  fst-italic fw-light text-light">"If you are always trying to be normal,you will never know how amazing can be"</h5>
  <p className="qoute22 text-light">–Maya Angelous</p>
  </div>
</div>


<div class="container cont1 events1">
    <p>STILL IN DOUBT?</p>
    <h1>Commom Questions</h1>
</div>

  


 
 </>
    );
  }
  
  export default Location;
  