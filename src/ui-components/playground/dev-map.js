import {GoogleMap, Marker, withGoogleMap} from "react-google-maps";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import shallowEqual from "react-redux/lib/utils/shallowEqual";

const DevMap = withGoogleMap((props) => {

	const {center} = useSelector(s => s.map, shallowEqual);
	const {markers} = useSelector(s => s.markers, shallowEqual);

		return <GoogleMap
			zoom={props.zoom || 16}
			center={center || {lat: -34.397, lng: 150.644}}
		>
			{
				props.isMarkerShown ?
				<Marker
					position={props.marker}
				/> : markers.map((marker, i) => {
					console.log('###', marker.addressId);
					return <Marker
						key={i}
						position={{lat: marker.latitude, lng: marker.longitude}}
					/>
					})
			}
		</GoogleMap>
	}
)

export default DevMap;

/*
<DummyMap isMarkerShown containerElement={ <div style={{ height: `100px`, width: '100%' }} /> }
                mapElement={ <div style={{ height: `100%` }} /> } />
 */
