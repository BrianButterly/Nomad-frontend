import React from 'react';
import { connect } from 'react-redux'
import { fetchHostsSuccess } from '../actions/hosts'
import { Link } from 'react-router-dom'

class Hosts extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3000/hosts')
        .then(resp => resp.json())
        .then(hosts => {
            this.props.fetchHostsSuccess(hosts)
        })
    }
    
    render() {
        const { hosts } = this.props;
        return (
            <div>
                {hosts.map(host => (
                    <Link to={`/hosts/${host.id}`} style={{color: "black"}}>
                        <div class="grid-item" style={{color: "black"}}>
                            <div key={host.id}>
                                <h3>{host.name}</h3>
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
        hosts: state.hosts
    }
}

const mapDispatchToProps = {
    fetchHostsSuccess    
}

export default connect(mapStateToProps, mapDispatchToProps)(Hosts)