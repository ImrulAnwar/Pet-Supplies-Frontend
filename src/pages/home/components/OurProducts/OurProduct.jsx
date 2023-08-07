import './OurProduct.css'
import cat_dog from '../../../../assets/images/cat_dog.png'

function OurProduct() {
    return (
        <div className="product-box">
            <div className="prod left-product">
                <h2>Purr-fect Picks</h2>
                <p> Spoil your feline friends with the finest selection of pet supplies that are simply paw-some! At PetInnn.com, we understand that your fur babies deserve nothing but the best. That's why we've handpicked an exclusive range of products tailored to meet all their needs and desires Keep their spirits high with our interactive toys that'll unleash the playful side of your furry companions. From feather wands to laser pointers, their joy is just a paw's reach away!.</p>
            </div>
            <div className="prod middle-image">
                <img src={cat_dog} alt="" />
            </div>
            <div className="prod right-product">
                <h2>From Basics to Luxury</h2>
                <p>From Basics to Luxury, we have everything your furry friend needs to live their best life!  Give your furry pals the ultimate comfort with our luxurious dog beds, designed to provide a cozy retreat where they can rest and dream of endless adventures. Our trendy collars, leashes, and pet accessories not only exude style but also offer practicality and durability, ensuring your pets are the talk of the town during your daily strolls.</p>
            </div>
        </div>
    )
}

export default OurProduct