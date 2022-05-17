import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButtom from '../Shared/PrimaryButtom';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p className='text-white pb-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, harum laboriosam. Nisi laborum obcaecati voluptatem sequi, dolorem quaerat optio architecto dolorum aperiam ipsum quas reprehenderit minus molestias vitae iusto incidunt vel saepe. Nesciunt voluptatem omnis magnam aliquid nobis reiciendis eligendi.</p>
                <PrimaryButtom>Get Started</PrimaryButtom>
            </div>
        </section>
    );
};

export default MakeAppointment;