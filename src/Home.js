import { useState , useEffect } from "react";
import BlogList from "./BlogList"
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'ali', id: 3 }
    ])

    const handleDelete = (id) =>{
        const newBlog = blogs.filter((item) => item.id !== id);
        setBlogs(newBlog);
    }
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then((result) => {
            return result.json();
        })
        .then((data)=>{
            // console.log(data);
            setBlogs(data);
        })

    } ,[])
    return (

        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home