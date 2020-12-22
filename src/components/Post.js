import React from 'react'
import axios from 'axios'
import Spinner from "../components/Spinner"

const Post = ({match}) => {

    const [post, setPost] = React.useState(null)
     
    React.useEffect(() => {

        let id = match.params.post_id

        axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
        .catch(err => console.log(err))
        // const id = match.params.post_id  
    }, [])


        const titlePost = post ? (
            <div className="post">
                <h4 className="text-center">{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ) : (
            // <div>Loading posts...</div>
            <Spinner />
        )

    return (
        <div className='container text-center mt-5'>
            <h4>route param</h4>
            {titlePost}
        </div>
    )
}

export default Post
