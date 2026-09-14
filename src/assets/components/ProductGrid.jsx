import React from 'react'
import ProdcutCard from './ProdcutCard'
const ProductGrid = ({products}) => {
    console.log(products)
  return (
    <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:my-16 lg:grid-cols-3 xl:grid-cols-4">
        {
            products.map((product) => {
                return <ProdcutCard key={product.id} product={product} />
            })
        }
    </div>
  )
}

export default ProductGrid
