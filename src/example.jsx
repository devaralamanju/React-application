import React from "react";

const message =  props => <div>{props.mssg}</div>;
const Example = () =>{
    return(
        <>
        <div>
            {message({ mssg: 'all new text' })}
            {message({ mssg: 'hello world' })}
        </div>
        </>
    );
}
 export default Example;