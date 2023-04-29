import { useState, useEffect,useContext } from "react";
import MyContext  from './index'

function Head() {
    const [name,SetName] = useState(["ankit",2])
    const [data,SetData] = useState("")

    // const currentContext = useContext(MyContext)
    useEffect(() => {
      const headers = { 'Content-Type': 'application/json' }
      fetch('https://api.npms.io/v2/search?q=react', { headers })
          .then(response => response.json())
          .then(data => SetData( JSON.stringify(data.results) )); 
    },[]);
  return (
    <>
    <h1>Here is value {name[0]} {name[1]}</h1>
    <h2>{data}</h2>
    <button onClick={()=>SetName(["saurav",2])}>Click Me</button>
    </>
  );
}

export default Head;

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