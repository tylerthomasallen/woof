import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/map/marker_manager';

class ShowMap extends React.Component {

  componentDidMount() {
    // const { dog } = this.props;
    // const map = ReactDOM.findDOMNode(this.refs.map);
    //
    // const mapOptions = {
    //   center: { lat: dog.lat, lng: dog.lng }, // this is SF
    //   zoom: 13
    // };
    //
    // this.map = new google.maps.Map(map, mapOptions);
    // this.MarkerManager = new MarkerManager(this.map);
    // this.registerListeners();
  }

  // registerListeners() {
  //   google.maps.event.addListener(this.map, 'idle', () => {
  //     const { north, south, east, west } = this.map.getBounds().toJSON();
  //     const bounds = {
  //       northEast: { lat:north, lng: east },
  //       southWest: { lat: south, lng: west }
  //     };
  //     this.props.updateBounds(bounds);
  //     this.props.getBenches(bounds);
  //  });
  // }

  // componentDidUpdate() {
  //
  //   const { dog } = this.props;
  //   const map = ReactDOM.findDOMNode(this.refs.map);
  //
  //   const mapOptions = {
  //     center: { lat: dog.lat, lng: dog.lng }, // this is SF
  //     zoom: 20
  //   };
  //
  //   this.map = new google.maps.Map(map, mapOptions);
  //   this.MarkerManager = new MarkerManager(this.map);
  //   this.MarkerManager.updateMarkers([dog]);
  // }

  render() {
    const { dog } = this.props;

    return (
      <div className="show-map">
        <img src={`https://maps.googleapis.com/maps/api/staticmap?scale=2&center=${dog.lat},${dog.lng}&zoom=13
&markers=color:0xd32323 | ${dog.lat}, ${dog.lng}&size=286x135&scale=2
&key=AIzaSyAtuRxYMQ20cACgsvqS9xvEA1hTQG43pV0`} width="286"/>
      </div>
    );
  }
}

export default ShowMap;
