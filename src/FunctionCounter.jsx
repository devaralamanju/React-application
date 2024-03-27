import React, {useState} from 'react';

function FunctionCounter(){
 const [count, setCount] =  useState(0);
 const handleIncrease = () =>{
    setCount(count + 1)
 } 
 const handleDecrease = () =>{
    setCount(count - 1);
 }
   return(
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
    </div>
   )
}


export default FunctionCounter;