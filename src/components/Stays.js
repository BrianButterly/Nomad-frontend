import React from 'react'
import { connect } from 'react-redux'
import { fetchStaysSuccess } from '../actions/stays'
import { Link } from 'react-router-dom'

class Stays extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3000/stays')
        .then(resp => resp.json())
        .then(stays => {
            this.props.fetchStaysSuccess(stays)
        })
    }

    render() {
        const { stays } = this.props;
        return (
            <div>
                {stays.map(stay => (
                    <Link to={`/stays/${stay.id}`} style={{color: "black"}}>
                        <div class="grid-item" style={{color: "black"}}>
                            <div key={stay.id}>
                                <h3>{stay.destination_id}</h3>
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
        stays: state.stays
    }
}

const mapDispatchToProps = {
    fetchStaysSuccess    
}

export default connect(mapStateToProps, mapDispatchToProps)(Stays)