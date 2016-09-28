
import React from 'react';

import counterCss from '../style/counter.css';




export default class CounterComponent extends React.Component {



    render() {
        let count = this.props.count ;
        let countColor = count>0 ? ('change-font-color-to-green') : ('change-font-color-to-red');

        return (<div className="container" >
                <div className="jumbotron">
                  <h1 className={countColor}> {count}</h1>
                  <button onClick = {()=>{this.props.onIncrement()}} > Increment + </button>
                  <button onClick = {()=>{this.props.onDecrement()}}> Decrement - </button>
                </div>

              </div>);
    }
}
