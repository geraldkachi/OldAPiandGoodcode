import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => (
                <div key={todo.id} className="list-group">
                    <div  onClick={()=> deleteTodo(todo.id)} className="list-group-item">
                        {todo.content}
                    </div>
                </div>
            )
        )
    ) : (
        <div>No damn todos here...</div>
    )

    return (
        <>
          {todoList}  
        </>
    )
}

export default Todos
