import { useState } from "react";
import TodoTable from "./TodoTable.jsx";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [descDate, setDescDate] = useState({ desc: "", date: "" });

  const handleDescChange = (event) => {
    setDescDate({ ...descDate, desc: event.target.value });
  };

  const handleDateChange = (event) => {
    setDescDate({ ...descDate, date: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, descDate]);
    setDescDate({ desc: "", date: "" });
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="TodoList">
      <h2>Simple To-do List</h2>
      <div className="form">
        <input
          placeholder="Description"
          onChange={handleDescChange}
          value={descDate.desc}
        />
        <input
          placeholder="Date"
          onChange={handleDateChange}
          value={descDate.date}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoTable todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default TodoList;
