import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id) => {
    const newName = prompt('Enter new name');
    const newDescription = prompt('Enter new description');
    setTodos(todos.map(todo => todo.id === id ? { ...todo, name: newName, description: newDescription } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const changeStatus = (id, status) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status } : todo));
  };

  const filteredTodos = todos.filter(todo => 
    filter === 'All' ? true : filter === 'Completed' ? todo.status === 'Completed' : todo.status === 'Not Completed'
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">My Todo</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onStatusChange={changeStatus}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    
    </div>
  );
};

export default App;
