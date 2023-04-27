import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Head from './Head'
let MyContext = createContext()


let user  = ["username","password"]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App color = "red"/>
  <MyContext.Provider value = {user} >
     <Head/>
  </MyContext.Provider>
 
);


export default MyContext;