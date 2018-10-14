class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }


  updateMarkers(dogs) {
    dogs.forEach(dog => this.createMarker(dog));
  }

  createMarker(dog) {
    const marker = new google.maps.Marker({
      position: {lat: dog.lat, lng: dog.lng},
      map: this.map,
      title: dog.name
    });

    // marker.addListener('click', () => {
    //   alert(`clicked on: ${dog.name}`);
    // });
  }
}

export default MarkerManager;
