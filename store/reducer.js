const initialState = {
  count:0,
  result :[]
}
const Reducer = (state = initialState,action) => {
  switch(action.type){
      case "INCREMENT":
          const newState = {...state};
          newState.count  = state.count + 1;
          return newState;
          case "STORE_RESULT":
          const newState1 = {...state};
          newState1.result = newState1.result.concat({value:action.value,id:action.key})  
          return newState1;
          case "DELETE_RESULT":
          let NewState = {...state};
          const newResult  = NewState.result.filter(item => {
            return item.id!==action.id;
          })
          NewState.result = newResult;
          return NewState;
         default:return state;
  }
}
export default Reducer;