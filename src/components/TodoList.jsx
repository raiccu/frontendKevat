import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [descDate, setDescDate] = useState({ desc: "", date: "" });
  const columnDefs = [
    { field: "desc", headerName: "Description", filter: true,  floatingFilter: true },
    { field: "date", headerName: "Date", filter: true, floatingFilter: true },
    {
      headerName: "Actions",
      cellRenderer: deleteButtonRender,
      cellRendererParams: {
        onClick: (id) => {
          deleteTodo(id);
        },
      },
    },
  ];

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
      <div className="ag-theme-material">
        <input
          className="ag-theme-material"
          style={{ backgroundColor: "#fff", width: "33%" }}
          placeholder="Description"
          onChange={handleDescChange}
          value={descDate.desc}
        />
        <input
          className="ag-theme-material"
          style={{ backgroundColor: "#fff", width: "33%" }}
          placeholder="Date"
          onChange={handleDateChange}
          value={descDate.date}
        />
        <button
          className="ag-theme-material"
          style={{ width: "34%", height: "2rem" }}
          onClick={addTodo}
        >
          Add
        </button>
        <div className="ag-theme-material" style={{ width: 600, height: 500 }}>
          <AgGridReact rowData={todos} columnDefs={columnDefs} />
        </div>
      </div>
    </div>
  );
}

const deleteButtonRender = (props) => {
  const handleClick = () => {
    props.onClick(props.data.id);
  };

  return <button className="ag-theme-material"
  style={{width: "100%", height: "95%", border: "none" }} onClick={handleClick}>Delete</button>;
};

export default TodoList;
