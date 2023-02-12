import { useState , useEffect } from "react";
import BlogList from "./BlogList"
const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPanding, setIsPanding] = useState(true)
    const handleDelete = (id) =>{
        const newBlog = blogs.filter((item) => item.id !== id);
        setBlogs(newBlog);
    }
    useEffect(()=>{
        setTimeout( ()=>{
            fetch('http://localhost:8000/blogs')
        .then((result) => {
            return result.json();
        })
        .then((data)=>{
            setIsPanding(false);
            setBlogs(data);
        })
        },1000)

    } ,[])
    return (

        <div className="home">
            {isPanding && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home