import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const ProductList = () => {
    const {data: blogs, isPending, error} = useFetch('https://my-json-server.typicode.com/GamerDTK/json-server/blogs');

    return ( 
        <div className='mt-4' id="product-list-full">
            {blogs && (
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                        <div className="row">
                        {blogs.map(blog => (
                        <Link to={`/products/${blog.id}`} class="card col-12 col-lg-6" key={blog.id}>
                            <div className="wrapper">
                                <img src={blog.img} className="img card-img-top w-100" alt="benz img"/>
                                <div className="card-body">
                                    <p id="price">{blog.price}</p>
                                    <p id ="name">{blog.name}</p>
                                </div>      
                            </div>
                            
                        </Link>
                        ))}
                        </div>
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
 
export default ProductList;