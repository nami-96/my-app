import React, { useState } from "react";
import TodoList from "./TodoList";

const GenList = () => {
    const [list, setList] = useState([{
        name:'',
        item:['']
    }])

    const [inputVal, setInputVal] = useState('')

    const handleInputVal = (e) => {
        setInputVal(e.target.value)
    }

    const handleAddNameList = () => {
        if(inputVal.trim() !== '') {
            setList([...list, {name:inputVal}])
            setInputVal('')
        }
    }

    const handleDelList = (index) => {
        const newLists = [...list]
        newLists.splice(index,1)
        setList(newLists)
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
                {list.map( (list,index) => (
                    <div key={index}>
                        <h3 className="listName">{list.name} List</h3>
                        <ul>
                        </ul>
                        <button className="btn btn-danger custom-button" id='del-btn custom'
                            onClick={handleDelList}
                        >Delete List</button>
                    </div>
                ))}

            </div>
            <div className="card custom">
            <h2>Summary</h2>
                </div>
        </div>
    )
}

export default GenList;