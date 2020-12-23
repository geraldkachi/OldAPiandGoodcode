import React from 'react'

const AddTodos = () => {
    const [content, setContent] = React.useState('')

    const handleChange = (e) => {
         setContent(e.target.value)
    }
    const handleSubmit = (e) => {
         e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Add new todos: </label>
                <input type="text"value={content} onClick={handleChange} />
            </form>
        </div>
    )
}

export default AddTodos
