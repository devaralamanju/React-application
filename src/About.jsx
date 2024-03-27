import imageTwo from './images/imgTwo.jpg';
import imgTree from './images/imgtree.jpg';

function About(){
    // function abc(){
    //     document.getElementById("demo").innerHTML = "new text changed"
    // }
    // function xyz(){
    //     document.getElementById("demo").style.color = "red";
    // }
    // function def(){
    //     document.getElementById("demo").style.backgroundColor = "blue";
    // }

    return(
        <div className="div-block">
        <img src={imageTwo} alt="imgTwo" />
        {/* <img src={imgTree} alt="img" /> */}
        {/* <button onClick={abc()}>on click</button>
        <button onChange={xyz()}>on change</button>
        <button onhover={def()}>on hover</button> */}
        </div>
        
    );
}


export default About;