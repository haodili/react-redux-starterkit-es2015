
import React from 'react';
import {increment,decrement} from '../redux-stuff/actions/Home';
import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';


class HomeComponent extends React.Component {
    render() {


        return  <CounterComponent count={this.props.count} onIncrement = {this.props.onIncrement} onDecrement= {this.props.onDecrement} />
    }
}

const mapStateToProps = (state) => {

  return {
    count: (state.counter.count)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement:()=>{
      dispatch(decrement());
    }

  };
};

export default  HomeComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)
