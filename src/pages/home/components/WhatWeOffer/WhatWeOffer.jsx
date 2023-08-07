import './WhatWeOffer.css'
import React, { useEffect, useRef } from 'react'

import left_image from '../../../../assets/images/left_care.png'
import right_image from '../../../../assets/images/right_care.png'

function WhatWeOffer() {
    const offerRefs = [useRef(), useRef(), useRef()];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-animation');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        offerRefs.forEach((ref, index) => { // Add index parameter here
            if (ref.current) {
                observer.observe(ref.current);
                ref.current.style.animationDelay = `${index * 0.2}s`; // Apply delay based on index
            }
        });


        return () => {
            offerRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [offerRefs]);

    return (
        <div className='offer-box'>
            <div className="offer left-offer" ref={offerRefs[0]}>
                <div className="image">
                    <img src={left_image} alt="" />
                </div>
                <h2>One Stop Shop</h2>
                <p>Your one-stop shop for all your pet's needs. Premium pet food, interactive toys, grooming essentials, and more. Elevate your pet's life with convenience and quality.</p>
            </div>
            <div className="offer middle-offer" ref={offerRefs[1]}>
                <h2>Making lives better <br/> one paw at a time</h2>
                <p>Discover top-quality supplies for your furry friends and embrace the happiness they bring to your life. Celebrate the unconditional love they offer, one wagging tail at a time.</p>
            </div>
            <div className="offer right-offer" ref={offerRefs[2]}>
                <div className="image">
                    <img src={right_image} alt="" />
                </div>
                <h2>Paw-Some Community</h2>
                <p>Become a part of our pet-loving community, where you can connect with fellow pet owners, share experiences, and exchange stories of love and joy that our pets bring into our lives.</p>
            </div>
        </div>
    )
}

export default WhatWeOffer
