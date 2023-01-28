export const Buttons=({lst,title,fn})=>{
    let myclass=`btn btn-${lst}`;
    return(
        <>
    <button onClick={fn} className={myclass}>{title}</button>
    </>
    )
}