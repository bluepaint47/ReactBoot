
import { Link } from "react-router-dom";
import logo from "././Images/logo.png"
function Layout() {
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

   </>
     
    );
  }
  
  export default Layout;