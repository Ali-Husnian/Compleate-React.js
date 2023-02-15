import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogsDetale = () => {
    const { id } = useParams()
    const { data: blog, isPanding, error } = useFetch("http://localhost:8000/blogs/" + id);

    const history = useHistory();

    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:"DELETE"
        }).then( () =>{
            history.push('/')
        })
    }
    return (
        <div className="blog-details">
            {isPanding && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Writen By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                    <button className="btn-Edit">Edit</button>
                </article>
            )}
        </div>
    );
}

export default BlogsDetale;