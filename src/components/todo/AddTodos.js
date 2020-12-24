import React from 'react'

const AddTodos = ({addTodo}) => {
    const [content, setContent] = React.useState('')

    const handleChange = (e) => setContent(e.target.value)

    const handleSubmit = (e) => {
         e.preventDefault()
         setContent('')
         addTodo('')
        console.log(content)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Add new todos: </label>
                <input type="text"value={content} onChange={handleChange} />
            </form>
        </div>
    )
}

export default AddTodos
