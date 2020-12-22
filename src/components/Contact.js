import React from 'react'

const Contact = ({history}) => {

    setTimeout(() => {
        history.push("/about")
    }, 2000);

    return (
        <div className="container mt-5">
            <h4 className="text-center">Contact</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit alias illo pariatur deserunt mollitia, cumque fugiat provident quae reiciendis quaerat.</p>
        </div>
    )
}

export default Contact
