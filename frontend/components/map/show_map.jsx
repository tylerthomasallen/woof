import React from 'react';
import ReactDOM from 'react-dom';
// import MarkerManager from '../../util/marker_manager';

class ShowMap extends React.Component {

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);
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
  //   this.MarkerManager.updateMarkers(this.props.benches);
  // }

  render() {
    return (
      <div id='show-map-container' ref='map'>
      </div>

    );
  }
}

export default ShowMap;
