import { Link } from "react-router-dom";

const ProductList = ({ blogs, title }) => {
  return (
    <section className="product-list" id="product-list">
      <div className="container-fluid p-1">
      <h2>New Releases</h2>
      
      <div className="row gx-0">
        <div className="product-scroller snaps-inline" >
        {blogs.map(blog => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <div className="wrapper">
                <div className="image"></div>
                <p id ="name">{blog.name}</p>
                <p id="price">{blog.price}</p>
              </div>
            </Link>
        ))}
        </div>
      </div>
    </div>
    </section>
    
  );
}
 
export default ProductList;