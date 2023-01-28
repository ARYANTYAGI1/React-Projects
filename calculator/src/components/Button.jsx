export const Button=({title,myclass,fn})=>{
    
    return(<>
    <button onClick={fn} className={myclass}>{title}</button>
    
    </>)
}