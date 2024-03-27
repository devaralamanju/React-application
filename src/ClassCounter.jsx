import React from 'react';

class ClassCounter extends React.Component{
    constructor(){
        super();
       this.state = {
            count : 0,
            name : "manjula"
        }
        this.handleIncrease = this.Increase.bind(this);
        this.handleDecrease = this.Decrease.bind(this);
    }
    Increase(){
        this.setState(prevState => ({
            count : prevState.count +1,
        }) 
        )

    }
    Decrease(){
        this.setState(prevState => ({
            count :prevState.count -1
        })
            
        )
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.hanleDecrease}>Decrease</button>
            </div>
        )
    }
}

export default ClassCounter;