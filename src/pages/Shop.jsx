import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Shop = ({ selectedCategory }) => {
  const products = useSelector(state => state.product.products)

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products

  return (
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4'>
      <h2 className='text-2xl font-bold mb-6'>Shop</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className='col-span-full text-center'>No products found</p>
        )}
      </div>
    </div>
  )
}

export default Shop
