import React, {Component} from 'react'
import Flight from './../Flight/Flight'
import AddFlight from './../AddFlight/AddFlight'

class Flights extends Component {
    state = {
        flights: []
    };

    onCreateFlight = (flight) => {
        this.setState(prevState => ({flights: [...prevState.flights, flight]}))
    }

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
                <AddFlight onCreateFlight={this.onCreateFlight}/>
                {this.state.flights.length ? flightList : (<p>No flights listed</p>)}
            </div>
        );
    }
}

export default Flights;
