import React from 'react';

const InfoCard = ({ img, bgClass, cardTitle }) => {
    return (

        <div class={`card card-side bg-base-100 shadow-xl  ${bgClass}`} >
            <figure className='pl-5'><img src={img} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;

{/* <div className="card lg:card-side bg-base-100 shadow-xl " className={bg}>

<figure>
    <img src={img} alt="Album" />
</figure>

<div className="card-body text-white">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
    </div>
</div>
</div> */}