export const addToDo = (text,id) => {
  return {
    type: "ADD_TODO" ,
    text : text ,
    id : id
  };
}
