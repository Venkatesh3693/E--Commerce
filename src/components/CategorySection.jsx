import React from 'react'
import { useNavigate } from 'react-router-dom'
import ManCategory from '../assets/Images/man.jpg'
import WomanCategory from '../assets/Images/woman.jpg'
import KidsCategory from '../assets/Images/kid.jpg'

const categories =[
    {
        title:'Men',
        imageUrl:ManCategory,
    },
    {
        title:'Women',
        imageUrl:WomanCategory,
    },
    {
        title:'Kids',
        imageUrl:KidsCategory,
    },
]

const CategorySection = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`)
  }

  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
      {categories.map((category, index) => (
        <div 
          key={index} 
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => handleCategoryClick(category.title)}
        >
            <img src={category.imageUrl} alt={category.title} className='w-full h-full object-cover rounded-lg shadow-md'/>
            <div className='absolute top-20 left-12'>
                <p className='text-xl font-bold'>{category.title}</p>
                <p className='text-gray-600'>View ALL</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySection