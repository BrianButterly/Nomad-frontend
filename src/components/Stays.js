import React from 'react';
import { connect } from 'react-redux'
import { fetchDestinationsSuccess } from '../actions/destinations'
import { Link } from 'react-router-dom'

class Destinations extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3000/destinations')
        .then(resp => resp.json())
        .then(destinations => {
            this.props.fetchDestinationsSuccess(destinations)
        })
    }
    
    render() {
        const { destinations } = this.props;
        return (
            <div>
                {destinations.map(destination => (
                    <Link to={`/destinations/${destination.id}`} style={{color: "black"}}>
                        <div class="grid-item" style={{color: "black"}}>
                            <div key={destination.id}>
                                <h3>{destination.city}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        destinations: state.destinations
    }
}

const mapDispatchToProps = {
    fetchDestinationsSuccess    
}

export default connect(mapStateToProps, mapDispatchToProps)(Destinations)