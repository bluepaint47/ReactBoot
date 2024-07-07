
import './App.css';
import  'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Plans from "./Components/Plans/Plans";
import SignUp from './Components/SignUp/SignUp';
import Contact from './Components/About/Contact/Contact';
import Home1 from './Components/Home1/Home1';
import SouthKorea from './Components/SouthKorea/SouthKorea';
//import Home from './Pages/Home';
//import Plans from './Pages/Plans';
//import Layout from './Pages/Layout';
//import ForContact from './Pages/ForContact';
//import Login from './Pages/Login';
import Layout from './Components/Layout';

function App() {
  return (
    <>
   

        <Routes>
        <Route path="/" element={<Layout />}>    </Route>
        <Route  path='/plans' element={<Plans/>}></Route>
        <Route  path='/signup' element={<SignUp/>}></Route>
        <Route  path='/contact' element={<Contact/>}></Route>
        <Route  path='/southkorea' element={<SouthKorea/>}></Route>
        <Route  path='/home1' element={<Home1/>}></Route>
      
      </Routes>
     
   </>
  );
}

export default App;
