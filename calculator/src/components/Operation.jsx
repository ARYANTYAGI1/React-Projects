export const Operation=({title,myclass,fn})=>{
    return(<>
    <button onClick={fn} className={myclass} >{title}</button>
    </>)
}