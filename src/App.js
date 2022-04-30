import Navbar from './Navbar';
import Home from './Home';
// import Create from './Create';
import {Routes, Route} from 'react-router-dom'
import ProductDetails from './ProductDetails';
import Footer from './Footer';
// import BlogDetails from './BlogDetails';
// import NotFound from './NotFound';

function App() {

    return (
        <div className='app'>
            <Navbar />
            <div className="content">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/blogs/:id" element={<ProductDetails />} />
            </Routes>
            </div>
            <Footer/>
        </div>
        
            
    )
}

export default App;
