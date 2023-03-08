import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Blogpage = () => {
    const [posts, setPosts] = useState([]);
    console.log(useLocation())
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
    }, []);
    return (
        <div>
            <h1>This is blog page</h1>
            <h2><Link to='/posts/new'> Add new post</Link></h2>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export default Blogpage;