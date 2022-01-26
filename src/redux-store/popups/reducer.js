import {ACTIONS} from "./actions";
import initialState from "./state";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.OPEN_NEW_CARD_POPUP:
			return {
				...state,
				mainFormPopup: {
					...state.mainFormPopup,
					open: true,
				}
			};
		case ACTIONS.CLOSE_NEW_CARD_POPUP:
			return {
				...state,
				mainFormPopup: {
					...state.mainFormPopup,
					open: false,
				}
			};
		case ACTIONS.SET_USER_AND_ADDRESS:
			return {
				...state,
				mainFormPopup: {
					...state.mainFormPopup,
					onlyAddress: false,
				}
			};
		case ACTIONS.SET_ONLY_ADDRESS:
			return {
				...state,
				mainFormPopup: {
					...state.mainFormPopup,
					onlyAddress: true,
				}
			};
		default:
			return state;
	}
};

export default reducer;
