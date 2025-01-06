import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productSlice'
import { Categories, mockData } from '../assets/mockData'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products)
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [dispatch])

  return (
    <div>
      <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
          <div className='w-full md:w-3/12'>
            <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
            <ul className='space-y-4 bg-gray-100 p-3 border'>
              {Categories.map((category, index) => (
                <li key={index} className='flex items-center text-sm font-medium'>
                  <input
                    type="checkbox" 
                    className='mr-2'
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                  />
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
            <img src="./hero1.webp" alt="" className='h-full w-full' />
            <div className='absolute top-16 left-8'>
              <h2 className='text-3xl font-bold'>WELCOME TO E-COMMERCE</h2>
              <p className="text-xl mt-2.5 font-bold">Shop for the best products at the best prices</p>
              <button className='bg-green-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 rounded'>Shop</button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection setSelectedCategory={setSelectedCategory} />
        <div className='container mx-auto py-12'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
            {products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop selectedCategory={selectedCategory} />
    </div>
  )
}

export default Home


