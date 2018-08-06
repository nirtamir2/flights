import React from 'react'

const Flight = (props) => (
    <ul>
        <li>From: {props.from}</li>
        <li>To: {props.to}</li>
        <li>Departure Time: {props.departureTime}</li>
        <li>Landing Time: {props.landingTime}</li>
        <li>Price: {props.price}</li>
    </ul>
);

export default Flight;
