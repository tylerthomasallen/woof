import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/map/marker_manager';

class ShowMap extends React.Component {
  
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
