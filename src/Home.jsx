import imgOne from './images/imgone.png';

function Home(){
    return(
        <div className="div-block">
            <img src={imgOne} alt="img" />
            <h1>This is header</h1>
        </div>
    );
}

export default Home;