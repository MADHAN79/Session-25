/* eslint-disable react/prop-types */

import TodoItem from './TodoItem';

const TodoList = ({ todos, onStatusChange, onEdit, onDelete }) => {
  return (
    <div className='todoList'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onStatusChange={onStatusChange}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
