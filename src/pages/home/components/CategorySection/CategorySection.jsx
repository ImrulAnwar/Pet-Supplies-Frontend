import './CategorySection.css'
import React, {useState, useEffect} from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import dog_image  from '../../../../assets/images/dog_category.png'
import cat_image from '../../../../assets/images/cat_category.png'
import bird_image from '../../../../assets/images/bird_category.png'



function CategorySection() {
    useEffect(() => {
        document.querySelectorAll('.category-item').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`
        })
    }, [])
    return (
        <div className='category-section'>
            <CategoryItem text="Dog" image={dog_image}/>
            <CategoryItem text="Cat" image={cat_image}/>
            <CategoryItem text="Bird" image={bird_image}/>
        </div>
    )
}

export default CategorySection