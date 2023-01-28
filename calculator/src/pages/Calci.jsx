import { Button } from "../components/Button"
import { Operation } from "../components/Operation"
import { Textbox } from "../components/Textbox"
import { useState } from "react"
import './Style.css'

export const Calci=()=>{
    const [exp, setexp] = useState("");
    
    

    function handleClick(event){
        let e=event.target.innerHTML;
        setexp(exp+e);
        
    }

   function solveExp(){
    // console.log(exp);
    setexp(eval(exp));
   }

   function handleAC(){
    setexp("");
   }

    console.log(exp);  
    return(<>
    <div className="container">
    <h1 className="alert alert-info text-center" >Calculator App</h1>
    <Textbox value={exp}/>
    <br />
    <Button myclass=' btn1 btn btn-primary' fn={handleClick} title="9" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary'fn={handleClick}  title="8" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary' fn={handleClick} title="7" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary'fn={handleAC}  title="AC" /> &nbsp;
    <br />
    <br />
    <Button myclass=' btn1 btn btn-primary'fn={handleClick}  title="6" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary'fn={handleClick}  title="5" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary'fn={handleClick}  title="4" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary'fn={handleClick}  title="+" /> &nbsp;
    <br />
    <br />
    <Button myclass=' btn1 btn btn-primary'fn={handleClick}  title="3" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary'fn={handleClick}  title="2" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary'fn={handleClick}  title="1" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary'fn={handleClick}  title="-" /> &nbsp;
    <br />
    <br />
    <Button myclass=' btn1 btn btn-primary'fn={handleClick}  title="*" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary'fn={handleClick}  title="0" /> &nbsp;
    <Button myclass= 'btn1 btn btn-primary'fn={handleClick}  title="/" /> &nbsp;
    <Operation fn={solveExp} myclass=" btn btn-danger" title="="/> &nbsp;
    </div>
    
    
    </>)
}