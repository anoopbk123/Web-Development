import React, { useState } from "react";
import "./ToDo.css";

export default function ToDo() {
  const [toDoList, setToDoList] = useState([]);
  const [toDoInput, setToDoInput] = useState('')
  const [count, setCount] = useState(0)

  const handleAddToDo = () => {
    if(toDoInput.trim().length){
        setToDoList((previousList) => {
            return [
                ...previousList,
                {
                id:count,
                todo:toDoInput
                }
            ]
        })
        setCount((previousCount)=>previousCount+1)
        setToDoInput('')
    }
    else{
        alert('enter activity')
    }
  }

  const handleRemove = (item) => {
    const newList = toDoList.filter((value)=>{
        return !(value.id === item.id && value.ToDo === item.ToDo)
    })
    setToDoList(newList);
  }

  return (
    <>
      {/* Head */}
      <h2 className="text-center m-1">ToDo</h2>

      {/* Input */}
      <div className="todo-input-container d-flex justify-evenly m-1 text-center">
        <div>
          <input value={toDoInput} onChange={(e)=>{setToDoInput(e.target.value)}} className="input todo-input" type="text" />
        </div>
        <div>
          <button onClick={handleAddToDo} className="btn-primary" >Add</button>
        </div>
      </div>

      {/* To Do List */}
      <div className="todo-list-container m-1">
        {toDoList.length ? (
          <>
            {toDoList.map((item) => (
              <div className="todo-item  d-flex justify-evenly m-1 text-center gap-1">
                <div className="todo">{item.todo}</div>
                <div>
                  <button className="btn-primary warning">Edit</button>
                </div>
                <div>
                  <button onClick={()=>{handleRemove(item)}} className="btn-primary danger">Remove</button>
                </div>
              </div>
            ))}
            <div className="text-center m-1">
                  <button onClick={()=>{setToDoList([])}} className="btn-primary danger">Clear</button>
                </div>
          </>
        ) : (
          <div className="text-center">No Activity</div>
        )}
      </div>
    </>
  );
}
