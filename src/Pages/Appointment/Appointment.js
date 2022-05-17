import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointents from './AvailableAppointents';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (

        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointents date={date}></AvailableAppointents>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;