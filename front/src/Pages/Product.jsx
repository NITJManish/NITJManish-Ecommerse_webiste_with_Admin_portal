import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatdProuct from '../Components/RelatedProduct/RelatdProuct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div className='product'>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatdProuct/>
    </div>
  )
}

export default Product
