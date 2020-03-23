import React, { Component } from 'react'
import {connect} from 'react-redux';
import {increment,storeResult,deleteresult} from "./../store/actions/action";
class Buttonclick extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
  <button onClick = {this.props.onIncrement}>{this.props.count}</button>
  <button onClick = {() => this.props.onStore(this.props.count)}>Store</button>
        <ul>
          {this.props.arr.map(item => {
          return <li key={item.id}onClick = {() => this.props.onDelete(item.id)}>{item.value}</li>
          })}
        </ul>
      </div>
    );
  }
}
const getValue = state => {
  return{
    count : state.count,
    arr : state.result
  }

}
const sendValue = dispatch =>{
  return {
    onIncrement  : () => dispatch(increment()),
    onStore : (value) => dispatch(storeResult(value)),
    onDelete : (id) => dispatch(deleteresult(id))
  }
}

export default connect(getValue,sendValue)(Buttonclick);