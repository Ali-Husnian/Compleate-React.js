import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPanding, setIsPanding] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((result) => {
            if (!result.ok) {
                throw Error('could not fetch data for this response!');
            }
          return result.json();
        })
        .then((data) => {
          setIsPanding(false);
          setBlogs(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPanding(false);
        });
    }, 1000);
  }, []);
  return (
    <div className="home">
      {isPanding && <div>Loading...</div>}
      {error  && <div>{error}</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
