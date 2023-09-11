import React, { useState } from "react";
import TodoList from "./TodoList";
import { MiniList } from "./MiniList";
import { Summary } from "./summary";

const GenList = () => {

    const [list, setList] = useState([]) // [{name: "kamarol"}, {name: "nabil"}]
    const [inputVal, setInputVal] = useState(''); // ["kamarol", ""]

    const handleInputVal = (e) => {
        setInputVal(e.target.value)
    } //accept the title of the list

    const handleAddNameList = () => {
        if(inputVal.trim() !== '') {
            setList([...list, {name:inputVal, items:[], inputVal:''}])
            setInputVal('')
        }
    }// add a new object/"list" inside the array of list


    // const handleDelList = (index) => {
    //     const newLists = [...list]
    //     newLists.splice(index,1)
    //     setList(newLists)
        
    //     const newInputValues = [...inputValues]
    //     newInputValues.splice(index,1)
    //     setInputValues(newInputValues)
    // }
    
    //List Item Function

    const handleInputChange = (e, listIndex) => {
        const newInputValues = [...list];
        newInputValues[listIndex].inputVal = e.target.value;
        setList(newInputValues);
    };
  
    const handleAddTodo = (listIndex) => {
        if (list[listIndex].inputVal.trim() !== '') {
          
        const newLists = [...list];
        newLists[listIndex].items.push(list[listIndex].inputVal);
        setList(newLists);
         // Clear the input value for this list
         
        }};
  
    // const handleAddEnter = (event, listIndex) => {
    //     if (inputValues[listIndex].trim() !== '' && event.key === 'Enter') {
    //         const newLists = [...list];
    //         newLists[listIndex].items.push(inputValues[listIndex]);
    //         setList(newLists);
    
    //         const newInputValues = [...inputValues];
    //         newInputValues[listIndex] = ''; // Clear the input value for this list
    //         setInputValues(newInputValues);
    //     }
    // };
  
    // const handleDeleteTodo = (index,listIndex) => {
    //   const newTodos = [...list];
    //   newTodos[listIndex].items.splice(index, 1);
    //   setList(newTodos);
    // } ;

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
                    <MiniList
                    listIndex={listIndex}
                    listItem={listItem}
                    handleInputChange={handleInputChange}
                    // handleAddEnter={handleAddEnter}
                    handleAddTodo={handleAddTodo}
                    // handleDeleteTodo={handleDeleteTodo}
                    // handleDelList={handleDelList}
                    ></MiniList>
                ))}

            </div>
            {/* <div className="card custom">
            <h3>Summary</h3>
                {list.map((item, listIndex) => (
                    <Summary
                        listIndex={listIndex}
                        item={item}
                        handleDeleteTodo={handleDeleteTodo}
                    ></Summary>
   ))}
                </div> */}
        </div>
    )
}

export default GenList;