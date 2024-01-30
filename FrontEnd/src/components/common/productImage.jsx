import React from "react";
import {Link} from 'react-router-dom';
import { FaStar } from "react-icons/fa";
const ProductImage = ({ detail }) => {
  return (
    <div className="col-sm-2 border border-secondary rounded justify-content-center align-items-center" style={{'padding':'8px','margin':'10px'}}>
      <img src={require(`../../img/${detail.img}.jpg`)} alt="" height={290} width={240} className='justify-content-center align-items-center' />
      <h3 className="text-center">{detail.title}</h3>
      <h4 className="text-center">{detail.price}$</h4>
      <h6 className="text-center">({detail.rating}<FaStar/>)</h6>
      <Link  to={`/productinfo/${detail._id}`}><button className="btn btn-primary" style={{width:'240px'}}>View</button></Link>
      </div>
  );
};

export default ProductImage;
