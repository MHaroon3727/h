import './App.css';
// import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Corousel from './components/Corousel';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

// import Card from './components/Card';
// import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import MainHeader from'./screens/Mainheader';

function App() {
  return (
    <>
<BrowserRouter>
        <Routes>
              <Route path="/" element={ <MainHeader/> } >
              <Route index element={<Home/>} />
              <Route path="login" element={ <Login/> } />
              {/* <Route path="contact" element={ <Contact/> } />
              <Route path="Teaching" element={<Teaching/>} /> */}
              </Route>
        </Routes>
      </BrowserRouter>
 
      

          
   
    
    
    </>
  );
}

export default App;
