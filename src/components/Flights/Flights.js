import React, {Component} from 'react'
import Flight from './../Fligth/Flight'

class Flights extends Component {
    state = {
        flights: []
    };

    render() {
        const flightList = this.state.flights.map((e, index) =>
            (<Flight
                key={index}
                from={e.from}
                to={e.to}
                departureTime={e.departureTime}
                landingTime={e.landingTime}
                price={e.price}/>)
        );

        return (
            <div>
                <h1>Flights</h1>
                {this.state.flights.length ? flightList : (<p>No flights listed</p>)}
            </div>
        );
    }
}

export default Flights;
