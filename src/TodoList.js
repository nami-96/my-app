import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };


  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  } ;

  const handleClearAll = () => {
    setTodos([]);
  }

  // since we call the function
  // then it will return html

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleClearAll}>Clear All</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
 {/** and since the html being returned is from the variable (loop through), then the variable == html, is always in sync
         * add clear all button 
         * oso debug delete button done
          */}