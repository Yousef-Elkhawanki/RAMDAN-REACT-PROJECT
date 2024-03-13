import React, { useEffect, useState } from "react";
import TodoListItem from "../todoListItem/TodoListItem";

const TodoListContainer = () => {
  const [todo, setTodo] = useState({
    todo_task: "",
  });

  const [todoContainer, setTodoContainer] = useState([]);
  const createNewTodo = () => {
    setTodoContainer([...todoContainer, todo]);
  };

  const deleteTodo = (id) => {
    const updateTodo = todoContainer.filter((data, index) => index != id);
    setTodoContainer(updateTodo);
    localStorage.setItem("todo", JSON.stringify(updateTodo));
    console.log("todo", id);
  };
  useEffect(() => {
    const myTodo = JSON.parse(localStorage.getItem("todo"));
    if (myTodo) {
      setTodoContainer(myTodo);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoContainer));
  }, [todoContainer]);
  return (
    <>
      <div className="todo--container">
        <h3>Todo List..</h3>
        <div className="form">
          <label htmlFor="todo_name">Todo Name</label>
          <input type="text" name="todo_name" id="todo_name" placeholder="add new Todo" onChange={(e) => setTodo({ todo_task: e.target.value })} />
          <button onClick={createNewTodo}>create New Todo</button>
        </div>
      </div>
      <div className="todo--items">
        {todoContainer.map((todo, index) => (
          <TodoListItem todo={todo} key={index} deleteTodo={deleteTodo} id={index} />
        ))}
      </div>
    </>
  );
};

export default TodoListContainer;
