import './CategoryItem.css'
import CustomButton from '../../../../layouts/CustomButton/CustomButton'

function CategoryItem({image, text}) {
  return (
    <div className='category-item'>
      <div className="pet-box">
        <img src={image} alt={text} />
      </div>
      <div className="pet-btn-box">
        <CustomButton text = {text}/>
      </div>
    </div>
  )
}

export default CategoryItem