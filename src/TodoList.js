import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const TodoList = ({todos,setTodos}) => {
  
  const [inputValue, setInputValue] = useState('');
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue(''); //clear the textbox
    }
  };

  const handleAddEnter = (event) => {
    if (inputValue.trim() !== '' && event.key === 'Enter') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }

  }

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
    <div className='card custom'>
      <div className='container'> 
        <input className='form-control custom-input'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleAddEnter}
        />
        <button className="btn btn-primary custom-button" id='add-btn' onClick={handleAddTodo}>Add</button>
        <button className="btn btn-secondary custom-button" id='clear-btn' onClick={handleClearAll} >Clear All</button>
      </div>
      <ul className='listNo'>
        {todos.map((todo, index) => (
          <li key={index} className='listItem'> 
            {todo}
             <button className='btn btn-danger custom-button' id='del-btn' onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
 /** and since the html being returned is from the variable (loop through), then the variable == html, is always in sync
         * add clear all button 
         * oso debug delete button done
          */