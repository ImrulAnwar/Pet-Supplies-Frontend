import './OurProduct.css';
import cat_dog from '../../../../assets/images/cat_dog.png';
import React, { useEffect, useRef } from 'react';

function OurProduct() {
  const leftProductRef = useRef(null);
  const middleImageRef = useRef(null);
  const rightProductRef = useRef(null);

useEffect(() => {
  const leftProductObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('from-left-animation');
        leftProductObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (leftProductRef.current) {
    leftProductObserver.observe(leftProductRef.current);
  }

  const middleImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('bounce-scale-opacity-animation');
        middleImageObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (middleImageRef.current) {
    middleImageObserver.observe(middleImageRef.current);
  }

  const rightProductObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('from-right-animation');
        rightProductObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (rightProductRef.current) {
    rightProductObserver.observe(rightProductRef.current);
  }

  return () => {
    if (leftProductRef.current) {
      leftProductObserver.unobserve(leftProductRef.current);
    }
    if (middleImageRef.current) {
      middleImageObserver.unobserve(middleImageRef.current);
    }
    if (rightProductRef.current) {
      rightProductObserver.unobserve(rightProductRef.current);
    }
  };
}, []);

  return (
    <div className="product-box">
      <div className="prod left-product" ref={leftProductRef}>
        <h2>Purr-fect Picks</h2>
        <p> Spoil your feline friends with the finest selection of pet supplies that are simply paw-some! At PetInnn.com, we understand that your fur babies deserve nothing but the best. That's why we've handpicked an exclusive range of products tailored to meet all their needs and desires Keep their spirits high with our interactive toys that'll unleash the playful side of your furry companions. From feather wands to laser pointers, their joy is just a paw's reach away!.</p>
      </div>
      <div className="prod middle-image" ref={middleImageRef}>
        <img src={cat_dog} alt="" />
      </div>
      <div className="prod right-product" ref={rightProductRef}>
        <h2>From Basics to Luxury</h2>
        <p>From Basics to Luxury, we have everything your furry friend needs to live their best life!  Give your furry pals the ultimate comfort with our luxurious dog beds, designed to provide a cozy retreat where they can rest and dream of endless adventures. Our trendy collars, leashes, and pet accessories not only exude style but also offer practicality and durability, ensuring your pets are the talk of the town during your daily strolls.</p>
      </div>
    </div>
  );
}

export default OurProduct;
