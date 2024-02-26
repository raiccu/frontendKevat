import React from "react";
import "../index.css";

const TodoTable = ({todos, deleteTodo}) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
          {todos.map((descDate, index) => (
            <tr key={index}>
              <td>{descDate.date}</td>
              <td>{descDate.desc}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
