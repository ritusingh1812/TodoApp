//This contains code on how the actions will be performed using switch case for each action

const initialData={
  list:[]
}

const todoReducers=(state=initialData,action)=>{
  switch(action.type){
    case "ADD_TODO":
      const{id,data}=action.payload;
      return {
        ...state,
        list:[
          ...state.list,{
            id:id,
            data:data


          }

        ]
      }
      //the new task is added to the list and displayed

      case "DEL_TODO":
      const newlist=state.list.filter((elem)=>elem.id!==action.id)
      return {
        ...state,
        list: newlist
          
        
      }
      // the newlist comprises of all except the current (deleted) element
      case "REM_TODO":
        const newl=[];
      return {
        ...state,
        list: newl
          
        
      }
      //an empty list is returned
      default:return state;
  }
}


export default todoReducers;