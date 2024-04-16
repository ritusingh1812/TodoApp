//actions defined and exported for adding,deleting and removing all tasks

export const addTodo=(data)=>{
  return{
    type:"ADD_TODO",
    payload:{
      id:new Date().getTime().toString(),
      data:data
    }
  }
}

export const delTodo=(id)=>{
  return{
    type:"DEL_TODO",
    id:id
      
    
  }
}
export const removeTodo=(data)=>{
  return{
    type:"REM_TODO",
  
  }
}