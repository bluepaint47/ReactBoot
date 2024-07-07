import './Footer.css';
function Footer() {
    return (
     
     <>
     <div class="container bg-light">
  <div class="container cont1 b-con ">
    <p class="mt-2">THE BEST DESTINATION OF YOUR TRIP</p>
    <h1>Discover South Korea</h1>
</div>
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


     
     </>
    );
  }
  
  export default Footer;