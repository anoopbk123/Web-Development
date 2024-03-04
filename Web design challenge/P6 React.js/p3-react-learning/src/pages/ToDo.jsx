import React, { useState } from "react";
import "./ToDo.css";
import BackToHome from '../components/BackToHome'

export default function ToDo() {
  const [toDoList, setToDoList] = useState([]);
  //setting id for input to undefined. if edit button clicked input is changed with editing todo and id as its input id
  const [toDoInput, setToDoInput] = useState({
    id: undefined,
    input: "",
  });
  const [count, setCount] = useState(0);

  const handleAddToDo = () => {
    if (toDoInput.input.trim().length) {
      if (toDoInput.id === undefined) {
        setToDoList((previousList) => {
          return [
            ...previousList,
            {
              id: count,
              todo: toDoInput.input,
            },
          ];
        });
        setCount((previousCount) => previousCount + 1);
        setToDoInput((p) => {
          return {
            ...p,
            input: "",
          };
        });
      } else {
        const editedItemIndex = toDoList.findIndex(value => value.id === toDoInput.id);
        const newToDoList = toDoList
        newToDoList.splice(editedItemIndex, 1, {
          id:toDoInput.id,
          todo:toDoInput.input
        })
        setToDoList(newToDoList)
        setToDoInput({
          id:undefined,
          input:''
        })
      }
    } else {
      alert("enter activity");
    }
  };

  const handleRemove = (item) => {
    const newList = toDoList.filter((value) => {
      return !(value.id === item.id && value.todo === item.todo);
    });
    setToDoList(newList);
  };

  const handleEdit = (item) => {
    setToDoInput({
      id: item.id,
      input: item.todo,
    });
  };

  return (
    <>
      <BackToHome/>
      {/* Head */}
      <h2 className="text-center m-1">ToDo</h2>

      {/* Input */}
      <div className="todo-input-container d-flex justify-evenly m-1 text-center">
        <div>
          <input
            value={toDoInput.input}
            onChange={(e) => {
              setToDoInput((prev) => {
                return {
                  ...prev,
                  input: e.target.value,
                };
              });
            }}
            className="input todo-input"
            type="text"
          />
        </div>
        <div>
          <button onClick={handleAddToDo} className="btn-primary">
            {toDoInput.id === undefined ? <span>Add</span> : <span>Edit</span>}
          </button>
        </div>
      </div>

      {/* To Do List */}
      <div className="todo-list-container m-1">
        {toDoList.length ? (
          <>
            {toDoList.map((item) => (
              <div
                key={item.id}
                className="todo-item  d-flex justify-evenly m-1 text-center gap-1"
              >
                <div className="todo">{item.todo}</div>
                <div>
                  <button
                    onClick={() => {
                      handleEdit(item);
                    }}
                    className="btn-primary warning"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleRemove(item);
                    }}
                    className="btn-primary danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-center m-1">
              <button
                onClick={() => {
                  setToDoList([]);
                }}
                className="btn-primary danger"
              >
                Clear
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">No Activity</div>
        )}
      </div>
    </>
  );
}
