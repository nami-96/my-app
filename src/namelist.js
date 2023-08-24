import React, { useState } from "react";
import TodoList from "./TodoList";

const GenList = () => {
    const [nameLists, setNameLists] = useState([])
    const [inputVal, setInputVal] = useState('')
    const [todos, setTodos] = useState([]);

    const handleInputVal = (e) => {
        setInputVal(e.target.value)
    }

    const handleAddNameList = () => {
        if(inputVal.trim() !== '') {
            setNameLists([...nameLists, { name:inputVal, item: TodoList}])
            setInputVal('')
        }
    }

    const handleDelList = (index) => {
        const newNameLists = [...nameLists]
        newNameLists.splice(index,1)
        setNameLists(newNameLists)
    }

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
                {nameLists.map( (nameList,index) => (
                    <div key={index}>
                        <h3 className="listName">{nameList.name} List</h3>
                        <ul>
                            <TodoList
                                todos={todos}
                                setTodos={setTodos}
                            ></TodoList>
                        </ul>
                        <button className="btn btn-danger custom-button" id='del-btn custom'
                            onClick={handleDelList}
                        >Delete List</button>
                    </div>
                ))}
            </div>
            <div className="card custom">
            <h2>Summary</h2>
                {todos.map( (item,index) => (
                    <div key={index}>
                        <ul>
                            {item}
                        </ul>
                    </div>
                ))}
                </div>
        </div>
    )
}

export default GenList;