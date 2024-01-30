import React, { Component } from 'react';
import { getCurrentUser } from './services/authservice';
import {getOrders,cancelOrder} from './services/orderservice';
import { getProductInfo } from './services/fakeproduct';
class Orders extends Component {
    state = { 
        orders:[],products:[],
        month:{
            1:'Jan',2:'Feb',3:'March',4:'April',5:'May',6:'June',7:'July',8:'Aug',9:'Sep',10:'Oct',11:'Nov',12:'Dec'
        }
     } 
    async componentDidMount() {
        const {order} = getCurrentUser();
        // console.log(order);
        let {data:orders} = await getOrders(order);
        let products = [];
        for (let i=0;i<orders.orders.length;i++){
            let data= await getProductInfo(orders.orders[i].productid);
            products.push(data);
        }
        // console.log(products)
        this.setState({orders:orders.orders,products});
    }
    doDelete = async  (productid,orderno)=>{
        const orderid = getCurrentUser().order;
        if(window.confirm("Do you want to cancel order ?")){
            await cancelOrder(orderid,productid,orderno);
            window.location = '/orders';
        }
        else{
            // console.log("cancel")
        }
    }
    i=-1
    render() { 
        let d = new Date();
        d.setDate(d.getDate()+3);
        const {products} = this.state;
        return (<>
        <div className="mx-4">
        <table className="table table-striped table-hover table-responsive table-style">
            <thead>
            <tr>
                <th className="text-center" style={{ width: "250px" }}>
                  Order-Id
                </th>
                <th className="text-center" style={{ width: "1000px" }}>
                  TITLE
                </th>
                <th className="text-center" style={{ width: "250px" }}>
                  TYPE
                </th>
                <th className="text-center" style={{ width: "250px" }}>
                  Payment Status
                </th>
                <th className="text-center" style={{ width: "250px" }}>
                  Tracking Status
                </th>
                <th className="text-center" style={{ width: "250px" }}>
                  
                </th>
            </tr>
            </thead>
            <tbody>
                {this.state.orders.map(order =>{
                    this.i+=1
                    return (
                        <tr key={order.orderno}>
                            <td className="text-center">{order.orderno}</td>
                            <td className="text-center">{products[this.i].title}</td>
                            <td className="text-center">{products[this.i].genre.genre}</td>
                            <td className="text-center"><strong>Successful</strong></td>
                            <td className="text-center"><strong>Delivered on {d.getDate()},{this.state.month[d.getMonth()]},{d.getFullYear()}</strong></td>
                            <td className="text-center">
                      <button key={this.i} className="btn btn-danger" onClick={()=>this.doDelete(products[this.i]._id,order.orderno)}><strong>Cancel Order</strong></button>
                    </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
        </>);
    }
}
 
export default Orders;