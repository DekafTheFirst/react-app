import { Link } from "react-router-dom";
import ProductListInHome from "./ProductListInHome";
import useFetch from "./useFetch";
import {BsArrowRightShort} from "react-icons/bs"

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('https://my-json-server.typicode.com/GamerDTK/json-server/blogs');

    return ( 
        <div className = "home">
            <div className="container banner">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-9 d-flex img-div">
                        <img src={process.env.PUBLIC_URL+"/images/amg.png"} className="" width="100%" alt="benz img"/>
                    </div>

                    <div className="col-12 col-md-3 hero d-flex mt-5 justify-content-center">
                        <div className="mt-auto "><h2 className="mt-0">Built for speed</h2>
                        <p>Introducing the Benz, AMG GTR, our fastest car ever</p>
                        <a href="#product-list" className="btn btn-dark">SHOP</a>
                        </div>
                    </div>
                </div>
            </div>
            
            {error && <div>{error}</div>}
            {isPending && 
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>}
            {blogs && <ProductListInHome blogs={blogs} title="new relaeses" />}

            <section className="container-fluid" id="categories">
                <div className="row d-flex">
                    <div className="col-sm-6 category">
                        <div className="category-wrapper">
                        <h2>Purchase a mercedes benz</h2>
                        <a className="category-link" href="#product-list">Shop Now<BsArrowRightShort/></a>
                        </div>
                    </div>
                    <div className="col-sm-6 category">
                        <div className="category-wrapper">
                        <h2>Want a free test drive?</h2>
                        <Link  className="category-link" to="/">Shop Now <BsArrowRightShort/></Link>
                    </div>

                    </div>
                </div>
            </section>

            
            
            <section className="container container-fluid mt-3" id="mailing-list">
                <div className="row justify-content-center">
                    <div className="col col-sm-5 hero d-flex mt-5 justify-content-center">
                        <div className="content mt-auto "><h2 className="mt-0">Never miss a single drop</h2>
                        <p>Mind signing up for our free mailing list?</p>
                        <a href="#categories" className="btn btn-dark"><div className="div-in-link">SIGN UP</div></a>
                        </div>
                    </div>
                </div>
            </section>

            
            
        </div>
     );
}
 
export default Home;