import {ACTIONS} from "./actions";
import initialState from "./state";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.SET_CARDS:
			return {
				...state,
				cards: action.payload,
			}
		case ACTIONS.UPSERT_CARD:
			const cardIdx = state.cards.map(c => c.userId).indexOf(action.payload.userId);
			if (cardIdx === -1){
				return {
					...state,
					cards: [
						action.payload,
						...state?.cards,
					]
				}
			}
			return {
				...state,
				cards: [
					...state?.cards.slice(0, cardIdx),
					action.payload,
					...state?.cards.slice(cardIdx + 1),
				]
			};
		case ACTIONS.DELETE_CARD:
			return {
				...state,
				cards: state.cards.filter((c => c.userId !== action.payload.userId))
			};
		default:
			return state;
	}
};

export default reducer;
