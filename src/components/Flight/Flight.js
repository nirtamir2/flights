import React from 'react'

const Flight = (props) => (
    <ul className="flight card">
        <li>From: {props.from}</li>
        <li>To: {props.to}</li>
        <li>Departure Time: {props.departureTime.toLocaleString()}</li>
        <li>Landing Time: {props.landingTime.toLocaleString()}</li>
        <li>Price: {props.price}</li>
    </ul>
);

export default Flight;
