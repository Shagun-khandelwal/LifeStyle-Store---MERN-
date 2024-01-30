import "../layouts/background.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleShopNow = ()=>{
    navigate('/products')
  }
  return <div id="background" className="bg-image">
    <div className="container">
        <div id="banner_content">
            <div id="banner_text">
                <h1>We Sell Lifestyle</h1>
                <h6>Flat 40% OFF on premium brands</h6>
            </div>
            <div className="banner_button">
              <button className="btn btn-danger" onClick={handleShopNow}>Shop Now</button>
            </div>
        </div>
    </div>
  </div>;
};

export default Home;
