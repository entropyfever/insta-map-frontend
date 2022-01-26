import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

// Get latitude & longitude from address.
export const fromAddress = (address) => Geocode.fromAddress(address).then(
	(response) => {
		const { lat, lng } = response.results[0].geometry.location;
		return {lat, lng};
	},
	(error) => {
		console.error(error);
	}
);

