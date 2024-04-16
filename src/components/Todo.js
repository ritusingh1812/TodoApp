import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addTodo,delTodo,removeTodo } from '../actions'
export default function Todo() {


  const[data,setData]=useState('')  
  // useState used for updating the text in the input section/add task section



  const dispatch=useDispatch();
  //useDispatch() ​ This hook returns a reference to the dispatch function from the Redux store.


  const list=useSelector((state)=> state.todoReducers.list)
  //Allows us to extract data from the Redux store state for use in this component, using a selector function.
  
  
  return (
    <>
    {/* MAIN DIV WITH TITLE */}
      <div className='main-div h-100 align-items-center justify-content-center'>
       <div className='child-div'>
            <figure>
            <figcaption><h1 className='add-h1'>TODO LIST</h1></figcaption> 
            </figure>
      </div>

    {/* DIV CONTAINING INPUT BOX FOR ADDING ITEMS AND AN ADD BUTTON */}
        <div className='input-group add-items'>
          <input className='form-control'type='text' value={data} placeholder='Enter your task'onChange={(event)=>setData(event.target.value)}/>
          <button className='btn btn-danger input-group-text'onClick={()=>{dispatch(addTodo(data),setData(''))}}><i className="fa-solid fa-plus"></i></button>
        </div>

{/* DIV DISPLAYING LIST WITH DELETE BUTTONS */}
      <div className='showitems list-group'>
        {list.map((elem)=>{
            return(<>


            <div className='row inner-list'>
            <div className='col-10 item my-2 list-group-item d-inline' key={elem.id}>
            <p className="text-danger"style={{padding:"2px"}}> {elem.data}</p>

            </div>
            <div className='col-2 my-2'><button className='btn btn-success btn-lg d-inline' title='deleteitem' onClick={()=>{dispatch(delTodo(elem.id),setData(''))}}><i className="fa-solid fa-trash"></i></button>
            </div>
    </div>
</>)
        })
        }

      
        {/*Remove all button which checks all tasks at once  */}
      </div>
      <div className='remove-all'>
        <button className='btn btn-danger' onClick={()=>{dispatch(removeTodo(),setData(''))}}>CHECK ALL</button>
      </div>
      </div>
    
    </>
  )
}
