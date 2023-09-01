export const Summary = ({listIndex,handleDeleteTodo, item}) => {
    return (
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
    )
}