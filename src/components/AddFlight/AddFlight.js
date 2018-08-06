import React, {Component} from 'react'


class AddFlights extends Component {
    state = {
        from: '',
        to: '',
        departureTime: new Date(),
        landingTime: new Date(),
        price: 0,
    };


    createFlight = (e) => {
        e.preventDefault()
        const flight = {
            from: this.state.from,
            to: this.state.to,
            departureTime: this.state.departureTime,
            landingTime: this.state.landingTime,
            price: this.state.price
        }
        this.props.onCreateFlight(flight)
    }

    setFrom = (e) => {
        this.setState({from: e.target.value})
    }

    setTo = (e) => {
        this.setState({to: e.target.value})
    }
    setDepartureTime = (e) => {
        this.setState({departureTime: new Date(e.target.value)})
    }

    setLandingTime = (e) => {
        this.setState({landingTime: new Date(e.target.value)})
    }
    setPrice = (e) => {
        this.setState({price: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.createFlight}>
                <h2>add flights</h2>
                <label htmlFor="from">From</label>

                <input
                    id="from"
                    type="text"
                    placeholder="From"
                    value={this.state.from}
                    onChange={this.setFrom}/>
                <label htmlFor="to">To</label>
                <input type="text"
                       id="to"
                       placeholder="To"
                       value={this.state.to}
                       onChange={this.setTo}/>
                <label htmlFor="price">Price</label>

                <input type="text"
                       id="price"
                       placeholder="Price"
                       value={this.state.price}
                       onChange={this.setPrice}/>
                <label htmlFor="departureTime">Departure Time</label>
                <input type="datetime-local"
                       id="departureTime"
                       placeholder="Departure Time"
                       value={this.state.departureTime.toISOString().substring(0, 16)}
                       onChange={this.setDepartureTime}/>
                <label htmlFor="landingTime">Landing Time</label>
                <input type="datetime-local"
                       id="landingTime"
                       placeholder="Landing Time"
                       value={this.state.landingTime.toISOString().substring(0, 16)}
                       onChange={this.setLandingTime}/>
                <button type="submit">Create</button>
            </form>
        )
    }
}

export default AddFlights;
