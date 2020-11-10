import React from 'react'
import showHost from '../actions/hosts'
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';


class ShowHost extends React.Component {

    constructor() {
        super();
    
        this.state = {
          rating: 1
        };
    }


    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

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
            <div >
                <h3>Name: {name}</h3>
                <h1>Age: {age}</h1>
                <h1>Bio: {bio}</h1>
                <h1>Rating: {rating} ⭐️</h1>
            </div>
        )
    }

    renderRate() {
        const { rating } = this.state;
        return (                
          <div>
            <h2>Rate Host:</h2>
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        );
      }

   render() {
       return (
           <div className="show-card">
               {this.renderHost()}
               <br/>
               {this.renderRate()} 
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