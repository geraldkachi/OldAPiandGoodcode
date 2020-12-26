import React from 'react'
import Spinner from ".//Spinner"

const NotFound = () => {
    return (
        <div className="text-center">
            Page not found...
            <div className=" vh-100">
                <Spinner />
            </div>
        </div>
    )
}

export default NotFound
