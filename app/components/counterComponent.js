
import React from 'react';





export default class CounterComponent extends React.Component {



    render() {
        let count = this.props.count;

        return (<div className="container">
                <div className="jumbotron">
                  <h1>{count}</h1>
                  <button onClick = {()=>{this.props.onIncrement()}} > Increment + </button>
                  <button onClick = {()=>{this.props.onDecrement()}}> Decrement - </button>
                </div>

              </div>);
    }
}
