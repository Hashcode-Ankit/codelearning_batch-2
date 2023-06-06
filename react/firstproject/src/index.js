import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Head from './Head'
import NavBar from './nav';
import Footer from './footer';
// import User from './user';
import Register from './register';

let MyContext = createContext()


let user  = ["username","password"]
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( // render method only retuns one tag and that is why for one tag purpose we use fragments
  <>
     <NavBar/>
     <BrowserRouter>
      <Routes>
        <Route path="/head" element={<Head />} />
        <Route path="/index" element={<App />} />
        {/* <Route path="/User" element={<User />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
     </BrowserRouter> 
     <Footer/>
  </>
 
);


export default MyContext;


// In the index.js call the api using useEffect hook 
// Pass this data using myContext to the child compone userInfo
// Show this on card