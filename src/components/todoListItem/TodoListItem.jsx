import React from "react";

const TodoListItem = ({ todo, id, deleteTodo }) => {
  return (
    <div className="todo--item">
      <h5>{todo.todo_task}</h5>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </div>
  );
};

export default TodoListItem;
