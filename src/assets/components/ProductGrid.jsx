import React from 'react'
import ProdcutCard from './ProdcutCard'
const ProductGrid = ({products}) => {
    console.log(products)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24">
        {
            products.map((product) => {
                return <ProdcutCard key={product.id} product={product} />
            })
        }
    </div>
  )
}

export default ProductGrid