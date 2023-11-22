import React from 'react';

const PriceCard = ({ price }) => {
    console.log(price);
    const { membership, duration, details, image } = price;
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{membership}</h2>
                    <h2><span>{price.price} / </span>
                    <span>{duration}</span></h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;