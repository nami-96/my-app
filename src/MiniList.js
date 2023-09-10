export const MiniList = ({listIndex,  listItem, handleInputChange, handleAddEnter, handleAddTodo, handleDeleteTodo, handleDelList}) => {
    return (
        <div key={listIndex}>
        <h3 className="listName">{listItem.name} List</h3>
            <div className='card custom'>
                <div className='container'> 
                    <input className='form-control custom-input'
                    type="text"
                    value={listItem.inputVal}
                    // onChange={(e) => handleInputChange(e, listIndex)}
                    // onKeyDown={(e) => handleAddEnter(e, listIndex)}
                    />
                    {/* //<button className="btn btn-primary custom-button" id='add-btn' onClick={() => handleAddTodo(listIndex)}>Add</button> */}
                    
                </div>
                    {/* <ul className='listNo'>
                    {Array.isArray(listItem.items) &&
                        listItem.items.map((todo, index) => (
                            <li key={index} className='listItem'> 
                                {todo}
                            <button className='btn btn-danger custom-button' id='del-btn' onClick={() => handleDeleteTodo(index,listIndex)}>Delete</button>
                            </li>
                            ))}
                    </ul> */}
            </div>
        {/* <button className="btn btn-danger" 
            onClick={() => handleDelList(listIndex)}
        >Delete List</button> */}
    </div>
    )
}