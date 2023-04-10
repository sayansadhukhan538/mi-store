import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../Styles/ProductReviews.css'

const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {productReviews.map((item, index)=>(
            <ProductReviewCard key={item.image} price={item.price} name={item.name} image={item.image} index={index} review={item.review}/>
        ))}


    </div>
  )
}

export default ProductReviews