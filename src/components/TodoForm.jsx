/* eslint-disable react/prop-types */
import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      name,
      description,
      status: 'Not Completed',
    });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <input
        type="text"
        placeholder="Todo Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <input
        type="text"
        placeholder="Todo Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded flex-1"
      />
      <button type="submit" className="formbutton bg-green-500 text-white">Add Todo</button>
    </form>
  );
};

export default TodoForm;
