import React, { Component } from 'react';
import { FaStar } from "react-icons/fa";
import {withRouter} from './common/hooks';
import { getProductInfo } from './services/productservice';
import { getCurrentUser } from './services/authservice';
import {addProductToCart} from './services/userservice';
class ProductInfo extends Component {
    state = {  } 
    handleAddToCart = async (product,user)=>{
        if(!localStorage.getItem('token')){
            window.location = '/login'
            return null;
        }
        const {data} = await addProductToCart(user,product._id);
        localStorage.setItem('token',data);
        window.location = '/cart';
    }
    async componentDidMount() {
        const {data} = await getProductInfo(this.props.params.id);
        const currentuser = getCurrentUser();
        this.setState({product:data,user:currentuser});
    }
    render() { 
        const product = this.state.product;
        return(
            <div className="container">
                {product && <div className='row' style={{marginTop:'50px'}}>
                <div className="col-8">
                   <img src={require(`../img/${product.img}.jpg`)} alt="" style={{width:'700px',height:'600px',marginRight:'50px',marginLeft:'0px'}}/>
                 </div>
                <div className="col-4">
                    <br />
                    <h1>{product.title}</h1>
                    <h4>({product.genre.genre})</h4>
                    <h3>{product.rating}<FaStar/></h3>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>Price:{product.price}$</h2>
                    <h6>{product.description}</h6>
                    <button onClick={()=>this.handleAddToCart(product,this.state.user)} className="btn btn-secondary" style={{width:'100%'}}>Add To Cart</button>
                </div>
            </div>}
            </div>
        );
    }
}
 
export default withRouter(ProductInfo);