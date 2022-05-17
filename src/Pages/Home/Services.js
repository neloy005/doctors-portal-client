import React from 'react';
import Service from './Service';
import flouride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import cavity from '../../assets/images/cavity.png';


const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Flouride Treatment",
            description: '',
            image: flouride

        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: '',
            image: cavity

        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: '',
            image: whitening

        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>our services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;