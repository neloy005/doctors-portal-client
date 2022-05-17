import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user, loading] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);


        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        };
        fetch('https://glacial-river-94953.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`You already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`)
                }
                //to close the modal
                refetch();
                setTreatment(null);
            })

    }

    return (
        <div>
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label

                        htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for {name}</h3>
                    < form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2' >
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        < select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }


                        </select >
                        <input disabled name='name' value={user?.displayName || ''} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        < input disabled name='email' value={user?.email || ''} type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        < input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        < input type="submit" value='submit' className="btn btn-secondary w-full max-w-xs" />
                    </form >

                </div >
            </div >
        </div >
    );
};

export default BookingModal;