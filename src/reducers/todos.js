const todo = (state,action) => {
  switch(action.type){
    case "ADD_TODO":
    return {
      id : action.id ,
      text : action.text ,
      completed : false
    }
    case "TOGGLE_TODO" :
        if(action.id == state.id){
          return {...state,completed = !state.completed}
        }
        return state;
    }
}

const visibilityFilter = (state = 'SHOW ALL', action) => {
  switch(action.type){
    case "SET_VISIBILITY_FILTER";
      return action.filter;
    default :
      return state ;
  }
}

const todos = (state =[] ,action) => {
  switch(action.type){
    case "ADD_TODO":
      return [...state,todo(undefined,action)]
      case "TOGGLE_TODO":
        return state.map(t => todo(t,action))
    default :
      return state ;
  }
}

export default todos ;