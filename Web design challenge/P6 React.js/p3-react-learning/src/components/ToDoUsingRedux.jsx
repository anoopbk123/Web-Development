import React, { useState } from "react";
import BackToHome from "./BackToHome";
import "../pages/ToDo.css";
import { addToDo, removeToDo } from "../redux-toolkit/toDoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ToDoUsingRedux() {
  const toDoList = useSelector((store) => store.toDoList);
  const dispatch = useDispatch();
  const [toDoInput, setToDoInput] = useState("");

  return (
    <>
      <BackToHome />
      {/* Head */}
      <h2 className="text-center m-1">ToDo</h2>

      {/* Input */}
      <div className="todo-input-container d-flex justify-evenly m-1 text-center">
        <div>
          <input
            onChange={(e) => setToDoInput(e.target.value)}
            className="input todo-input"
            type="text"
            value={toDoInput}
          />
        </div>
        <div>
          <button
            onClick={() => {
              toDoInput.trim().length
                ? dispatch(addToDo(toDoInput))
                : alert("Enter activity");
            }}
            className="btn-primary"
          >
            {" "}
            Add
          </button>
        </div>
      </div>

      {/* To Do List */}
      <div className="todo-list-container m-1">
        {toDoList.length ? (
          <>
            {toDoList.map((item, index) => (
              <div
                key={index}
                className="todo-item  d-flex justify-evenly m-1 text-center gap-1"
              >
                <div className="todo">{item}</div>
                <div>
                  <button onClick={()=>{
                    dispatch(removeToDo(item))
                  }} className="btn-primary danger">Remove</button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center">No Activity</div>
        )}
      </div>
    </>
  );
}
