import './App.css';
// import About from './About';
// import Subgallery from './Gallery/Subgallery';
// import Home from './Home';
import Input from './Input';
import Submit from './Submit';
import InputField from './InputField';
import Example from './example';
import Newcomponent from './Newcomponent';
import Classcomponent from './Classcomponent';
import Count from './Count';
import FunctionCounter from './FunctionCounter';
// import ClassCounter from './ClassCounter';

const  App =() => {
  return (
    <>
  
    <div className="container">
      {/* <ClassCounter /> */}
      <FunctionCounter />
      <Count />
      <Newcomponent />
      <Classcomponent />
    <Example />
      <Input />
      <InputField />
      <InputField />
      <Submit />
    </div>

    <div className="App">
        {/* <Home />
        <About />
        <Subgallery /> */}
      </div>
      </>
  );
}

export default App;
