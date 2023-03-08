import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'

function Singlepage() {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((responce) => responce.json())
        .then((data) => setPost(data))
    }, [id])

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go home</button>
        {post && (
          <>
            <h1>{post.title} {post.id}</h1>
            <p>{post.body}</p>   
            <Link to={`/posts/${id}/edit`} >Edit this post</Link>
          </>
        ) }
    </div>
  )
}

export default Singlepage