import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButtom from '../Shared/PrimaryButtom';

const ContactForm = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}>
            <div>
                <h2 style={{ 'marginBottom': '50px' }} className='text-[40px] text-white text-center'>Stay connected with us</h2>
                <input style={{ 'display': 'block', 'margin': 'auto' }} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> <br />
                <input style={{ 'display': 'block', 'margin': 'auto' }} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> <br />
                <textarea style={{ 'display': 'block', 'margin': 'auto', 'height': '130px' }} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <PrimaryButtom>Submit</PrimaryButtom>
        </section>
    );
};

export default ContactForm;