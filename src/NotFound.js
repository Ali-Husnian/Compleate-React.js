import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="page-404">
            <h2>Sorry <span className="error-404">404</span></h2>
            <p>This is not avalable apge</p>
            <Link to="/">Go To Home</Link>
            <h1></h1>
        </div>
     );
}
 
export default NotFound;