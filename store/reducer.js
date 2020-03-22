import { returnStatement } from "@babel/types";

const initialState = {
    counter:0,
    result:[]
}


const Reducer = (state = initialState,action) => {
    

    switch (action.type) {
      case "INCREMENT":
        const newState = { ...state };
        newState.counter = state.counter + 1;
        return newState;
      case "STORE_RESULT":
        return {
          ...state,
          result: state.result.concat({ id: new Date(), value: state.counter })
        };
      case "DELETE_RESULT":
        //   const array = [...StorageEvent.result];
        //   array.splice(id,1);
        const newArray = state.result.filter(result => result.id !== action.Id);
        console.log(newArray);
        return {
          ...state,
          result: newArray
        };
      default:
        return state;
    }
    
}
export default Reducer