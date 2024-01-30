import React from 'react';
import ProductImage from './common/productImage';

const ListProduct = ({allProducts:products}) => {
    return (products.map(p =>{
      return  <ProductImage key={p._id} detail={p}/>
    }));
}
 
export default ListProduct;