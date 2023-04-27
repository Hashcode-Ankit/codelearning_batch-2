import { useState, useEffect,useContext } from "react";
import MyContext  from './index'

function Head() {
    const context = useContext(MyContext)
    console.log(context)
    const [count, setCount] = useState(0)
    
    function updateCount(){
        setCount(count+1)
        console.log("set count called")
    }
    useEffect(() => {
         console.log("hi")
    },[]); // use effect same as component did mount // special purpose of this hook is to call api's
    
  return (
    <>
    <h1>Here is the context value {context[1]}</h1>
    <h2> Here will be our data {count}</h2>
    <button onClick={updateCount}>
        Click me
      </button>
    </>
  );
}

export default Head;

// call the api get the data 
// update other component by passing the data using context