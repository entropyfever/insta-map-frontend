import initialState from "./state";
import {ACTIONS} from "./actions";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.ADD_MARKER:
			return {
				...state,
				markers: [
					...state.markers,
					action.payload,
				]
			}
		case ACTIONS.DELETE_MARKER:
			return {
				...state,
				markers: state.markers.filter(m => m.addressId !== action.payload.addressId)
			};
		default:
			return state;
	}
};

export default reducer;
