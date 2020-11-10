import React from 'react'
import showDestination from '../actions/destinations'
import { connect } from 'react-redux'
import Map from './Map'

class Show extends React.Component {
    
    componentDidMount(){
        fetch(`http://localhost:3000/destinations/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then( destination => {
            this.props.showDestination(destination)
        })
    }
    
    renderDestination = () => {
        const { country, city } = this.props.destination
        return (
            <div>
                <h2>City: {city}</h2>
                <h1>Country: {country}</h1>
            </div>
        )
    }
    
    render() {
        return (
            <div>
            <div className="show-card">
               {this.renderDestination()} 
           </div>
           <Map />
           </div>
       )
    }
}

const mapDispatchToProps = {
    showDestination,
}

const mapStateToProps = (state) => {
    return {
        destination: state.destinations 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
