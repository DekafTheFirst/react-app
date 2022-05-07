import { Link } from "react-router-dom";
import {BsArrowRightShort} from "react-icons/bs"
const ProductListInHome = ({ blogs, title }) => {
  return (
    <section className="product-list" id="product-list">
      <div className="container-fluid p-1">
      <h3>New Releases</h3>
      
      <div className="row gx-0">
        <div className="product-scroller snaps-inline" >
        {blogs.map(blog => (
            <Link to={`/products/${blog.id}`} key={blog.id} class="link-div">
              <div className="wrapper">
                <div className="image"></div>
                <p id ="name">{blog.name}</p>
                <p id="price">{blog.price}</p>
              </div>
            </Link>
        ))}
            <div id="view-all">
              <div className="wrapper">
                <div className="image">
                  <Link to="/products">view all<BsArrowRightShort/></Link>
                </div> 
              </div>
            </div>
        </div>
      </div>
    </div>
    </section>
    
  );
}
 
export default ProductListInHome;