import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Spinner from "./Spinner"
import ModalCom from "./ModalCom";

const Home = () => {

    const [posts ,setPost] = React.useState([])

    // ?_limit=5

  React.useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => setPost(res.data.slice(0,10)))
      .catch((err) => console.error(err))
  }, [])

  const postList = posts.length ? (
      posts.map(post => (
          <div key={post.id} className="card m-1 shadow-lg d-flex justify-content-between flex-row">
            <Spinner />
            <div className="card-body">
                <Link to={`/posts/${post.id}`} className="card-title">{post.title}</Link>
                <p>{post.body}</p>
                <ModalCom />
            </div>
          </div>
      ))
  ) : (
      <div className="text-center">No post yet... </div>
  )

  return (
    <div className="container mt-5">
      <h4 className="text-center">Home</h4>
      {postList}
    </div>
  );
};

export default Home;