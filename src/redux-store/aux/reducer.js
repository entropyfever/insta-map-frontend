import initialState from "./state";
import {ACTIONS} from "./actions";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.SET_USER:
			return {
				...state,
				user: action.payload,
			}
		case ACTIONS.RESET_USER:
			return {
				...state,
				user: undefined,
			}
		default:
			return state;
	}
};

export default reducer;
