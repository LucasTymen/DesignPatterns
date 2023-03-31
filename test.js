lat =[]
lon = []
alt =[]
function createAirplane(id) {
  return {
    id: id,
    nearbyAirplanes: {/* This object updates with data about nearby airplanes based on scanADSBOut() method */ },
    getLocation() {
      // code to get latitude, longitude, and altitude
      return [lat, lon, alt]
    },
    scanADSBOut() {
      // Code that uses an antenna from nearby airplanes to find nearby airplanes based on proximity of latitude, longitude, and altitude
    },
    checkForCrash() {
      let location = this.getLocation();
      // Code that checks if locations of nearby airplanes are within X miles of each other and calculates trajectory based on location and altitude
    },

  }
 }

 let flight1 = createAirplane(1);
 let flight2 = createAirplane(2);
 let flight3 = createAirplane(3);

 flight1.scanADSBOut(); // This method scans for any planes that are nearby and stores the values in the `nearbyAirplanes` property
 console.log(flight1) // After logging the `flight1` object, it’ll display the latitude, longitude, and altitude in the `nearbyAirplanes` object, along with other properties
 flight1.checkForCrash(); // This does a brute force check to check for an impending crash by using the values in the `nearbyAirplanes` property and the airplane's current location, using the `getLocation()` method
