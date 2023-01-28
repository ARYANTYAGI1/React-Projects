import { useState } from "react"
import { Buttons } from "../components/Buttons"
import { Message } from "../components/Message"

export const CounterApp=()=>{

   const [count, setcount] = useState(0);
    function handleUp(){
        
        setcount(count+1);
        console.log("+ clicekd",count);
    }

    function handleDown(){
        setcount(count-1);
    }


    return(<>
    <div className="container">
    <h1 className="alert alert-info text-center">Counter App</h1>
    <Buttons lst='primary' title="+" fn={handleUp}  /> &nbsp;
    <Buttons lst='danger' title="-" fn={handleDown} />
    <Message val={count}/>
    </div>
    
    </>)
}