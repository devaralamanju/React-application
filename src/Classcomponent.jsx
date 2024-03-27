import React from "react";



class classExample extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0,
            name: "Manjula", 
        };
        this.Increase = this.handleIncrease.bind(this);
        this.Decrease = this.handleDecrease.bind(this);
    }
     
    handleIncrease(){
        this.setState(
            prevState => ({
                count: prevState.count +1
                
            })
        )
    }
  
    handleDecrease(){
        this.setState(
            prevState => ({
                count: prevState.count -1
            })
        )
    }
    render(){

        return(
            <div>
                <h1>{this.state.count}</h1>
                <h2>{this.name}</h2>
                <button onClick={this.Increase}>Increse</button>
                <button onClick={this.Decrease}>Decrease</button>
            </div>
        );
    }
}

export default classExample;