import React from 'react'
import showDestination from '../actions/destinations'
import { connect } from 'react-redux'

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
                <h3>City: {city}</h3>
                <h1>Country: {country}</h1>
            </div>
        )
    }

   render() {
       return (
           <div className="show-card">
               {this.renderDestination()} 
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