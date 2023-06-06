import { useState, useEffect,createContext } from "react";
import Card from './card'
import axios from 'axios';
import { useCookies } from 'react-cookie';
const DataContext = createContext();
function Head() {
    const [data,SetData] = useState([])
    const [cookies, setCookie] = useCookies();
    // const currentContext = useContext(MyContext)
    useEffect(() => {
      axios.post('http://localhost:8080/login', {
        name: 'codeslearning',
        password: '1234'
      })
      .then(function (response) {
        console.log("response received: ",response.data.token)
        setCookie('token', response.data.token, { path: '/' });
      })
      .catch(function (error) {
        console.log(error);
      })
    },[]); // square braces provide context when to run the useEffect
  return (
    <>
     <DataContext.Provider value={data}>
        <Card/>
      </DataContext.Provider>
    </>
  );
}
export default Head;
export { DataContext };
// call the api get the data 
// update other component by passing the data using context



// code for ease 
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);



// const headers = { 'Content-Type': 'application/json' }
//     fetch('https://api.npms.io/v2/search?q=react', { headers })
//         .then(response => response.json())
//         .then(data => this.setState({ totalReactPackages: data.total }));