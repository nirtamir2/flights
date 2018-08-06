import React, {Component} from 'react'
import './AddFlight.css'


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
            <div>
                <h2>add flights</h2>
                <form onSubmit={this.createFlight} className="card">
                    <div className="add-flight">
                        <label htmlFor="from">From</label>
                        <input className="text-field" required
                               id="from"
                               type="text"
                               placeholder="From"
                               value={this.state.from}
                               onChange={this.setFrom}/>
                        <label htmlFor="to">To</label>
                        <input className="text-field" required type="text"
                               id="to"
                               placeholder="To"
                               value={this.state.to}
                               onChange={this.setTo}/>
                        <label htmlFor="price">Price</label>

                        <input className="text-field" required type="number" min="0"
                               id="price"
                               placeholder="Price"
                               value={this.state.price}
                               onChange={this.setPrice}/>
                        <label htmlFor="departureTime">Departure Time</label>
                        <input className="text-field" required type="datetime-local"
                               id="departureTime"
                               placeholder="Departure Time"
                               value={this.state.departureTime.toISOString().substring(0, 16)}
                               onChange={this.setDepartureTime}/>
                        <label htmlFor="landingTime">Landing Time</label>
                        <input className="text-field" required type="datetime-local"
                               id="landingTime"
                               placeholder="Landing Time"
                               value={this.state.landingTime.toISOString().substring(0, 16)}
                               onChange={this.setLandingTime}/>
                    </div>
                    <button type="submit" className="submit">Create</button>
                </form>
            </div>

        )
    }
}

export default AddFlights;
