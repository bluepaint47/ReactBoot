
import sea from "./../Images/sea.jpeg"
import res from "./../Images/res.jpeg"
import house from "./../Images/house.jpeg"
import down from "./../Images/down.jpeg"
import south from "./../Images/south.jpeg"
import temp from "./../Images/temp.jpeg"
import tow from "./../Images/tow.jpeg"
function South() {
    return (
   <>
  
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

   </>
     
    );
  }
  
  export default South;