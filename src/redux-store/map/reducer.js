import {ACTIONS} from "./actions";
import initialState from "./state";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.SET_CENTER:
			return {
				...state,
				center: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
