import { useParams } from "react-router-dom";
const BlogsDetale = () => {
    const { id } = useParams()
    return (
        <div>
            <h3>Blogs Detales - {id}</h3>
        </div>
    );
}

export default BlogsDetale;