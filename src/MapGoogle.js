import GoogleMaps from "simple-react-google-maps"

function GoogleMap () {
    return (<GoogleMaps
        apiKey={"Your Google Api Key"}
        style={{height: "400px", width: "100%"}}
        zoom={6}
        center={{lat: 37.4224764, lng: -122.0842499}}
        markers={{lat: 37.4224764, lng: -122.0842499}} //optional
      />)
}

export default GoogleMap;