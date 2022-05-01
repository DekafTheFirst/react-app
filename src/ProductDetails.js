import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();

    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    
    return ( 
        <div className="mt-4" id="product-details">
            
            {blog && (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-6 mx-auto " id="top-row">
                            <div className="row">
                                <div className="col">
                                    <img src={process.env.PUBLIC_URL+"/images/maybach.jpg"} className="img" alt="benz img"/>
                                </div>
                                <div className="col-12 col-lg-5" id="spec">
                                    <h4>{blog.price}</h4>
                                    <p id="name">{blog.name}</p>

                                    <h6>SPECIFICATIONS:</h6>
                                    <p>700HP</p>
                                    <p>270MPH</p>
                                    <p>4-WHEEL DRIVE</p>
                                    <p>COLOR: WHITE</p>

                                    <a href="#categories" className="btn btn-dark">BUY NOW</a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" >
                        <div className="col-12 col-sm-6 " id="description">
                            <h6>DESCRIPTION:</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus sit amet enim gravida maximus. Mauris a sodales erat. Aenean eleifend sagittis lorem eget commodo. Mauris interdum ante sed commodo varius. Mauris quis maximus quam, vel finibus dolor. Proin tristique mauris in lectus ultricies porttitor</p>
                        </div>
                    </div>
                </div>
                
            )}
            {isPending && 
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>}
            {error && <div>{error}</div>}
        </div>
     );
}
 
export default BlogDetails;