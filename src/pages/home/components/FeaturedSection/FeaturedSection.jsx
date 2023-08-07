import './FeaturedSection.css'
import ProductItem from '../../../../layouts/ProductItem/ProductItem'

function FeaturedSection({items}) {
    return (
        <div className='featured-box'>
            <h1>Featured Products</h1>
            <div className="featured-items">    
                {items.map((item) => (
                    <ProductItem key={item.slug} item={item} />
                ))}
            </div>
            <p className="view-all">
                View all &gt;
            </p>
        </div>
    )
}

export default FeaturedSection