
import "./login.css"
import { NavLink  ,Link} from "react-router-dom";
import logo from "./../Images/logo.png"
function Login() {
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
          <a class="nav-link dropdown-toggle text-black me-3" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Locations
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink to="/southkorea"  class="dropdown-item ms-4" href="#">SouthKorea</NavLink></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item  ">
        <NavLink to="/plans"  class="nav-link  text-black mt-2  me-3"  href="#">Plans</NavLink>
        </li>
         <li class="nav-item">
         <NavLink to="/contact" class=" text-decoration-none text-black nav-link " >Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/login' class="nav-link disabled me-3 text-black" href="#" tabindex="-1" >Login</NavLink>
        </li>
        <li class="nav-item mt-n4  fs-7">
        <  NavLink to='/signup'><button type="button" class=" text-center btn btn-outline-primary mt-n2 fs-6">Sign UP</button> </NavLink>  

        </li>
      </ul>
      
    </div>
  </div>
</nav>
     


   
  <section class="container-fluid">

    <section class="row justify-content-center">
    
      <section class="col-12 col-sm-6 col-md-4">
        <form class="form-container bg-light">
       
        <div class="form-group">
          <h4 class="text-center font-weight-bold"> Login </h4>
          <label for="Inputuser1">Username</label>
           <input type="email" class="form-control" id="Inputuser1" aria-describeby="usernameHelp" placeholder="Enter username"></input>
        </div>
     
        <div class="form-group">
          <label for="InputPassword1">Password</label>
          <input type="password" class="form-control" id="InputPassword1" placeholder="Password"></input>
        </div>
        <button type="Sign in" class="btn btn-primary btn-block mt-4">Sign in</button>
        <div class="form-footer">
          <p> Don't have an account? <Link to="/signup" href="#">Sign Up</Link></p>
        </div>
        </form>
      </section>
    </section>
  </section>

  {/* */}

  <div class="card exteme h-75 text-primary ">
  <div class="card-body  foloow">
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
      <p1 class="ms-4 text-white   text-uppercase f-pages">FOLLOW US</p1><br/>
      <ul class="list-group me-4 rads-ul ">
  <li class="list-group-item f-width pt-1 me-4 ms-4 text-center text-white  mt-1">Facebook</li>
  <li class="list-group-item f-width pt-1 me-4 ms-4 text-center text-white   border-top mt-1">Instagram</li>
  <li class="list-group-item f-width pt-1 me-4 ms-4  text-center text-white border-start foloow border-end border-top mt-1">Linkedin</li>
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
  
  export default Login;
  