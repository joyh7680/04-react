function countReducer(state, action){
  switch(action.type) {
    case "INCREASE": 
      return state + 1;
    case "DECREASE":
      return state -1;
    case  "RESET":
      return state;
    case  "ADD":
      return state + action.playload;
    case  "MINUS":
      return state - action.playload;
    default:
      return state;
  }
} 

export default countReducer //외부에서 쓸수있게 export