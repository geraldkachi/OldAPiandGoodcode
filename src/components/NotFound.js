import React from 'react'
import Spinner from ".//Spinner"

const NotFound = () => {
    return (
        <div>
            Page not found...
            <div className="mt-5 align-items-center">
                <Spinner />
            </div>
        </div>
    )
}

export default NotFound
