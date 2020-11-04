import React from 'react'
import showHost from '../actions/hosts'
import { connect } from 'react-redux'

class ShowHost extends React.Component {


    componentDidMount(){
        fetch(`http://localhost:3000/hosts/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then( host => {
              this.props.showHost(host)
            })
    }

    renderHost = () => {
        const { name, age, bio, rating } = this.props.host
        return (
            <div>
                <h3>Name: {name}</h3>
                <h1>Age: {age}</h1>
                <h1>Bio: {bio}</h1>
                <h1>Rating: {rating} ⭐️</h1>
            </div>
        )
    }

   render() {
       return (
           <div className="show-card">
               {this.renderHost()} 
           </div>
       )
   }
}

const mapDispatchToProps = {
    showHost,
}

const mapStateToProps = (state) => {
    return {
        host: state.hosts 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowHost)