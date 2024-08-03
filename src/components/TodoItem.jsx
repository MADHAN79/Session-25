/* eslint-disable react/prop-types */
// src/components/TodoItem.js
import '../App.css'


const TodoItem = ({ todo, onStatusChange, onEdit, onDelete }) => {
  return (
    <div className="todoItem">
      <h3 className="todoName">Name: {todo.name}</h3>
      <p className="todoDescription">Description: {todo.description}</p>
      <div className="flex items-center">
        <span>Status:</span>
        <select
          value={todo.status}
          onChange={(e) => onStatusChange(todo.id, e.target.value)}
          className='todoStatus'
        >
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="twobuttons">
        <button onClick={() => onEdit(todo.id)} className="editButton">Edit</button>
        <button onClick={() => onDelete(todo.id)} className="deleteButton">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
