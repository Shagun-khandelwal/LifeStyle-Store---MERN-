import React, { Component } from "react";
import { getProductInfo } from "./services/productservice";
import { getCurrentUser } from './services/authservice';
import { deleteProductFromCart } from './services/userservice';
import {addBuyNow} from './services/orderservice';
class Cart extends Component {
  state = { cart: [],
             products: [],user:undefined
        };
  i = 0;
  sum=0;
  async componentDidMount() {
    const cart = getCurrentUser().cart;
    const user = getCurrentUser();
    let products = [];
    for (let i = 0; i < cart.length; i++) {
      let { data } = await getProductInfo(cart[i]);
      products.push(data);
    }
    this.setState({ cart, products,user });
  }
  doDelete = async (user,pid)=>{
    let {data:token} = await deleteProductFromCart(user,pid);
    localStorage.setItem('token',token);
    window.location='/cart'
  }
  buyNow = async  (user,produtId)=>{
    await addBuyNow(user.order,produtId);
    this.doDelete(user,produtId);
  }
  render() {
    return (
      <React.Fragment>
        <div className="mx-4 ">
          <table className="table table-striped table-hover table-responsive table-style">
            <thead>
              <tr>
                <th className="text-center" style={{ width: "250px" }}>
                  No.
                </th>
                <th className="text-center" style={{ width: "1000px" }}>
                  TITLE
                </th>
                <th className="text-center" style={{ width: "250px" }}>
                  TYPE
                </th>
                <th className="text-center" style={{ width: "250px" }}>
                  RATING
                </th>
                <th className="text-center" style={{ width: "250px" }}>
                  PRICE
                </th>
                <th className="text-center" style={{ width: "150px" }}></th>
                <th className="text-center" style={{ width: "150px" }}></th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product) => {
                    this.i+=1;
                    this.sum+=product.price;
                return (
                  <tr key={this.i}>
                    <td className="text-center"><strong>{this.i}</strong></td>
                    <td className="">
                      <strong>{product.title}</strong>
                    </td>
                    <td className="text-center"><strong>{product.genre.genre}</strong>
                    </td>
                    <td className="text-center"><strong>{product.rating}</strong></td>
                    <td className="text-center"><strong>{product.price}$</strong></td>
                    <td className="text-center">
                      <button className="btn btn-secondary" onClick={()=>this.buyNow(this.state.user,product._id)}><strong>Buy Now</strong></button>
                    </td>
                    <td className="text-center">
                      <button key={this.i} className="btn btn-danger" onClick={()=>this.doDelete(this.state.user,product._id)}><strong>Delete</strong></button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center">
                  <strong>TOTAL</strong>
                </td>
                <td className="text-center">
                  <strong>{this.sum}$</strong>
                </td>
                <td className="text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
