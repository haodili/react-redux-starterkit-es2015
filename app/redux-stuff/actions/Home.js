export  function increment(){
  
  return dispatch =>{
    dispatch({
        type: 'INCREMENT',
        payload: 1,
      })}
}


export  function decrement(){
  return dispatch =>{
    dispatch({
        type: 'DECREMENT',
        payload: -1,
      })};
}
