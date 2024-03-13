import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Login from './login';
import SLogin from './slogin';
import Info from './about';
import Contact from './contact';
import PP from './pp';
import TC from './tc';
import Mh1 from './mh1';
import FP from './fp';
import App1 from './ap1';
import Profile from './profile';
import Bidpage from './bp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function Website(){
    return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/slogin" element={<SLogin/>}></Route>
        <Route path="/about" element={<Info/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/pp" element={<PP/>}></Route>
        <Route path="/tc" element={<TC/>}></Route>
        <Route path="/mh1" element={<Mh1/>}></Route>
        <Route path="/fp" element={<FP/>}></Route>
        <Route path="/ap1" element={<App1/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/bidpage" element={<Bidpage/>}></Route>
        </Routes>
      </BrowserRouter>
  
      // <div className='full-height'>
      //   <Home/>
      //   <Login/>
      // </div>
    );
  }
  
ReactDOM.render(<Website/>, document.getElementById('root'));  