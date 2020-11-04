import React from 'react'
import showHost from '../actions/hosts'
import { connect } from 'react-redux'
import { FaStar } from 'react-icons/fa';
// import { Rating } from 'semantic-ui-react'


class ShowHost extends React.Component {
    
    // state = {
    //     rating: ''
    // }

    componentDidMount(){
        fetch(`http://localhost:3000/hosts/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then( host => {
            this.props.showHost(host)
        })
    }
    

    handleClick = (event) => {
        const reqObj = {
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ rating: parseInt(event.target.ariaPosInSet) })
        }

        fetch(`http://localhost:3000/hosts/${this.props.host.id}`, reqObj)
            .then(resp => resp.json())
            .then(data => {
              console.log(data)
            })
    }

    renderHost = () => {
        const { name, age, bio, rating } = this.props.host
        return (
            <div>
                <h1>Name: {name}</h1>
                <h2>Age: {age}</h2>
                <h2>Bio: {bio}</h2>
                <br/>
                <h2>Rating: {rating} ⭐️</h2>
                <br/>
                {/* <div>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                            <label>
                                <input type="radio" name="rating" value={ratingValue} />
                                <FaStar size={50} />
                            </label>
                        )
                    })}
                </div> */}
            </div>
        )
    }
    // onClick={(event) => this.handleClick(event)} icon='star' defaultRating={3} maxRating={5}
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