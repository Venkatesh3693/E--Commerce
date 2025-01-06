import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const FilteredProducts = () => {
  const { category } = useParams()
  const products = useSelector(state => state.product.products)
  const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase())

  return (
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4'>
      <h2 className='text-2xl font-bold mb-6'>{category} Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FilteredProducts