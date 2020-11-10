import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import mapStyle from './mapStyle'

const mapStyles = {
  width: '800px',
  height: '500px',
  marginLeft: '300px',
  marginTop: '20px'
};

mapStyle.defaultProps = mapStyle

class MapContainer extends Component {
  
  state = {
    test: false
  }
  
  toggleTest = () => {
    this.setState({
      test: !this.state.test
    })
  }

  render() {
      return (
        <div>
          
          <Map
            google={this.props.google}
            zoom={11}
            style={mapStyles}
            initialCenter={{ lat: 41.948144, lng: -87.656246 }}
            onClick={(e) => {
              console.log(e)
            }}
            >
          <div className="host-card">
          <h2 >Hosts in the area</h2>
          <hr className="line3"/>
          <h4>Jeff</h4>
          <h4>JoAnna</h4>
          <h4>Austin</h4>
          </div>
              {
                this.state.test 
                ?
                <Marker position={{ lat: 41.958523, lng: -87.653581 }} />
                :
                null
              }
              {
                this.state.test 
                ?
                <Marker position={{ lat: 41.954427, lng: -87.669701 }} />
                :
                null
              }
              {
                this.state.test 
                ?
                <Marker position={{ lat: 41.884651, lng: -87.622815 }} />
                :
                null
              }
              {
                this.state.test 
                ?
                <Marker position={{ lat: 41.967725, lng: -87.658713 }} />
                :
                null
              }
              {
                this.state.test 
                ?
                <Marker position={{ lat: 41.970074, lng: -87.659918 }} />
                :
                null
              }
              {
                this.state.test 
                ?
                <Marker position={{ lat: 41.959457, lng: -87.682308 }} />
                :
                null
              }
              {
                this.state.test 
                ?
                <Marker position={{ lat: 41.936311, lng: -87.661390 }} />
                :
                null
              }
              {
                this.state.test 
                ?
                <Marker position={{ lat: 41.934387, lng: -87.649220 }} />
                :
                null
              }
              {
                this.state.test 
                ?
                <Marker position={{ lat: 41.932854, lng: -87.649491 }} />
                :
                null
              }
              {
                this.state.test 
                ?
                <Marker position={{ lat: 41.910996, lng: -87.635569 }} />
                :
                null
              }
          </Map>
          <div className="drpbtn">
            <br/><DropdownButton size="lg" title="Nightlife">
                <Dropdown.Item onClick={this.toggleTest} href="#/action-1">Bars/Pubs/Clubs</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Live Shows</Dropdown.Item>
            </DropdownButton><br/>
            <DropdownButton size="lg" title="Sightseeing">
                <Dropdown.Item onClick={this.toggleTest} href="#/action-1">Top Attractions</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Museums</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tours</Dropdown.Item>
            </DropdownButton><br/>
            <DropdownButton size="lg" title="Restaurants">
                <Dropdown.Item href="#/action-1">Quick bites</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Fancy Dinner Night</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Best Brunch</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      );
    }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyCs0RPNLD9kydIWv_GuPPV4dk-S8jIvq9A'})(MapContainer);