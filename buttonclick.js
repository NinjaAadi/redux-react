import React, { Component } from "react";
import Aux from "./../hoc/aux";
import {connect} from 'react-redux';
class Buttonclick extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  show = () =>{
    console.log(this.props.ctr);
  }
  render() {
  return(
  <div>
    <button onClick={this.props.onIncrement}>{this.props.ctr}</button>
    <button onClick = {this.props.onStoreResult}>Store Result</button>
    <ul>
      {this.props.storedResult.map(item => {
      return(<li key = {item.id} onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>)
      })}
    </ul>
  </div>
  )
  }
}
const mapStatetoProps = (state) => {
  return {
    ctr : state.counter,
    storedResult :state.result
  }
}
const dispatchToProps = dispatch => {
  return {
    onIncrement : () => dispatch({type:"INCREMENT"}),
    onStoreResult : () => dispatch({type:"STORE_RESULT"}),
    onDeleteResult : (id) => dispatch({type:"DELETE_RESULT",Id:id})
}
}

export default connect(mapStatetoProps,dispatchToProps)(Buttonclick);
