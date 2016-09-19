export default function counter(state = {count:0}, action) {
  let newCount  = state.count;
  switch (action.type) {

    case 'INCREMENT':

      return Object.assign({},state,{count:newCount+1});
    case 'DECREMENT':

      return Object.assign({},state,{count:newCount-1});
    default:
      return state;
  }
}
