import React from 'react'

const AddTodos = ({addTodo}) => {
    const [content, setContent] = React.useState({
        text:''
    })

    const handleChange = (e) => setContent({...content, [e.target.name]: e.target.value})

    const handleSubmit = (e) => {
         e.preventDefault()
         setContent(...content,'')
         addTodo('')
        console.log(content)
    }

    const {text} =content
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Add new todos: </label>
                <input type="text" name="text" value={text} onChange={handleChange} />
            </form>
        </div>
    )
}

export default AddTodos
