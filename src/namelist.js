import React, { useState } from "react";
import TodoList from "./TodoList";

const GenList = () => {

    const [list, setList] = useState([]) // [{name: "kamarol"}, {name: "nabil"}]
    const [inputVal, setInputVal] = useState('')
    const [inputValues, setInputValues] = useState(''); // ["kamarol", ""]

    const handleInputVal = (e) => {
        setInputVal(e.target.value)
    }

    const handleAddNameList = () => {
        if(inputVal.trim() !== '') {
            setList([...list, {name:inputVal, items:[]}])
            setInputValues([...inputValues,''])
            setInputVal('')
        }
    }

    const handleDelList = (index) => {
        const newLists = [...list]
        newLists.splice(index,1)
        setList(newLists)
        
        const newInputValues = [...inputValues]
        newInputValues.splice(index,1)
        setInputValues(newInputValues)
    }
    
    //List Item Function

    const handleInputChange = (e, listIndex) => {
        const newInputValues = [...inputValues];
        newInputValues[listIndex] = e.target.value;
        setInputValues(newInputValues);
    };
  
    const handleAddTodo = (listIndex) => {
        if (inputValues[listIndex].trim() !== '') {
          
        const newLists = [...list];
        newLists[listIndex].items.push(inputValues[listIndex]);
        setList(newLists);
    
        const newInputValues = [...inputValues];
         // Clear the input value for this list
        setInputValues(newInputValues);
        newInputValues[listIndex] = '';

        }
        
    };
  
    const handleAddEnter = (event, listIndex) => {
        if (inputValues[listIndex].trim() !== '' && event.key === 'Enter') {
            const newLists = [...list];
            newLists[listIndex].items.push(inputValues[listIndex]);
            setList(newLists);
    
            const newInputValues = [...inputValues];
            newInputValues[listIndex] = ''; // Clear the input value for this list
            setInputValues(newInputValues);
        }
    };
  
    const handleDeleteTodo = (index,listIndex) => {
      const newTodos = [...list];
      newTodos[listIndex].items.splice(index, 1);
      setList(newTodos);
    } ;

    // const handleDelSum = (index, listIndex) => {
    //     const newSum = [...list];
    //     newSum[listIndex].items.splice(index, 1);
    //     setList(newSum)
    // }

    return (
        <div>
            <div className="input-group mb-3">
            <input className="form-control"
                type="text"
                value={inputVal}
                onChange={handleInputVal}
                >
                </input>
            <button className="btn btn-outline-secondary"
                onClick={handleAddNameList}
                >
                Create List
            </button>
            </div>
            <div className="list-card">
                {list.map( (listItem,listIndex) => (
                    <div key={listIndex}>
                        <h3 className="listName">{listItem.name} List</h3>
                        <div className='card custom'>
                            <div className='container'> 
                                <input className='form-control custom-input'
                                type="text"
                                value={inputValues[listIndex]}
                                onChange={(e) => handleInputChange(e, listIndex)}
                                onKeyDown={(e) => handleAddEnter(e, listIndex)}
                                />
                                <button className="btn btn-primary custom-button" id='add-btn' onClick={() => handleAddTodo(listIndex)}>Add</button>
                                
                            </div>
                            <ul className='listNo'>
                            {Array.isArray(listItem.items) &&
                                listItem.items.map((todo, index) => (
                                    <li key={index} className='listItem'> 
                                        {todo}
                                    <button className='btn btn-danger custom-button' id='del-btn' onClick={() => handleDeleteTodo(index,listIndex)}>Delete</button>
                                    </li>
                                    ))}
                            </ul>
                            </div>
                        <button className="btn btn-danger" 
                            onClick={() => handleDelList(listIndex)}
                        >Delete List</button>
                    </div>
                ))}

            </div>
            <div className="card custom">
            <h3>Summary</h3>
                {list.map((item, listIndex) => (
                <div key={listIndex} >
                    <ul className='listNo'>
                        {item.items.map((todo, index) => (
                        <li key={index} className='listItemSummary'>
                            {todo}
                            <button className='btn btn-danger custom-button' id='sum-btn' onClick={() => handleDeleteTodo(index, listIndex)}>Delete</button>
                        </li>
            ))}
                        </ul>
                </div>
   ))}
                </div>
        </div>
    )
}

export default GenList;