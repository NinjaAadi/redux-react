 export const increment = () => {
    return {
        type:"INCREMENT"
    }
}

export const saveresult  = value => {
    return {
    type: "STORE_RESULT",
    value: value,
    key: new Date()
  };

}
export const storeResult = (value) => {
    return dispatch => {
         setTimeout(() =>{
            dispatch(saveresult(value));
         },2000)
    } 
};
export const deleteresult = (id) =>{
    return dispatch => {
            setTimeout(()=>{dispatch(deleteit(id))},2000)
    }
};
const deleteit = (id)=>{
    return{
        type:"DELETE_RESULT",
        id:id
    }
}