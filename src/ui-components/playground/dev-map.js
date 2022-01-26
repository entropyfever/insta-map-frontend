import {GoogleMap, Marker, withGoogleMap} from "react-google-maps";
import React from "react";

const MyMapComponent = withGoogleMap((props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: -34.397, lng: 150.644 }}
	>
		{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
	</GoogleMap>
)

export default MyMapComponent;

/*
<DummyMap isMarkerShown containerElement={ <div style={{ height: `100px`, width: '100%' }} /> }
                mapElement={ <div style={{ height: `100%` }} /> } />
 */
