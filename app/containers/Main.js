import React from 'react';
import Navbar from './Navbar';


export default class MainComponent extends React.Component {
  render(){

    return (<div className='container-fluid'>
                <Navbar/>
                {this.props.children}
            </div>)
  }

}
