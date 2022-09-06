import React, { useRef, useState } from 'react'

const Todo = () => {
    // const [todo,setTodo]=useState(""); // for controled input
    const inputRef = useRef<any>(null)
    //now we are going to insert this into an array
    const [todoList,setTodoList]= useState<any[]>([]); //<string[]>

    const addTodo =()=>{
        //to create a copy pf todo if there is any data proir in this
        //by using spred operator

        const todo = inputRef.current?.value
        setTodoList([...todoList,todo])
        // setTodo("")
    }

    // const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    //     // setTodo(e.target.value)
    // }

    const handleInput =()=>{
        inputRef.current.value=null;
    }
  return (
    <div>
        <input
         type="text"
         placeholder='enter name'
         ref={inputRef}
        //  value={todo}
        //  onChange={handleChange}
        />
        <button onClick={()=>{addTodo();handleInput()}} >Click</button>

        <ul>
            {todoList.map((val)=>{
                return(
                    <li key={val}>{val}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Todo