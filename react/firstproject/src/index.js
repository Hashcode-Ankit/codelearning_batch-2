import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Head from './Head'
let MyContext = createContext()


let user  = ["username","password"]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // render method only retuns one tag and that is why for one tag purpose we use fragments
  <>
     <BrowserRouter>
      <Routes>
        <Route path="/head" element={<Head />} />
        <Route path="/index" element={<App />} />
      </Routes>
     </BrowserRouter> 
      <li><a href ="/head">Head</a></li>
      <li><a href ="/index">App</a></li> 
  </>
  // <App color = "red"/>
  // <MyContext.Provider value = {user} >
  //    <Head/>
  // </MyContext.Provider>
 
);


export default MyContext;


// In the index.js call the api using useEffect hook 
// Pass this data using myContext to the child compone userInfo
// Show this on card