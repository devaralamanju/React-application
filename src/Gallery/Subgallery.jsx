import gallone from '../images/gallone.jpg';

const Subgallery = () => {
    const abc = () => {
        document.getElementById("demo").style.color = "red";
    }
    const pqr = () => {
        document.getElementById("demo").style.backgroundColor = "blue";
    } 
    const xyz = () =>{
        document.getElementById("demo").innerHTML = "change new text";
    }
    return(
     <div className="div-block">
        <p>This is content section</p>
        <p id="demo">This is text</p>
        <button onClick={abc}> on click</button>
        <button onMouseOver={xyz}> on mouse over</button>
        <button onClick={pqr}> on click</button>
     </div>
    );
}
export default Subgallery;
